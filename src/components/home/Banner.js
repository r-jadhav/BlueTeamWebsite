import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../assets/css/slider-animations.css";
import "../../assets/css/style.css";
import { logEvent ,getAnalytics} from "firebase/analytics";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const content = [
  {
    title1_en: "You need a",
    title2_en: "car wash",
    description_en:
      "We have 11 years of experience in car wash for all types of cars, we will give you the best car wash ever.",
    title1_ar: "هل سيارتك بحاجة إلى غسيل؟",
    title2_ar: "",
    description_ar:"نمتلك خبرة ١١ عام في غسيل جميع أنواع السيارات، ستحصل معنا على أفضل غسيل سيارة على الإطلاق",
    src: "images/img01.png",
    type: "image",
  },
  {
    title1_en: "We made it",
    title2_en: "easy for you",
    description_en:
      "BlueTeam provides you with all services you need including car wash, polishing, and maintenance. All at one stop!!",
    title1_ar: "سهلناها عليك",
    title2_ar: "",
    description_ar:
      "بلو تيم تؤمن لك كل الخدمات التي تحتاجها من غسيل وتلميع وصيانة. كلها في محطة واحدة",
    src: "images/imgslider03.jpg",
    type: "image",
  },
  {
    title1_en: "Anywhere",
    title2_en: "services",
    description_en:
      "As quickly as possible, we will reach you and deliver high-quality service for your car.",
      title1_ar: "في أي مكان",
    title2_ar: "",
    description_ar:
      "أينما كنت، سيصل إليك فريقنا بالسرعة القصوى لتقديم خدمات عالية الجودة لسيارتك. ",
    src: "images/imgslider02.jpg",
    type: "image",
  },
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  duration: 4000,
  // speed: 5000,
};

function Banner({ setShow }) {
  const analytics = getAnalytics();
  const { t } = useTranslation();
  const margin = `${i18next.language === 'ar' ? 'fwEbold d-block font-weight-bold headingVI pt-3' : 'fwEbold d-block font-weight-bold headingVI'}`;

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
                              {i18next.language == "ar"
                                ? slide.title1_ar
                                : slide.title1_en
                                }
                            </strong>
                            <strong className="fwEbold d-block mb-3 mt-md-n4 mb-md-2">
                            {i18next.language == "ar"
                                ? slide.title2_ar
                                : slide.title2_en
                                }
                            </strong>
                            <strong className={margin}>
                               {i18next.language == "ar"
                                ? slide.description_ar
                                : slide.description_en
                                }
                            </strong>
                          </h1>
                          <button
                            onClick={() => {
                              logEvent(analytics, "banner_booknow");
                              setShow(true);
                            }}
                            className="btn btnTheme text-uppercase fwEbold py-3 px-4 py-md-4 px-md-6"
                          >
                            {t("book_now")}
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