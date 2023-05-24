import React from "react";
import { BsStopwatch, BsTypeH3 } from "react-icons/bs";
import { AiOutlineLike, AiOutlineProfile } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import i18next from "i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    AOS.init();
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <section className="abtWSec pt-sm-12 pt-md-16 pb-6 pb-sm-4 pb-md-8 pb-lg-0 pb-xl-6">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              <div className="header text-center ltrSpce mb-8 mb-sm-10 mb-xl-15">
                <h3 className="headingI h3 fwEbold mb-2 mb-md-3 mb-lg-4">
                  {t("AboutHeading")}
                </h3>
              </div>
            </div>
          </div>
          <div
            className="row mb-2 mb-sm-4 mb-lg-10"
            style={{ alignItems: "center" }}
          >
            <div className="col-12 col-lg-6">
              <span className="d-block imgHolder mb-4 mb-sm-6 mb-lg-0 rounded overflow-hidden w-100">
                <img
                  src="images/img106.jpg"
                  alt="image description"
                  className="img-fluid"
                  data-aos="fade-right"
                />
              </span>
            </div>
            <div className="col-12 col-lg-6">
              <div className="txtHolder mt-lg-n1 pl-lg-5">
                <h2 className="fwSemibold fIStyle headingVIII mb-3 mb-sm-4">
                  {t("About_sub_Heading")}
                </h2>
                <p>{t("About_des1")}</p>
                <p>{t("About_des2")}</p>
              </div>
            </div>
          </div>
          <div
            className="row mb-2 mb-sm-4 mb-lg-10"
            style={{ alignItems: "center" }}
          >
            <div className="col-12 col-lg-6">
              <p>{t("About_des3")}</p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="txtHolder mt-lg-n1 pl-lg-5">
                <p>{t("About_des4")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <aside className="cntrHolder bgTheme pt-8 pt-md-10 pb-4">
        <div className="container">
          <ul className="list-unstyled d-flex flex-wrap counterList text-center  text-lg-left justify-content-center mb-0">
            <li className="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
              <span className="icoHolder flex-shrink-0 d-block d-lg-flex align-items-center justify-content-center mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
                <img
                  src="images/ico08.svg"
                  alt="image description"
                  className="img-fluid"
                  width="61"
                  height="61"
                />
              </span>
              <div className="wrap font-weight-light text-white">
                <div className="d-block font-weight-normal mb-1">
                  <strong style={{ fontSize: 43 }}>90%</strong>
                </div>
                <p>
                  {i18next.language == "ar" ? "رضا العملاء" : "Satisfactory"}
                </p>
              </div>
            </li>
            <li className="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
              <span className="icoHolder flex-shrink-0 d-block d-lg-flex align-items-cente justify-content-centerr mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
                <img
                  src="images/ico09.svg"
                  alt="image description"
                  className="img-fluid"
                  width="61"
                  height="61"
                />
              </span>
              <div className="wrap font-weight-light text-white">
                <div className="d-block font-weight-normal mb-1">
                  <strong style={{ fontSize: 43 }}>16+</strong>
                </div>
                <p>{i18next.language == "ar" ? "فريق عمل" : "Teams"}</p>
              </div>
            </li>
            <li className="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
              <span className="icoHolder flex-shrink-0 d-block d-lg-flex align-items-center justify-content-center mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
                <img
                  src="images/ico10.svg"
                  alt="image description"
                  className="img-fluid"
                  width="61"
                  height="61"
                />
              </span>
              <div className="wrap font-weight-light text-white">
                <div className="d-block font-weight-normal mb-1">
                  <strong style={{ fontSize: 43 }}>11 </strong>
                </div>
                <p>
                  {i18next.language == "ar" ? "سنة خبرة " : "Year Experience"}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="pt-10 pt-sm-12 pb-6 pb-md-8 pt-md-14 pt-lg-16 pb-xl-10">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              <div className="header text-center ltrSpce mb-8 mb-sm-10 mb-xl-15">
                <h2 className="headingI fwEbold mb-2 mb-md-3 mb-lg-4">
                  We offer Distinguished service{" "}
                </h2>
                <p>
                  We have partnered with Turtlewax to provide you with the most
                  advanced fair price estimates
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <article className="text-center px-lg-2 px-xl-5 hlpcBlock mb-6">
                <span className="icoHolder mb-3 mb-xl-4 mx-auto rounded-circle d-flex align-items-center justify-content-center">
                  <AiOutlineProfile color="#0b4b8a" size={40} />
                </span>
                <h2 className="headingIX fwSemibold mb-1">Estimations</h2>
                <p>
                  We offer you the most accurate & fair car wash price estimates
                </p>
                {/* <a href="location.html" className="btn btn-light text-uppercase font-weight-bold py-3">find location</a> */}
              </article>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <article className="text-center px-lg-2 px-xl-5 hlpcBlock mb-6">
                <span className="icoHolder mb-3 mb-xl-4 mx-auto rounded-circle d-flex align-items-center justify-content-center">
                  <AiOutlineLike color="#0b4b8a" size={40} />
                </span>
                <h2 className="headingIX fwSemibold mb-1">Trust</h2>
                <p>
                  Reliable team, which is certified for high-quality
                  performance.
                </p>
                {/* <a href="Unlimited%20Wash%20Club.html" className="btn btn-light text-uppercase font-weight-bold py-3">JOIN WASH CLUB</a> */}
              </article>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <article className="text-center px-lg-2 px-xl-5 hlpcBlock mb-6">
                <span className="icoHolder mb-3 mb-xl-4 mx-auto rounded-circle d-flex align-items-center justify-content-center">
                  <BsStopwatch color="#0b4b8a" size={40} />
                </span>
                <h2 className="headingIX fwSemibold mb-1">Warranties</h2>
                <p>Clean, polish, and wax anywhere, anytime.</p>
                {/* <a href="javascript:void(0);" className="btn btn-light text-uppercase font-weight-bold py-3">Go to Store</a> */}
              </article>
            </div>
          </div>
        </div>
      </aside>

      <aside
        className="dscntcSec position-relative d-flex bgCover overlay"
        style={{ backgroundImage: `url(images/img08.jpg)` }}
      >
        <div className="alignCenter w-100 d-flex align-items-center">
          <div className="container py-12 py-18 d-flex justify-content-end">
            <div className="discountOverClub text-center bg-white rounded py-6 px-4 p-sm-6 p-lg-10 pb-lg-11 position-relative">
              <h4 className="headingIV text-capitalize font-weight-bold mb-3">
                {i18next.language == "ar"
                  ? "أعطال مفاجئة؟  نحن نصلح سيارتك في مكانها "
                  : "Surprise malfunctions? We repair your car in place"}
              </h4>
              <p>
                {i18next.language == "ar"
                  ? "اتصل بنا الآن لإصلاح سيارتك على الفور "
                  : "Call us and pray to fix your car immediately"}
              </p>
              <a
                href="javascript:void(0);"
                className="btn btn-primary text-uppercase px-8 py-3 fwEbold"
              >
                {i18next.language == "ar" ? "احجز الآن" : "Book now"}
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AboutUs;
