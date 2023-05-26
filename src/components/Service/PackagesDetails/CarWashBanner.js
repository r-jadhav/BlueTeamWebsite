import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../../assets/css/slider-animations.css";
import "../../../assets/css/style.css";
import { getAnalytics} from "firebase/analytics";

const content = [
  {
    src: "images/services/carwash1-min.jpg",
    type: "image",
  },
  {
    src: "images/services/carwash2-min.jpg",
    type: "image",
  },
  {
    src: "images/services/carwash3-min.jpg",
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
                    {/* <div className="alignCenter w-100 d-flex align-items-center">
                      <div className="container pt-90 pt-sm-10 pb-22 pt-md-12 pb-md-25 pt-lg-15 pb-lg-35">
                        <div className="caption text-white position-relative">
                          <h1 className="w-100 mb-6 mb-md-9 text-white">
                            <strong className="fwEbold d-block mb-md-2 mb-xl-0">
                              {slide.title1}
                            </strong>
                            <strong className="fwEbold d-block mb-3 mt-md-n4 mb-md-2">
                              {slide.title2}
                            </strong>
                            <strong className="fwEbold d-block font-weight-bold headingVI">
                              {slide.description}
                            </strong>
                          </h1>
                          <button
                            onClick={() => {
                              logEvent(analytics, "banner_booknow");
                              setShow(true);
                            }}
                            className="btn btnTheme text-uppercase fwEbold py-3 px-4 py-md-4 px-md-6"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div> */}
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