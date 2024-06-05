import React, { useState, useRef, useEffect } from "react";
import { ReactReader } from "react-reader";
import { PiDotsThreeOutline, PiDotsThreeOutlineFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import useLocalStorageState from "use-local-storage-state";
import urljoin from "url-join";
import Modal from "../../components/Modal/Modal.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";

const Reader = ({ doc, title }) => {
  //epub
  const publicUrl = process.env.PUBLIC_URL;
  const epubUrl = urljoin(publicUrl, "Epubs", doc);
  const renditionRef = useRef(null);
  const [rend, setRend] = useState(null);
  const [bookProgress, setBookProgress] = useLocalStorageState(
    "book-progress",
    {}
  );
  const [largeText, setLargeText] = useState(null);
  const [selections, setSelections] = useLocalStorageState("selections", {});
  //modal
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  //hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  //hamburger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setMenuOpen(false);
    }
  }, [location.pathname]);

  //epub
  useEffect(() => {
    if (!selections || typeof selections !== "object") {
      setSelections({});
    }
  }, []);

  const handleLocationChanged = (loc) => {
    setBookProgress({
      ...bookProgress,
      [title]: loc,
    });
  };

  function setRenderSelection(cfiRange, contents) {
    if (rend) {
      const existingSelections =
        JSON.parse(localStorage.getItem("selections")) || {};
      const updatedSelections = {
        ...existingSelections,
        [title]: [
          ...(existingSelections[title] || []),
          { text: rend.getRange(cfiRange).toString(), cfiRange },
        ],
      };
      localStorage.setItem("selections", JSON.stringify(updatedSelections));
      rend.annotations.add("highlight", cfiRange, {}, undefined, "hl", {
        fill: "grey",
        "fill-opacity": "0.5",
        "mix-blend-mode": "multiply",
      });
      const selection = contents.window.getSelection();
      selection?.removeAllRanges();
    }
  }

  useEffect(() => {
    if (rend) {
      rend.on("selected", setRenderSelection);
      return () => {
        rend?.off("selected", setRenderSelection);
      };
    }
  }, [setSelections, rend]);

  useEffect(() => {
    if (rend) {
      rend.themes.fontSize(largeText ? "140%" : "100%");
    }
  }, [rend, largeText]);

  //modal
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const dots = isHovered ? (
    <PiDotsThreeOutlineFill
      size={30}
      className="mt-2"
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleModal}
    />
  ) : (
    <PiDotsThreeOutline
      size={30}
      className="mt-2"
      onMouseEnter={() => setIsHovered(true)}
      onClick={toggleModal}
    />
  );

  return (
    <div className="container background">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-start align-items-center">
          {dots}
          <Modal
            modalOpen={modalOpen}
            toggleModal={toggleModal}
            largeText={largeText}
            setLargeText={setLargeText}
            rend={rend}
            selections={selections}
            setSelections={setSelections}
            title={title}
          />
        </div>
        {!isSmallScreen && (
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <NavBar />
          </div>
        )}
        {isSmallScreen && !menuOpen && (
          <button className="col-4 justify-content-end" onClick={toggleMenu}>
            <RxHamburgerMenu />
          </button>
        )}
        {isSmallScreen && menuOpen && <Dropdown />}
        <div className="col-md-12 aspect-ratio aspect-ratio-3x4 overflow-hidden d-flex justify-content-center align-items-center">
          <div
            className="reader-container"
            style={{
              height: "100vh",
              width: "100vw",
            }}
          >
            <ReactReader
              title={title}
              url={epubUrl}
              location={bookProgress ? bookProgress[title] : bookProgress}
              locationChanged={handleLocationChanged}
              getRendition={(rendition) => {
                renditionRef.current = rendition;
                setRend(rendition);
                rendition.hooks.content.register((contents) => {
                  const body = contents.window.document.querySelector("body");
                  if (body) {
                    body.oncontextmenu = () => {
                      return false;
                    };
                  }
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reader;
