import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonial = [
    {
      id: 1,
      review:
        "Best car washing in town. Excellent customer service! The whole staff was very supportive, and professional especially Ahmad Bawazir explained things in detail and showed samples to help me make the right decision for my car services. If you want to avail their services, do not hesitate and just go for it!",
      name: "Asma Almheiri",
      customer: "- Customer",
      rate: "5",
    },
    {
      id: 2,
      review:
        "The first car done the PPF with them, Professional work and Excellant Finishing on the car with a very reasonable price, I do recommend them to service your car any time.",
      name: "i Alkaabi",
      customer: "- Customer",
      rate: "5",
    },
    {
      id: 3,
      review:
        "Best mobile car cleaning service in Abu Dhabi. Their cleaning is professional and high quality. And the prices are reasonable and realistic.",
      name: "A Almansoori",
      customer: "- Customer",
      rate: "5",
    },
    {
      id: 4,
      review:
        "Nice service, a nicer reception, and most importantly, after the first experience, the after-sales service is excellent",
      name: "Omar Al Jaberi",
      customer: "- Customer",
      rate: "5",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <aside className="customerSec pt-10 pt-lg-12">
        <div className="container">
          <div className="header text-center ltrSpce font-weight-light mb-14">
            <h3 className="fwEbold h2 text-capitalize mb-4">
              customers feedback
            </h3>
          </div>
        </div>
        <div
          className="cutomerFeedback position-relative bgCover"
        //   style={{backgroundImage: `url(images/img09.jpg)`}}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1 feedbackSlide">
                <Slider {...settings}>
                  {testimonial.map((data) => {
                    return (
                      <div className="col-12" key={data.id}>
                        <blockquote className="blockquote text-center px-lg-15 px-xl-28 pb-10">
                          <div className="icoHolder rounded-circle d-flex justify-content-center align-items-center mx-auto mt-n8 mb-8">
                            <img
                              src="images/ico15.svg"
                              alt="image description"
                              width="36"
                              height="28"
                              className="img-fluid"
                            />
                          </div>
                          <q className="d-block mb-7">{data.review}</q>
                          <cite className="d-block">
                            <strong className="customer d-block mb-1">
                              <a
                                href="javascript:void(0);"
                                className="fwSemibold"
                              >
                                {data.name}
                              </a>
                              <em>{data.customer}</em>
                            </strong>
                          </cite>
                          <span className="imgHolder mx-auto d-block">
                            <img
                              src="images/rating.png"
                              className="img-fluid"
                              alt="rating"
                            />
                          </span>
                        </blockquote>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Testimonials;
