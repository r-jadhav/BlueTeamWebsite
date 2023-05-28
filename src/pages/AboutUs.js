import React from "react";
import { BsStopwatch, BsTypeH3 } from "react-icons/bs";
import { AiOutlineLike, AiOutlineProfile } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import i18next from "i18next";
import api from "../constant/api";
import BookingEnquiry from "../components/Home/BookingEnquiry";

const AboutUs = () => {
  const [services, setService] = React.useState();
  const [show, setShow] = React.useState(false);

  const { t } = useTranslation();
  React.useEffect(() => {
    AOS.init();
    window.scroll(0, 0);
    getServices()
  }, []);
  const getServices = () => {
    api
      .get("/service/getServicecategory")
      .then((res) => {
        setService(res.data.data);
      })
     
  };
  return (
    <>
    <BookingEnquiry
        category={services}
        show={show}
        setShow={setShow}
      ></BookingEnquiry>
      <section className="abtWSec pt-sm-12 pt-md-16 pb-6 pb-sm-4 pb-md-8 pb-lg-0 pb-xl-6">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
              <button
                onClick={()=>{
                  setShow(true)
                }}
                className="btn btn-primary text-uppercase px-8 py-3 fwEbold"
              >
                {i18next.language == "ar" ? "احجز الآن" : "Book now"}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AboutUs;
