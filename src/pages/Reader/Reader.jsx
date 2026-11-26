import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactReader } from "react-reader";
import { PiDotsThreeOutline, PiDotsThreeOutlineFill } from "react-icons/pi";
import useLocalStorageState from "use-local-storage-state";
import urljoin from "url-join";
import Modal from "../../components/Modal/Modal.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

const Reader = ({ doc, title }) => {
  const publicUrl = import.meta.env.BASE_URL;
  const epubUrl = urljoin(publicUrl, "Epubs", doc);
  const renditionRef = useRef(null);
  const [rend, setRend] = useState(null);
  const [bookProgress, setBookProgress] = useLocalStorageState(
    "book-progress",
    {}
  );
  const [largeText, setLargeText] = useState(false);
  const [selections, setSelections] = useLocalStorageState("selections", {});
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      setSelections(updatedSelections);
      rend.annotations.add("highlight", cfiRange, {}, undefined, "hl", {
        fill: "#E8BA6D",
        "fill-opacity": "0.4",
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

  const toggleModal = () => setModalOpen((prev) => !prev);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-lapis">
      <div className="border-b border-lapis/10 bg-paper-card/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-10">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-lapis/15 bg-paper px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-lapis no-underline transition-colors hover:border-amber/60 hover:text-amber"
            >
              ← Shelf
            </Link>
            <button
              type="button"
              onClick={toggleModal}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-label="Reader preferences"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-lapis/15 bg-paper text-lapis transition-colors hover:border-amber/60 hover:text-amber"
            >
              {isHovered ? (
                <PiDotsThreeOutlineFill size={20} />
              ) : (
                <PiDotsThreeOutline size={20} />
              )}
            </button>
          </div>

          <div className="hidden flex-1 justify-end md:flex">
            <NavBar variant="compact" />
          </div>
        </div>
      </div>

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

      <div className="mx-auto flex w-full max-w-6xl flex-1 px-2 py-4 sm:px-6">
        <div className="relative h-[calc(100vh-5.5rem)] w-full overflow-hidden rounded-2xl border border-lapis/10 bg-paper-card shadow-[0_8px_30px_rgba(27,50,86,0.06)]">
          <ReactReader
            title={title}
            url={epubUrl}
            location={bookProgress ? bookProgress[title] : undefined}
            locationChanged={handleLocationChanged}
            getRendition={(rendition) => {
              renditionRef.current = rendition;
              setRend(rendition);
              rendition.hooks.content.register((contents) => {
                const body = contents.window.document.querySelector("body");
                if (body) {
                  body.oncontextmenu = () => false;
                }
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Reader;
