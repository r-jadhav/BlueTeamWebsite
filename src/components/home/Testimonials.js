import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import i18next from "i18next";

const Testimonials = () => {
  const testimonial = [
    // {
    //   id: 1,
    //   reviewEN:
    //     "Best car washing in town. Excellent customer service! The whole staff was very supportive, and professional especially Ahmad Bawazir explained things in detail and showed samples to help me make the right decision for my car services. If you want to avail their services, do not hesitate and just go for it!",
    //   reviewAR:"",
    //   nameEN: "Asma Almheiri",
    //   nameAR:"",
    //   customerEN: "- Customer",
    //   customerAR: "- زبون",
    //   rate: "5",
    // },
    {
      id: 2,
      reviewEN:
        "The first car done the PPF with them, Professional work and Excellant Finishing on the car with a very reasonable price, I do recommend them to service your car any time.",
      reviewAR:
        'لقد قمت بتثبيت أول جلاد حماية لسيارتي  معهم ، ويتميز عملهم بالدقة والاحتراف وأسعارهم معقولة.  أوصيهم بخدمة سيارتك في أي وقت " الكعبي ',
      nameEN: "i Alkaabi",
      nameAR: "الكعبي",
      customerEN: " - Customer",
      customerAR: " - زبون",
      rate: "5",
    },
    {
      id: 3,
      reviewEN:
        "Best mobile car cleaning service in Abu Dhabi. Their cleaning is professional and high quality. And the prices are reasonable and realistic.",
      reviewAR:
        "إنها أفضل خدمة تنظيف سيارات متنقلة في أبو ظبي، تنظيفهم احترافي وذو جودة عالية والأسعار منطقية وواقعية",
      nameEN: "A Almansoori",
      nameAR: "المنصوري",
      customerEN: " - Customer",
      customerAR: " - زبون",
      rate: "5",
    },
    {
      id: 4,
      reviewEN:
        "Nice service, a nicer reception, and most importantly, after the first experience, the after-sales service is excellent",
      reviewAR:
        '"خدمة جميلة واستقبال أجمل والأهم من ذلك بعد التجربة الأولى اكتشفت كم هي خدمة مابعد البيع لديهم رائعة"',
      nameEN: "Omar Al Jaberi",
      nameAR: " عمر الجابري",
      customerEN: " - Customer",
      customerAR: " - زبون",
      rate: "5",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <aside class="customerSec pt-10 pt-lg-12">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="header ltrSpce text-center mb-6 mb-sm-9 mb-xl-11">
                <h3 class="h3 fwEbold">{i18next.language == "ar" ? 'آراء العملاء ': 'Customers Feedback' }</h3>
                <p className="psudo">{i18next.language == "ar" ? '': "What Clients Say's ?" }</p>
              </div>
            </div>
          </div>
          </div>
          <div
          className="cutomerFeedback position-relative bgCover"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
              <Slider {...settings}>
                {testimonial.map((data) => {
                  return (
                    <div className="col-12">
                      <blockquote className="csfHolder bg-white overflow-hidden text-center pt-7 pt-md-10 pb-6 px-4 mb-3 mb-sm-4 mb-md-6 mb-xl-7">
                        <q className="d-block mb-3 mb-md-4 position-relative">
                          {i18next.language == "ar"
                            ? data.reviewAR
                            : data.reviewEN}
                        </q>
                        <cite className="customer text-center d-block mb-1">
                          <strong className="author">
                            {i18next.language == "ar"
                              ? data.nameAR
                              : data.nameEN}
                          </strong>
                          <em>
                            {i18next.language == "ar"
                              ? data.customerAR
                              : data.customerEN}
                          </em>
                        </cite>
                        <span className="imgHolder mx-auto d-block">
                          <img
                            src="images/rating2.png"
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

{
  /* <div>
<div className="col-12">
  <blockquote className="csfHolder bg-white overflow-hidden text-center pt-7 pt-md-10 pb-6 px-4 mb-3 mb-sm-4 mb-md-6 mb-xl-7">
    <q className="d-block mb-3 mb-md-4 position-relative">I love the efficiency of my Car Wash on Sunrise Valvernasa in Mangho Qor nova. A smiling greeting, an excellent wash, and on my way—CLEAN. THE BEST CAR WASH EVER!</q>
    <cite className="customer text-center d-block mb-1">
      <strong className="author">Bill Dedman - </strong>
      <em>Customer</em>
    </cite>
    <span className="imgHolder mx-auto d-block">
      <img src="images/rating2.png" className="img-fluid" alt="rating"/>
    </span>
  </blockquote>
</div>
</div>
<div>
<div className="col-12">
  <blockquote className="csfHolder bg-white overflow-hidden text-center pt-7 pt-md-10 pb-6 px-4 mb-3 mb-sm-4 mb-md-6 mb-xl-7">
    <q className="d-block mb-3 mb-md-4 position-relative">Great place to get a standard $3 car wash to remove salt, dirt, and minor debris. Free self service vacuums as well, totally awesome (: </q>
    <cite className="customer text-center d-block mb-1">
      <strong className="author">Bill Dedman - </strong>
      <em>Customer</em>
    </cite>
    <span className="imgHolder mx-auto d-block">
      <img src="images/rating2.png" className="img-fluid" alt="rating"/>
    </span>
  </blockquote>
</div>
</div>
<div>
<div className="col-12">
  <blockquote className="csfHolder bg-white overflow-hidden text-center pt-7 pt-md-10 pb-6 px-4 mb-3 mb-sm-4 mb-md-6 mb-xl-7">
    <q className="d-block mb-3 mb-md-4 position-relative">The quality of the wash was EXCELLENT. The only downside was that I hadn't realized that it was hand dried, so a tip was expected. </q>
    <cite className="customer text-center d-block mb-1">
      <strong className="author">Gregory Benford - </strong>
      <em>Customer</em>
    </cite>
    <span className="imgHolder mx-auto d-block">
      <img src="images/rating2.png" className="img-fluid" alt="rating"/>
    </span>
  </blockquote>
</div>
</div> */
}
