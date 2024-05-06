import React from 'react';
import {Col, Card, Button} from 'react-bootstrap';
import './Writing.scss';

function BookCard({ cover, summary, path, title }) {

    return (
      <Col xs={10} md={4} lg={4} className="d-flex h-100 justify-content-center" >
      <Card className="book-card w-100 flex-xl-row mb-4 box-shadow">
        <Card.Img className="book-card__img p-2" src={cover} loading="eager"></Card.Img>
        <Card.Body className="book-card__body d-flex flex-column align-items-center text-center">
        {/* <Card.Title>The Grapevine Diaries</Card.Title> */}
        <Card.Text className="mb-auto">This is my card test</Card.Text>
        <Button className="btn btn-light">Read</Button>
        </Card.Body>
      </Card>
    </Col>
    )
}

export default BookCard;