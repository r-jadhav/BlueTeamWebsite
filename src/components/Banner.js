import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../assets/css/slider-animations.css';
import '../assets/css/style.css';

const content = [
	{
		title1: 'Welcome to Dental Planet',
        title2: 'Welcome to Dental Planet',
		description: 'Give Your Family Healthy Bright Teeth & Gums',
		src: 'videos/banner.mp4',
        type:'video'
	},
	{
		title1: 'You want to',
        title2: 'wash your car',
		description:'We have washed thousands of cars of all kinds and will provide you with the service perfectly',
		src: 'images/img01.jpg',
        type:'image'
	},
	{
		title1: 'We made it',
        title2: 'easy for you',
		description:'It is the first mobile car washing and maintenance company in the country',
		src: 'images/img03.jpg',
        type:'image'
	}
];

const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => {
      setCurrentSlideIndex(next);
    }
  };


function Banner() {
  return (
    <section className="bannerSec bannerSlide">
	    <div className="bsSlide bgCover overlay text-center position-relative d-flex" >
            <Slider {...settings}>
                {content.map((slide, index) => (
                <div key={index}>
                    {slide.type === 'video' ? (
                        <video src={slide.src} controls={false} autoPlay={true} width="100%" muted loop />
                    ) : (
                 <div>
                    <div className="bsSlide bgCover overlay text-center position-relative d-flex" 
                    style={{backgroundImage:`url(${slide.src})`}}
                    >

                    <div className="alignCenter w-100 d-flex align-items-center">
                        <div className="container pt-6 pt-sm-10 pb-22 pt-md-12 pb-md-25 pt-lg-15 pb-lg-35">
                            <div className="caption text-white position-relative">
                                <h1 className="w-100 mb-6 mb-md-9 text-white">
                                    <strong className="fwEbold d-block mb-md-2 mb-xl-0">{slide.title1}</strong>
                                    <strong className="fwEbold d-block mb-3 mt-md-n4 mb-md-2">{slide.title2}</strong>
                                    <strong className="fwEbold d-block font-weight-bold headingVI">We have washed thousands of cars of all kinds and will provide you with the service perfectly</strong>
                                </h1>
                                <a href="#" className="btn btnTheme text-uppercase fwEbold py-3 px-4 py-md-4 px-md-6">Purchase Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                    // <img src={slide.src} alt={`Slide ${index + 1}`} />
                    )}
                </div>
                ))}
            </Slider>
	    </div>
    </section>
  )
}

export default Banner

// {
//     title1: 'You want to',
//     title2: 'wash your car',
//     description: 'We have washed thousands of cars of all kinds and will provide you with the service perfectly',
//     button: 'Read More',
//     src: 'videos/banner.mp4',
//     type:'video'
// },
// {
//     title1: 'You want to',
//     title2: 'wash your car',
//     description: 'We have washed thousands of cars of all kinds and will provide you with the service perfectly',
//     button: 'Read More',
//     src: 'videos/banner.mp4',
//     type:'video'
// },
// {
//     title1: 'You want to',
//     title2: 'wash your car',
//     description: 'We have washed thousands of cars of all kinds and will provide you with the service perfectly',
//     button: 'Read More',
//     src: 'videos/banner.mp4',
//     type:'video'
// },
// ];