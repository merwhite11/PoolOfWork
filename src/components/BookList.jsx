import React from 'react';
import { Container } from 'react-bootstrap';
import BookTile from './BookTile.jsx'

const BookList = () => {
  return (
    <Container className="carousel-container">
        <BookTile/>
        <BookTile/>
        <BookTile/>
    </Container>
  );
};

export default BookList;