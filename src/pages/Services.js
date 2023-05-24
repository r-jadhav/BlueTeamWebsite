import React, { useEffect } from "react";
import api from "../constant/api";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Services = () => {
  const { t } = useTranslation();
  const [getService, setService] = React.useState();

  const getServices = () => {
    api.get("/service/getServicecategory").then((res) => {
      setService(res.data.data);
      console.log(res.data.data);
    });
  };
  React.useEffect(() => {
    getServices();
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="wsisSec pt-12 pt-lg-16 pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
              <div className="header ltrSpce text-center mb-10 mb-xl-11">
                <h3 className="headingI fwEbold mb-2 mb-xl-4 h3">
                  {i18next.language == "ar" ? "الفئات" : "Categories "}
                </h3>
                <p>{t("category_subtitle")}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {getService?.map((ele) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-4 d-flex"
                  style={{
                    background: ele.color,
                    margin: 10,
                    justifyContent: "center",
                  }}
                  key={ele.service_category_id}
                >
                  <div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
                    <div className="imgHolder overflow-hidden mb-5 position-relative mx-auto d-flex justify-content-center">
                      <img
                        src={`http://blueteam.xyz/uploads/${ele.service_category_img}`}
                        alt="image description"
                        className="img-fluid"
                        style={{ minWidth: 200, width: "auto" }}
                      />
                      {/* <div className="btnHolder position-absolute">
                        <a
                          href="#"
                          className="btn btn-light py-2 text-uppercase font-weight-bold"
                        >
                          view detail
                        </a>
                      </div> */}
                    </div>
                    <h2 className="headingIX mb-2">
                      <a href="#">
                        {i18next.language == "ar"
                          ? ele.service_category_name_ar
                          : ele.service_category_name_en}
                      </a>
                    </h2>
                    <p>We do all kinds of polishing and ceramics</p>
                    <a href="#" className="readMore fwEbold text-uppercase">
                      {i18next.language == "ar"
                        ? "اطلع على الباقات"
                        : "View Packages "}
                      <span className="fas fa-chevron-right icn"></span>
                    </a>
                  </div>
                </div>
              );
            })}

            {/* <div className="col-12 col-md-6 col-lg-4 d-flex">
							<div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
								<div className="imgHolder overflow-hidden mb-5 overlayI position-relative mx-auto">
									<img src="images/img04.png" alt="image description" className="img-fluid"/>
									<div className="btnHolder position-absolute">
										<a href="#" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
									</div>
								</div>
								<h2 className="headingIX mb-2"><a href="#">Polishing and ceramic services</a></h2>
								<p>We do all kinds of polishing and ceramics</p>
								<a href="#" className="readMore fwEbold text-uppercase">read more <span className="fas fa-chevron-right icn"></span></a>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4 d-flex">
							<div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
								<div className="imgHolder overflow-hidden mb-5 overlayI position-relative mx-auto">
									<img src="images/img05.png" alt="image description" className="img-fluid"/>
									<div className="btnHolder position-absolute">
										<a href="#" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
									</div>
								</div>
								<h2 className="headingIX mb-2"><a href="#">Washing services</a></h2>
								<p>We wash and clean your car perfectly</p>
								<a href="#" className="readMore fwEbold text-uppercase">read more <span className="fas fa-chevron-right icn"></span></a>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4 d-flex">
							<div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
								<div className="imgHolder overflow-hidden mb-5 overlayI position-relative mx-auto">
									<img src="images/img06.png" alt="image description" className="img-fluid"/>
									<div className="btnHolder position-absolute">
										<a href="#" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
									</div>
								</div>
								<h2 className="headingIX mb-2"><a href="#">Mobile vehicle maintenance</a></h2>
								<p>Just call us anywhere and we will fix your car in place immediately</p>
								<a href="#" className="readMore fwEbold text-uppercase">read more <span className="fas fa-chevron-right icn"></span></a>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4 d-flex">
							<div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
								<div className="imgHolder overflow-hidden mb-5 overlayI position-relative mx-auto">
									<img src="images/img04.png" alt="image description" className="img-fluid"/>
									<div className="btnHolder position-absolute">
										<a href="#" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
									</div>
								</div>
								<h2 className="headingIX mb-2"><a href="#">Hidden and hangout services</a></h2>
								<p>We install the hidden types of your car to your liking</p>
								<a href="#" className="readMore fwEbold text-uppercase">read more <span className="fas fa-chevron-right icn"></span></a>
							</div>
						</div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
