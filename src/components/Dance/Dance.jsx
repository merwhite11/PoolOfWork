import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Dance.scss";

const Dance = () => {
  var closer = "LJ-MTCDq0Zg?si=jf6KsUp6th0ozj04";
  var malamente = "Bc_uHVpIUD4?si=5J1EB9VbgqA0UXvo";
  var gravity = "opm9kHGv1iA?si=RQPDMHNZNoqcSmQU";
  var comer = "1E-QcAMJn2o?si=3NgXgUg0SK_g5ssQ";

  var youtubeRoot = "https://www.youtube.com/embed/";

  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);
  const carouselItemRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carouselItemWidth, setCarouselItemWidth] = useState(0)

  const handlePrevClick = () => {
    console.log("Previous clicked");
    console.log('scrollPosition', scrollPosition)
    if (scrollPosition > 0) {
      const newScrollPosition = scrollPosition - carouselItemWidth; // Calculate new scroll position
      console.log(newScrollPosition)
      setScrollPosition(newScrollPosition); // Update scroll position in state
      carouselRef.current.scrollTo({
        left: newScrollPosition, // Use the updated scroll position
        behavior: "smooth"
      });
    }
  };

  const handleNextClick = () => {
    console.log("Next clicked");
    console.log('carouselWidth', carouselWidth)
    console.log('carouselItemWidth', carouselItemWidth)
    // if (scrollPosition < carouselWidth - carouselItemWidth) {
      const newScrollPosition = scrollPosition + carouselItemWidth; // Calculate new scroll position
      setScrollPosition(newScrollPosition); // Update scroll position in state
      carouselRef.current.scrollTo({
        left: newScrollPosition, // Use the updated scroll position
        behavior: "smooth"
      });
    // }
    console.log('scrollPosition', scrollPosition)
  };

  useEffect(() => {
    if(carouselRef.current) {
      setCarouselWidth(carouselRef.current.offsetWidth)
    };
  }, [])

  useEffect(() => {
    if(carouselItemRef.current) {
      setCarouselItemWidth(carouselItemRef.current.offsetWidth)
    }
  }, [])

  return (
    <Container className="content-container">
       <h1 className="d-flex justify-content-center justify-content-md-start">Dance</h1>
    <div
      class="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <div class="carousel__inner" ref={carouselRef}>
        <div class="carousel__item active" ref={carouselItemRef}>
          <div className="carousel__card">
            <video class="img-fluid d-block w-100">
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div class="carousel__item" ref={carouselItemRef}>
          <div className="carousel__card">
            <video class="img-fluid d-block w-100">
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div class="carousel__item" ref={carouselItemRef}>
          <div className="carousel__card">
            <video class="img-fluid d-block w-100">
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div class="carousel__item" ref={carouselItemRef}>
          <div className="carousel__card">
            <video class="img-fluid d-block w-100">
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div class="carousel__item" ref={carouselItemRef}>
          <div className="carousel__card">
            <video class="img-fluid d-block w-100">
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      {/* <button
        className="carousel__control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
      </button> */}
        <div className="carousel__control-prev carousel-control-prev-icon" aria-hidden="true" onClick={handlePrevClick}></div>
        <div class="carousel__control-next carousel-control-next-icon" aria-hidden="true" onClick={handleNextClick}></div>
    </div>
    </Container>
  );
};

export default Dance;
