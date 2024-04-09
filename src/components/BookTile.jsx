import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BookTile = () => {
  return(
    <Card className="book-tile">
      <Card.Img variant="top" src="../assets/BookCovers/GVDCover.jpg" />
        <Card.Body>
          <Card.Title>Card 1</Card.Title>
            <Card.Text>
              This is the content of card 1.
            </Card.Text>
        </Card.Body>
    </Card >
  )
};

export default BookTile;