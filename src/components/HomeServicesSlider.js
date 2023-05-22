import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-animated-slider';

const HomeServicesSlider = ()  => {

    // const content = [
    //     {
    //         id: 1,
    //         title: 'We are always ready to serve you',
    //         img: 'images/img04.png',
    //         link:''
    //     },
    //     {
    //         id: 2,
    //         title: 'Estimations',
    //         img: 'images/img06.png',
    //         link:''
    //     },
    //     {
    //         id: 3,
    //         title: 'Trust',
    //         img: 'images/img06.png',
    //         link:''
    //     },
    //     {
    //         id: 4,
    //         title: 'Warranties',
    //         img: 'images/img05.png',
    //         link:''
    //     }
    //     ,
    //     {
    //         id: 5,
    //         title: 'Services advantages ',
    //         img: 'images/img06.png',
    //         link:''
    //     }
    // ];

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //         },
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //         },
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //         },
    //       },
    //     ],
    //   };

  return (
    <>	
    <section className="wsiSec py-10 pt-md-14 pb-md-12">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header text-center ltrSpce mb-8 mb-md-11">
                        <h2 className="h2 fwEbold mb-3 aos-init aos-animate" data-aos="fade-top" data-aos-delay="100">The main services </h2>
                        <p className='aos-init aos-animate'>We offer you full car services including car wash, polishing, maintenance, and others. Explore our services below </p>
                    </div>
                </div>
            </div>
            <div className="row d-block">
                <div className="SpecializedSlider">

                {/* <Slider {...settings}>
                {content.map((slide) => {
                    return (
                        <div className="col-12" key={slide.id}>
                            <article className="sBlock text-center mb-1 mb-sm-4 mb-lg-8">
                                <div className="imgHolder overflow-hidden rounded mb-5 overlayI w-100 position-relative mx-auto">
                                    <img src={slide.img} alt="image description" className="img-fluid"/>
                                    <div className="btnHolder position-absolute">
                                        <a href="#" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
                                    </div>
                                </div>
                                <h3 className="headingIX mb-2"><a href="#">{slide.title}</a></h3>
                            </article>
                        </div>
                    )
                })}
                </Slider> */}




                   <div>
                        <div className="col-12">
                            <article className="sBlock text-center mb-1 mb-sm-4 mb-lg-8">
                                <div className="imgHolder overflow-hidden rounded mb-5 overlayI w-100 position-relative mx-auto">
                                    <img src="images/img04.png" alt="image description" className="img-fluid"/>
                                    <div className="btnHolder position-absolute">
                                        <a href="#" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
                                    </div>
                                </div>
                                <h3 className="headingIX mb-2"><a href="#">We are always ready to serve you</a></h3>
                            </article>
                        </div>
                    </div>
                    <div>
                        <div className="col-12">
                            <article className="sBlock text-center mb-1 mb-sm-4 mb-lg-8">
                                <div className="imgHolder overflow-hidden rounded mb-5 overlayI w-100 position-relative mx-auto">
                                    <img src="images/img05.png" alt="image description" className="img-fluid"/>
                                    <div className="btnHolder position-absolute">
                                        <a href="#" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
                                    </div>
                                </div>
                                <h3 className="headingIX mb-2"><a href="#">Services advantages </a></h3>
                            </article>
                        </div>
                    </div>
                    <div>
                        <div className="col-12">
                            <article className="sBlock text-center mb-1 mb-sm-4 mb-lg-8">
                                <div className="imgHolder overflow-hidden rounded mb-5 overlayI w-100 position-relative mx-auto">
                                    <img src="images/img06.png" alt="image description" className="img-fluid"/>
                                    <div className="btnHolder position-absolute">
                                        <a href="#" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
                                    </div>
                                </div>
                                <h3 className="headingIX mb-2"><a href="#">Estimations</a></h3>
                            </article>
                        </div>
                    </div>
                    <div>
                        <div className="col-12">
                            <article className="sBlock text-center mb-1 mb-sm-4 mb-lg-8">
                                <div className="imgHolder overflow-hidden rounded mb-5 overlayI w-100 position-relative mx-auto">
                                    <img src="images/img05.png" alt="image description" className="img-fluid"/>
                                    <div className="btnHolder position-absolute">
                                        <a href="#" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
                                    </div>
                                </div>
                                <h3 className="headingIX mb-2"><a href="#">Trust</a></h3>
                            </article>
                        </div>
                    </div>
                    <div>
                        <div className="col-12">
                            <article className="sBlock text-center mb-1 mb-sm-4 mb-lg-8">
                                <div className="imgHolder overflow-hidden rounded mb-5 overlayI w-100 position-relative mx-auto">
                                    <img src="images/img05.png" alt="image description" className="img-fluid"/>
                                    <div className="btnHolder position-absolute">
                                        <a href="#" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
                                    </div>
                                </div>
                                <h3 className="headingIX mb-2"><a href="#">Warranties</a></h3>
                            </article>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section></>
  )
}

export default HomeServicesSlider