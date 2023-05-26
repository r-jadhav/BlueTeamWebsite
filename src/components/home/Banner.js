import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../assets/css/slider-animations.css";
import "../../assets/css/style.css";
import { logEvent ,getAnalytics} from "firebase/analytics";

const content = [
  {
    title1: "You need a",
    title2: "car wash",
    description:
      "We have 11 years of experience in car wash for all types of cars, we will give you the best car wash ever.",
    src: "images/img01.png",
    type: "image",
  },
  {
    title1: "We made it",
    title2: "easy for you",
    description:
      "BlueTeam provides you with all services you need including car wash, polishing, and maintenance. All at one stop!!",
    src: "images/img03.jpg",
    type: "image",
  },
  {
    title1: "Anywhere",
    title2: "services",
    description:
      "As quickly as possible, we will reach you and deliver high-quality service for your car.",
    src: "images/img02.jpg",
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

function Banner({ setShow }) {
  const analytics = getAnalytics();

  return (
    <section className="bannerSec bannerSlide">
      <div className="bsSlide bgCover overlay text-center position-relative d-flex">
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
                    <div className="alignCenter w-100 d-flex align-items-center">
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
                    </div>
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