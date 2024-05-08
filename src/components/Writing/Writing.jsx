import React from "react";
import { Container, Row} from "react-bootstrap";
import BookList from './BookList.jsx';
import "./Writing.scss";

// import BookList from './BookList.jsx'

const Writing = () => {
  return (
      <Container className="writing-container" >
        <h1 className="d-flex justify-content-center justify-content-md-start">Writing</h1>
        <Row className="d-flex justify-content-center">
          <BookList/>
        </Row>
      </Container>
  );
};

export default Writing;
