import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Reader from "../../pages/Reader/Reader.jsx";
import AboutModal from "../AboutModal/AboutModal.jsx";
import "./Writing.scss";

function BookCard({ cover, summary, path, title }) {
  const isLargeScreen = useMediaQuery({ minWidth: 1200 });
  const [showReader, setShowReader] = useState(false);
  const [epubPath, setEpubPath] = useState("");
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

const toggleAboutModal = (title) => {
  console.log('title!', title)
  setAboutModalOpen(!aboutModalOpen);
}

  return (
    <Col xs={10} md={4} lg={4} className="d-flex h-100 justify-content-center">
      <Card className="book-card w-100 flex-xl-row mb-4 box-shadow">
        <Card.Img
          className="book-card__img p-2 p-xl-3"
          src={cover}
          loading="eager"
        ></Card.Img>
        <Card.Body className="book-card__body d-flex flex-column align-items-center text-center">
          {isLargeScreen && (
            <div>
              <Card.Title className="book-card__title text-start">
                {title}
              </Card.Title>
              <Card.Text className="book-card__text text-start">
                {summary}
              </Card.Text>
            </div>
          )}
          <div className="book-card__button-box d-flex">
            {!isLargeScreen && (
              <div>
              <Button className="book-card__button btn btn-light"
              onClick={(e) => toggleAboutModal()}
              >About</Button>
              <AboutModal
              aboutModalOpen={aboutModalOpen}
              toggleAboutModal={toggleAboutModal}
              title={title}
              summary={summary}
              ></AboutModal>
              </div>
            )}
            <Link to={`/reader/${path}`}>
              <Button
                className="book-card__button btn btn-light"
              >
                Read
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BookCard;
