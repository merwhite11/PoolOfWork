import React from 'react';
import { Container } from 'react-bootstrap';
import BookList from './BookList.jsx'

const Writing = () => {

  return (
    <Container id='writing' className="subsection">
      <Container className="title">Bookshelf</Container>
      <BookList/>
    </Container>
  );
};

export default Writing;