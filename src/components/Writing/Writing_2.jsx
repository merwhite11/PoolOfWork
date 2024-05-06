import React from "react";
import { Container, Row} from "react-bootstrap";
import BookList from './BookList.jsx';
import "./Writing.scss";

// import BookList from './BookList.jsx'

const Writing = () => {
  return (
    <div className="outer py-3">
      <Container>
        <h1>Writing</h1>
        <Row className="d-flex justify-content-center">
          <BookList/>
        </Row>
      </Container>
    </div>
  );
};

export default Writing;
