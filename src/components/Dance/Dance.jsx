import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Dance.scss';

const Dance = () => {
  var closer = "LJ-MTCDq0Zg?si=jf6KsUp6th0ozj04";
  var malamente = "Bc_uHVpIUD4?si=5J1EB9VbgqA0UXvo";
  var gravity = "opm9kHGv1iA?si=RQPDMHNZNoqcSmQU";
  var comer = "1E-QcAMJn2o?si=3NgXgUg0SK_g5ssQ";

  var youtubeRoot = "https://www.youtube.com/embed/";
  return (
    <div className="outer py-3">
      <Row className="carousel-inner mx-5 d-flex flex-row gap-3">
        <Col>
          <div className="embed-responsive embed-responsive-16by9 h-100">
            <iframe
              className="embed-responsive-item"
              src={youtubeRoot + closer}
              allowfullscreen
            ></iframe>
          </div>
        </Col>
        <Col className="">
          <div className="embed-responsive embed-responsive-16by9 w-100">
            <iframe
              className="embed-responsive-item"
              src={youtubeRoot + malamente}
              allowfullscreen
            ></iframe>
          </div>
        </Col>
        <Col className="">
          <div className="embed-responsive embed-responsive-16by9 w-100">
            <iframe
              className="embed-responsive-item"
              src={youtubeRoot + gravity}
              allowfullscreen
            ></iframe>
          </div>
        </Col>
        <Col className="">
          <div className="embed-responsive embed-responsive-16by9 w-100">
            <iframe
              className="embed-responsive-item"
              src={youtubeRoot + comer}
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Dance;
