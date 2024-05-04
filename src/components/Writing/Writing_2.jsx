import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Writing.scss";
import GVDCover from "../../assets/BookCovers/GVDCover.jpg";
import BlinkingCover from "../../assets/BookCovers/BlinkingCover.jpg";
import BobbyAndShilohCover from "../../assets/BookCovers/BobbyAndShiloh.jpg";
// import BookList from './BookList.jsx'

const Writing = () => {
  return (
    <div className="outer py-3">
      <Container>
        <h1>Writing</h1>
        <Row>



        {/* <Row className="mb-2 h-md-20 justify-content-center"> */}
          <Col md={4}>
            <div className="d-flex h-100">

            <Card className="book-card flex-lg-row mb-4 box-shadow">
              <Card.Img className="book-card__img card-img-left p-2" src={GVDCover}></Card.Img>
              <Card.Body className="d-flex flex-column align-items-center text-center">
              <Card.Title>The Grapevine Diaries</Card.Title>
              <Card.Text className="mb-auto">This is my card test</Card.Text>
              <Button className="btn btn-light">Read</Button>
              </Card.Body>
            </Card>
            </div>
          </Col>
        {/* </Row> */}

        {/* <Row className="mb-2 h-md-33 justify-content-center"> */}
          <Col md={4}>
            <div className="d-flex h-100">

            <Card className="book-card flex-lg-row mb-4 box-shadow">
              <Card.Img className="book-card__img card-img-left p-2" src={BlinkingCover}></Card.Img>
              <Card.Body className="d-flex flex-column align-items-center text-center">
              <Card.Title>Story Twice Told // Cuento Dos Veces Contado</Card.Title>
              <Card.Text className="mb-auto">This is my card test</Card.Text>
              <Button className="btn btn-light">Read</Button>
              </Card.Body>
            </Card>
            </div>
          </Col>
        {/* </Row> */}

        {/* <Row className="mb-2 h-md-33 justify-content-center"> */}
          <Col md={4}>
            <div className="d-flex h-100">

            <Card className="book-card flex-lg-row mb-4 box-shadow">
              <div className="bobby-pic m-2 mb-0">
              <Card.Img className="book-card__img card-img-left" src={BobbyAndShilohCover}></Card.Img>
              </div>
              <Card.Body className="d-flex flex-column align-items-center text-center">
              <Card.Title>Bobby & Shiloh Save the Night</Card.Title>
              <Card.Text className="mb-auto">This is my card test</Card.Text>
              <Button className="btn btn-light">Read</Button>
              </Card.Body>
            </Card>
            </div>
          </Col>
        {/* </Row> */}

        </Row>
      </Container>
    </div>
  );
};

export default Writing;
