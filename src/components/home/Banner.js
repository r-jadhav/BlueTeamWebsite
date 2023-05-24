import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider-animations.css';
import '../../assets/css/style.css';

const content = [
	// {
	// 	title1: '',
    //     title2: '',
	// 	description: '',
	// 	src: 'videos/banner.mp4',
    //     type:'video'
	// },
	{
		title1: 'You need a',
        title2: 'car wash',
		description:'We have 11 years of experience in car wash for all types of cars, we will give you the best car wash ever.',
		src: 'images/img01.png',
        type:'image'
	},
	{
		title1: 'We made it',
        title2: 'easy for you',
		description:'BlueTeam provides you with all services you need including car wash, polishing, and maintenance. All at one stop!!',
		src: 'images/img03.jpg',
        type:'image'
	},
    {
		title1: 'Anywhere',
        title2: 'services',
		description:'As quickly as possible, we will reach you and deliver high-quality service for your car.',
		src: 'images/img02.jpg',
        type:'image'
	}
];

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 15000,
    delay: 10000,
    speed: 2000,
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
                        <div className="container pt-90 pt-sm-10 pb-22 pt-md-12 pb-md-25 pt-lg-15 pb-lg-35">
                            <div className="caption text-white position-relative">
                                <h1 className="w-100 mb-6 mb-md-9 text-white">
                                    <strong className="fwEbold d-block mb-md-2 mb-xl-0">{slide.title1}</strong>
                                    <strong className="fwEbold d-block mb-3 mt-md-n4 mb-md-2">{slide.title2}</strong>
                                    <strong className="fwEbold d-block font-weight-bold headingVI">{slide.description}</strong>
                                </h1>
                                {/* <a href="#" className="btn btnTheme text-uppercase fwEbold py-3 px-4 py-md-4 px-md-6">Purchase Now</a> */}
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