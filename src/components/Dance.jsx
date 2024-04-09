import React from 'react';
import { Container } from 'react-bootstrap';
import DanceList from './DanceList.jsx'

const Dance = () => {

  return (
    <Container id='dance' className="subsection">
      <Container className="title">Dance Floor</Container>
      <DanceList/>
    </Container>
  );
};

export default Dance;
