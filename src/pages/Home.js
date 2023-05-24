import React from "react";
import Testimonials from "../components/Home/Testimonials";
import Banner from "../components/Home/Banner";
import Gallery from "../components/Gallery/Gallery";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import api from "../constant/api";
import i18next from "i18next";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Services from "../components/Home/Services";
import { Icon } from "@iconify/react";

const Home = () => {
  const { t } = useTranslation();
  const [services, setService] = React.useState();

  const getServices = () => {
    api.get("/service/getServicecategory").then((res) => {
      setService(res.data.data);
    });
  };

  React.useEffect(() => {
    getServices();
    AOS.init();
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div id="pageWrapper">
        <main>
          <Banner />
          <WhyChooseUs></WhyChooseUs>

          <Services services={services}></Services>

          <aside className="olneBook bgTheme py-7">
            <div className="container">
              <div className="d-md-flex align-items-center justify-content-center text-center text-md-left">
                <h3 className="h4 text-white fwSemibold mb-4 mb-md-0">
                  {t("book-Appoint-head")}
                </h3>
                <a
                  href="#"
                  data-toggle="modal"
                  data-aos="flip-up"
                  data-target="#exampleModal"
                  className="btn btn-primary fwEbold text-uppercase py-3 py-lg-4 ml-md-4 ml-lg-6"
                >
                  {t("book-Appoint")}{" "}
                </a>
              </div>
            </div>
          </aside>

          <section className="abtSec pt-12 pt-md-15 ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-5 col-lg-6">
                  <div className="imgHolder mx-auto mt-md-2 mt-lg-0 mr-md-0 mt-md-0 ml-md-n32 float-lg-right">
                    <img
                      src="images/img28.png"
                      alt="image description"
                      className="img-fluid"
                      data-aos="fade-right"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-7 col-lg-6">
                  <div className="txtHolder pt-7 pt-md-6 pt-xl-16 text-center text-md-left">
                    <h3 className="headingIV mb-4">
                      <strong className="d-block font-weight-bold text-capitalize">
                        {t("About_sub_Heading")}
                      </strong>
                    </h3>
                    <p>{t("About_des1")}</p>
                    <p>{t("About_des2")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="dscntclb bgTheme pt-6 pb-7">
            <div className="container">
              <div className="d-flex align-items-center text-white justify-content-center">
                <span className="icoHolder mr-3">
                  <Icon icon="bxs:offer" fontSize={50} color="#fff"></Icon>
                </span>
                <h3 className="h5 mb-0 font-weight-normal text-white fIStyle">
                  Enjoy BlueTeam's{" "}
                  <strong className="font-weight-bold">
                    {" "}
                    Special Membership{" "}
                  </strong>{" "}
                  Packages{" "}
                </h3>
                <p>
                  You will get a Discount on any of our services through
                  BlueTeam's membership cards. Look at the membership card
                  packages and get great deals.{" "}
                </p>
              </div>
            </div>
          </aside>

          <section className="kyccSec pt-10 pt-sm-12 pt-md-16 pt-lg-19 ">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="header text-center mb-8 mb-md-11">
                    <h3 class="h3 fwEbold">{t("gallery_main_head")}</h3>
                    <p className="psudo">{t("gallery_sub_head")}</p>
                  </div>
                </div>
              </div>
              <div className="gridImgHolder mb-6 mb-lg-9">
                <Gallery />
              </div>
            </div>
          </section>

          <aside class="cntrHolder bgTheme pt-8 pt-md-10 pb-4">
            <div class="container">
              <ul class="list-unstyled d-flex flex-wrap counterList text-center  text-lg-left justify-content-center mb-0">
                <li class="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
                  <span class="icoHolder flex-shrink-0 d-block d-lg-flex align-items-center justify-content-center mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
                    <img
                      src="images/ico08.svg"
                      alt="image description"
                      class="img-fluid"
                      width="61"
                      height="61"
                    />
                  </span>
                  <div class="wrap font-weight-light text-white">
                    <div className="d-block font-weight-normal mb-1">
                      <strong style={{ fontSize: 43 }}>90%</strong>
                    </div>
                    <p>
                      {i18next.language == "ar"
                        ? "رضا العملاء"
                        : "Satisfactory"}
                    </p>
                  </div>
                </li>
                <li class="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
                  <span class="icoHolder flex-shrink-0 d-block d-lg-flex align-items-cente justify-content-centerr mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
                    <img
                      src="images/ico09.svg"
                      alt="image description"
                      class="img-fluid"
                      width="61"
                      height="61"
                    />
                  </span>
                  <div class="wrap font-weight-light text-white">
                    <div className="d-block font-weight-normal mb-1">
                      <strong style={{ fontSize: 43 }}>16+</strong>
                    </div>
                    <p>{i18next.language == "ar" ? "فريق عمل" : "Teams"}</p>
                  </div>
                </li>
                <li class="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
                  <span class="icoHolder flex-shrink-0 d-block d-lg-flex align-items-center justify-content-center mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
                    <img
                      src="images/ico10.svg"
                      alt="image description"
                      class="img-fluid"
                      width="61"
                      height="61"
                    />
                  </span>
                  <div class="wrap font-weight-light text-white">
                    <div className="d-block font-weight-normal mb-1">
                      <strong style={{ fontSize: 43 }}>11 </strong>
                    </div>
                    <p>
                      {i18next.language == "ar"
                        ? "سنة خبرة "
                        : "Year Experience"}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <Testimonials />
          <aside className="mapHolder w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0387173266186!2d54.49938290000001!3d24.3799565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40f233f0f737%3A0x398170c0c7c45436!2sBlueteam%20Car%20Services!5e0!3m2!1sen!2sin!4v1682677171522!5m2!1sen!2sin"
              height="480"
              // style="border:0"
              allowFullScreen
            ></iframe>
          </aside>
        </main>
      </div>
    </>
  );
};
export default Home;
