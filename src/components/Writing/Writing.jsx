import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Writing.scss";
import GVDCover from "../../assets/BookCovers/GVDCover.jpg";
import BlinkingCover from '../../assets/BookCovers/BlinkingCover.jpg';
import BobbyAndShilohCover from '../../assets/BookCovers/BobbyAndShiloh.jpg';
// import BookList from './BookList.jsx'

const Writing = () => {
  return (
    <div className="outer py-3">
      <Container>
        <h1>Writing</h1>
        <Row className="outer__row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <Col className="h-100">
            <Card className="book-card shadow-sm">
              <Card.Img
              className="book-card__img img-fluid p-2"
               src={GVDCover}
               alt="Grapevine Diaries Cover"
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">The Grapevine Diaries</Card.Title>
                <Card.Text>This is my card test</Card.Text>
                <Button className="btn btn-light">Read</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="h-100">
            <Card className="book-card shadow-sm">
              <Card.Img
              className="book-card__img img-fluid p-2"
               src={BlinkingCover}
               alt="Story Twice Told Cover"
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Story Twice Told // Cuento Dos Veces Contado</Card.Title>
                <Card.Text>This is my card test</Card.Text>
                <Button className="btn btn-light">Read</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="h-100">
            <Card className="book-card shadow-sm">
              <Card.Img
              className="book-card__img img-fluid p-2"
               src={BobbyAndShilohCover}
               alt="Grapevine Diaries Cover"
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Bobby & Shiloh Save the Night</Card.Title>
                <Card.Text>This is my card test</Card.Text>
                <Button className="btn btn-light">Read</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Writing;
