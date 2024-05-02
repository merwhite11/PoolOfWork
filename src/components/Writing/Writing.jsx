import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Writing.scss'
import GVDCover from '../../assets/BookCovers/GVDCover.jpg'
// import BookList from './BookList.jsx'

const Writing = () => {

  return (
    <div className="outer py-5">
      <Container>
        <h1>Writing</h1>
        <Row className="outer__row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <Col>
        <Card className="shadow-sm">
        <Card.Img variant="left" src="../assets/BookCovers/GVDCover.jpg" />
        <Card.Body>

        <Card.Text>This is my card test</Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card className="shadow-sm">
        <Card.Img variant="left" src="../assets/BookCovers/GVDCover.jpg" />
        <Card.Body>

        <Card.Text>This is my card test</Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card className="shadow-sm">
        <Card.Img variant="left" src="../assets/BookCovers/GVDCover.jpg" />
        <Card.Body>

        <Card.Text>This is my card test</Card.Text>
        </Card.Body>
        </Card>
        </Col>
        </Row>

      </Container>

    </div>
  );
};

export default Writing;