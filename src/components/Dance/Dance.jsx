import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";
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

  // const vids = [
  //   "https://d2jgbsygfslqso.cloudfront.net/her-majesty.mp4",
  //   "https://d2jgbsygfslqso.cloudfront.net/17.mp4",
  //   "https://d2jgbsygfslqso.cloudfront.net/cool-off-challenge.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  // ];

  // const vids = [
  //   "LJ-MTCDq0Zg?si=jf6KsUp6th0ozj04",
  //   "Bc_uHVpIUD4?si=5J1EB9VbgqA0UXvo",
  //   "opm9kHGv1iA?si=RQPDMHNZNoqcSmQU",
  //   "1E-QcAMJn2o?si=3NgXgUg0SK_g5ssQ",
  //   "2W3vhjb8nnw?si=vueEiFeCRjXKj3wB",
  //   "GHb2TiEzRjk?si=SVLgiVgEBIueCisR",
  //   "JSbfwb3WekI?si=UMAfeXj-bU_oT6DY",
  //   "YVN3v3MdECs?si=9otaLMtOPIwvBmCZ",
  //   "TqCMGL_4MkM?si=O4cIcvnjbB4prYKf",
  //   "YND3kxGMk1U?si=F-USf8TCp9WYn1-y",
  //   "EQC1BvdmSGM?si=7XrGVWF2X4WNQ-1b",
  //   "UZpsfi2GKcc?si=lrfrRv4FxLI-AZAC",
  //   "QMjknbOkObU?si=qHAkYFRKHLvt6UyY"
  // ]

  const vids = [
    "her-majesty.mp4",
    "east.mp4",
    "17.mp4",
    "cool-off-challenge.mp4"
  ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  console.log('COMPONENT RENDERED')
  return (
    <Container id="dance-section" className="carousel justify-content-center align-items-center">
       <h1 className="display-3 d-flex px-10 justify-content-center justify-content-md-start">Dance</h1>
    <div className="slider-container carousel__inner">
      <Slider {...settings}>
        {vids.map((vid) => (
        <div key={vid}>
          {/* <video className="w-100">
            <source src={vid} type="video/mp4" />
          </video> */}
          <div className="video-container">
            <LazyLoad height={200} offset={100} once>
                {/* <video
                  className="w-100"
                  // src={`https://www.youtube.com/embed/${vid}??modestbranding=1&;showinfo=0&;autohide=1&;rel=0`}
                  src={`https://d2jgbsygfslqso.cloudfront.net/${vid}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  tabIndex="-1"
                  preload="none"
                ></video> */}
                <video controls tabIndex="-1" className="w-100">
                    <source src={`https://d2jgbsygfslqso.cloudfront.net/${vid}`} type="video/mp4" />
                </video>
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
