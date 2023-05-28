import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className="abtSec pt-12 pt-md-15 ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header ltrSpce text-center mb-10 mb-xl-11">
              <h1 className="headingI fwEbold mb-2 mb-xl-4">About Blue Team</h1>
              <p className="psudo">{t("about_subheading")}</p>
            </div>
          </div>
        </div>
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
  );
}
