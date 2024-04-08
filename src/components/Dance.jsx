import React from 'react';
import { Container } from 'react-bootstrap';
import BookList from './BookList.jsx'

const Dance = () => {

  return (
    <Container id='dance' className="subsection">
      <Container className="title">Dance Floor</Container>
      <BookList/>
    </Container>
  );
};

export default Dance;
