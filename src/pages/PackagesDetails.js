import React from "react";
import { Icon } from "@iconify/react";
import Banner from "../components/Service/PackagesDetails/CarWashBanner";
import { useLocation } from "react-router-dom";
import i18next from "i18next";
import { Row } from "react-bootstrap";
import { Col } from "reactstrap";
import api from "../constant/api";
import BookingEnquiry from "../components/Home/BookingEnquiry";

// import { useParams } from 'react-router-dom';

const PackagesDetails = () => {
  // const { id } = useParams();
  const location = useLocation();
  const [show, setShow] = React.useState(false);
  const [banners, setBanners] = React.useState();
  const [services, setService] = React.useState();

  const getServices = () => {
    api.get("/service/getServicecategory").then((res) => {
      setService(res.data.data);
    });
  };
  const getAttachmentBypakageId = () => {
    api
      .post("service/getAttachmentByPackageId", {
        sp_media_package_id: location.state.sp_id,
      })
      .then((res) => {
        setBanners(res.data.data);
      });
  };
  React.useEffect(() => {
    console.log(location.state)
    getServices()
    getAttachmentBypakageId();
  }, [location.state.sp_id]);

  return (
    <>
      <BookingEnquiry
        show={show}
        setShow={setShow}
        category={services}
        defaultCategory={location.state.selected_cat}
        defaultPackage={location.state.sp_name_ar}
      ></BookingEnquiry>
      <section className="mt-sm-10 serviceDetail py-10 py-sm-12 py-md-14 py-lg-16">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
              <div className="header text-center font-weight-light mb-4">
                <h1 className="headingI text-capitalize mb-3 fwEbold">
                  {i18next.language == "ar"
                    ? location.state.sp_name_ar
                    : location.state.sp_name_en}{" "}
                </h1>
              </div>

              <div className="row mx-xxl-n12 mb-5 mt-2">
                <div className="col-12">
                  <Row>
                    <Col className="mb-sm-3 text-right text-sm-center" sm={12} lg={6}>
                      <button
                        onClick={() => {
                          setShow(true);
                        }}
                        className="btn btnTheme text-uppercase fwEbold py-2"
                      >
                        <span className="far fa-calendar-check mr-1 mr-lg-2"></span>
                        Book Now
                      </button>
                    </Col>

                    <Col
                      className="text-left text-sm-center"
                      sm={12}
                      lg={6}
                    >
                      <a
                        type="button"
                        href="tel:025555292"
                        className="btn btnTheme text-uppercase fwEbold py-2"
                      >
                        <span className=" mr-1 mr-lg-2">
                          <Icon fontSize={15} icon="ic:round-phone"></Icon>
                        </span>
                        Call Now
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
              <hr></hr>
            </div>
            <div className="col-12">
              <div className="row flex-row-reverse mb-4 mb-md-6 mb-lg-8 mb-xl-14">
                <div className="col-12 col-lg-6">
                  <span className="d-block w-100 mb-5 mb-lg-0 mt-lg-1">
                    <Banner content={banners} setShow={setShow} />
                  </span>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="txtHolder text-center text-md-left">
                    <p>
                      {i18next.language == "ar"
                        ? location.state.sp_desp_ar
                        : location.state.sp_desp_en}
                    </p>
                  </div>
                  <div className="col-12">
                    <article className="planFullList border-0 mb-4 mb-lg-7">
                      <div className="priceHeader px-3 rounded text-capitalize">
                        <div className="row align-items-center">
                          <div className="col-12">
                            <h6 className="ml-md-2 mb-0">
                              Four Wheel -{" "}
                              {i18next.language == "ar"
                                ? location.state.sp_four_price_ar + "درهم"
                                : location.state.sp_four_price_en + "AED"}
                              &nbsp;&nbsp;&nbsp;Salon -{" "}
                              {i18next.language == "ar"
                                ? location.state.sp_salon_price_ar + "درهم"
                                : location.state.sp_salon_price_en + "AED"}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="txtWrap px-3 px-sm-6 py-5">
                        <ul className="list-unstyled checkList text-secondary text-left mb-4">
                          {i18next.language == "ar"
                            ? location.state.sp_included_serv_ar.length
                              ? location.state.sp_included_serv_ar
                                  .split(",")
                                  .map((serv) => (
                                    <li className="position-relative">
                                      <span className="ico position-absolute fa fa-check"></span>
                                      {serv}
                                    </li>
                                  ))
                              : ""
                            : location.state.sp_included_serv_en.length
                            ? location.state.sp_included_serv_en
                                .split(",")
                                .map((serv) => (
                                  <li className="position-relative">
                                    <span className="ico position-absolute fa fa-check"></span>
                                    {serv}
                                  </li>
                                ))
                            : ""}
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagesDetails;
