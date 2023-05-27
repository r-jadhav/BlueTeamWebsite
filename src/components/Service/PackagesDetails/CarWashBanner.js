import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../../assets/css/slider-animations.css";
import "../../../assets/css/style.css";
import { getAnalytics } from "firebase/analytics";
import { Carousel } from 'react-responsive-carousel';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  duration: 5000
  // speed: 5000,
};

const Banner = ({ setShow, content }) => {
  console.log(content);
  const analytics = getAnalytics();

  return (
    <section className="bannerSec packageSec bannerSlide">
      <div className="bsSlide bgCover overlay text-center position-relative d-flex container">
        <Slider {...settings}>
          {content &&
            content.map((slide, index) => (
              <div key={index}>
                <div>
                  
                  {/* <div
                    className="bsSlide bgCover overlay text-center position-relative d-flex"
                    style={{
                      backgroundImage:'url()'

                      
                    }}
                  ></div> */}
                  <img className="img-fluid" src={"http://blueteam.xyz/uploads/"+slide.sp_media_name}></img>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
