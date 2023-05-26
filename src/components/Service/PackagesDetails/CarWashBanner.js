import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../../assets/css/slider-animations.css";
import "../../../assets/css/style.css";
import { getAnalytics} from "firebase/analytics";

const content = [
  {
    src: "../images/services/carwash1-min.jpg",
    type: "image",
  },
  {
    src: "../images/services/carwash2-min.jpg",
    type: "image",
  },
  {
    src: "../images/services/carwash3-min.jpg",
    type: "image",
  },
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  duration: 5000,
  // speed: 5000,
};

const Banner = ({ setShow }) => {
  const analytics = getAnalytics();

  return (
    <section className="bannerSec packageSec bannerSlide mt-16">
      <div className="bsSlide bgCover overlay text-center position-relative d-flex container">
        <Slider {...settings}>
          {content.map((slide, index) => (
            <div key={index}>
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  controls={false}
                  autoPlay={true}
                  width="100%"
                  muted
                  loop
                />
              ) : (
                <div>
                  <div
                    className="bsSlide bgCover overlay text-center position-relative d-flex"
                    style={{ backgroundImage: `url(${slide.src})` }}
                  >
                  </div>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Banner;