import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Dance.scss";

const Dance = () => {

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
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
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <Container className="carousel">
       <h1 className="d-flex px-10 justify-content-center justify-content-md-start">Dance</h1>
    <div className="slider-container carousel__inner">
      <Slider {...settings}>
        {vids.map((vid) => (
        <div key={vid}>
          <video className="w-100">
            <source src={vid} type="video/mp4" />
          </video>
        </div>
        ))}
      </Slider>
    </div>
    </Container>
  );
};

export default Dance;
