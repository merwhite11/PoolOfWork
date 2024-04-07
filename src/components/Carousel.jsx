import React from 'react';
import { Carousel, Container, Card } from 'react-bootstrap';
import BookTile from './BookTile.jsx'
const CardCarousel = () => {
  return (
    <Container className="carousel-container">
        <BookTile/>
        <BookTile/>
        <BookTile/>
    </Container>
  );
};

export default CardCarousel;