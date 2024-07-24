import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Dance.scss";
import VideoPlayer from "./VideoPlayer.jsx";

const Dance = () => {
  const [slidesToShow, setSlidesToShow] = useState(null);
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const calculateSlidesToShow = () => {
    if (window.innerWidth < 500) {
      return 1;
    } else if (window.innerWidth < 780) {
      return 2;
    } else {
      return 3;
    }
  };

  useEffect(() => {
    console.log('DANCE USEEFFECT')
    setSlidesToShow(calculateSlidesToShow())

    const handleResize = () => {
      setSlidesToShow(calculateSlidesToShow());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePlay = (videoRef) => {
    console.log('HANDLEPLAY CALLED', videoRef)
    if (currentPlaying && currentPlaying !== videoRef) {
      currentPlaying.pause();
    }
    setCurrentPlaying(videoRef)
  }

  const vids = [
    "malamente",
    "closer",
    "gravity",
    "comer",
    "her-majesty",
    "bike-freak",
    "east",
    "see-through",
    "17",
    "suckering",
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    lazyLoad: "ondemand"
  };

  return (
    <Container
      id="dance-section"
      className="carousel justify-content-center align-items-center"
    >
      <h1 className="display-3 d-flex px-10 justify-content-center justify-content-md-start">
        Dance
      </h1>
      <div className="slider-container carousel__inner">
        <Slider {...settings}>
          {vids.map((vid) => (
            <div key={vid}>
              <div className="video-container">
                <LazyLoad height={200} offset={100} once>
                  <VideoPlayer videoName={vid} onPlay={handlePlay}/>
                </LazyLoad>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Dance;
