import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Dance.scss";
import VideoPlayer from './VideoPlayer.jsx';

const Dance = () => {

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 769) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(3);
    }
  }, [])

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
    "suckering"
  ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <Container id="dance-section" className="carousel justify-content-center align-items-center">
       <h1 className="display-3 d-flex px-10 justify-content-center justify-content-md-start">Dance</h1>
    <div className="slider-container carousel__inner">
      <Slider {...settings}>
        {vids.map((vid) => (
        <div key={vid}>
          <div className="video-container">
            <LazyLoad height={200} offset={100} once>
                 <VideoPlayer videoName={vid}/>
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
