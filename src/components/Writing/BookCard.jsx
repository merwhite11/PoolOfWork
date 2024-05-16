import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Reader from "../Reader/Reader.jsx";
import "./Writing.scss";

function BookCard({ cover, summary, path, title }) {
  const isLargeScreen = useMediaQuery({ minWidth: 1200 });
  const [showReader, setShowReader] = useState(false);
  const [epubPath, setEpubPath] = useState("");

  const handleClick = (e) => {
    console.log('Clicked')
    setEpubPath(path);
    setShowReader(true);
  };

  return (
    <div>
      {!showReader && (
        <Col
          xs={10}
          md={4}
          lg={4}
          className="d-flex h-100 justify-content-center"
        >
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
                  <Button className="book-card__button btn btn-light">
                    About
                  </Button>
                )}
                {/* <Button className="book-card__button btn btn-light" onClick={(e) => handleClick(path)}>Read</Button> */}
                <a href={path} className="book-card__button btn btn-light">
                  Read
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )}
      {showReader && <Reader doc={epubPath} title={title} />}
    </div>
  );
}

export default BookCard;
