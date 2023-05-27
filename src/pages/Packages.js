import React from "react";
import api from "../constant/api";
import i18next from "i18next";
import {
  Link,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Row } from "reactstrap";
import { Icon } from "@iconify/react";
import BookingEnquiry from "../components/Home/BookingEnquiry";

const Packages = () => {
  const [getServiceData, setServiceData] = React.useState();
  const [searchparams] = useSearchParams();
  const [services, setService] = React.useState();
  const [show, setShow] = React.useState(false);
  const [selected, setSelected] = React.useState({
    category:'',
    package:''
  })
  const getServices = () => {
    api.get("/service/getServicecategory").then((res) => {
      setService(res.data.data);
    });
  };
  const navigate = useNavigate();
  const getServicesById = () => {
    const cat = localStorage.getItem('cat_name')
    setSelected({
      category:cat,
      package:''
    })
    api
      .post("/service/getServiceByCategoryId", {
        sp_cat_id: searchparams.get("id"),
      })
      .then((res) => {
        setServiceData(res.data.data);
      });
  };

  React.useEffect(() => {
    getServicesById();
    getServices()
    window.scroll(0, 0);
  }, [searchparams.get("id")]);
  return (
    <>
      <BookingEnquiry
        category={services}
        show={show}
        setShow={setShow}
        defaultCategory={selected.category}
        defaultPackage={selected.package}
      ></BookingEnquiry>
      <section className="wsisSec pt-12 pt-lg-16 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
              <div className="header ltrSpce text-center mb-10 mb-xl-11">
                <h1 className="headingI fwEbold mb-2 mb-xl-4">
                  Service We Provide
                </h1>
                <p>
                  We have over 20 years of experience providing carwash &amp;
                  detail services for both Commercial and individuals without
                  compromise quality.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {getServiceData &&
              getServiceData.map((ele) => {
                return (
                  <div
                    className="col-12 col-md-6 col-lg-4 d-flex"
                    key={ele.sp_id}
                  >
                    <div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
                      <div className="imgHolder overflow-hidden mb-5 overlayI position-relative mx-auto">
                        <img
                          src={`http://blueteam.xyz/uploads/${ele.sp_media_name}`}
                          alt="image description"
                          className="img-fluid"
                          style={{ width: "auto" }}
                        />

                        <div className="btnHolder position-absolute">
                          <button
                           onClick={() => {
                            let formalELE = ele
                            formalELE.selected_cat = selected.category
                            navigate("/packages-details", { state: formalELE });
                          }}
                            className="btn btn-light py-2 text-uppercase font-weight-bold"
                          >
                            view detail
                          </button>
                        </div>
                      </div>
                      <h2 className="headingIX mb-2">
                        {i18next.language == "ar"
                          ? ele.sp_name_ar
                          : ele.sp_name_en}
                      </h2>
                      <p>
                        {i18next.language == "ar"
                          ? ele.sp_desp_ar.substring(0, 200)
                          : ele.sp_desp_en.substring(0, 200)}
                      </p>
                      <Row>
                        <button
                          onClick={() => {
                            let formalELE = ele
                            formalELE.selected_cat = selected.category
                            navigate("/packages-details", { state: formalELE });
                          }}
                          className="btn btn-light text-uppercase fwEbold py-2"
                        >
                          View Details{" "}
                          <span>
                            <Icon icon="ic:round-chevron-right"></Icon>
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setSelected({
                              category:selected.category,
                              package:ele.sp_name_ar
                            })
                            setShow(true);
                          }}
                          className="btn btnTheme text-uppercase fwEbold py-2 ml-2"
                        >
                          Book Now &nbsp;
                          <span className="far fa-calendar-check mr-1 mr-lg-2"></span>
                        </button>
                      </Row>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;

{
  /* <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
              <div className="imgHolder overflow-hidden mb-5 overlayI position-relative mx-auto">
                <img
                  src="images/img04.png"
                  alt="image description"
                  className="img-fluid"
                />
                <div className="btnHolder position-absolute">
                  <a
                    href="/packages-details"
                    className="btn btn-light py-2 text-uppercase font-weight-bold"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <h2 className="headingIX mb-2">
                <a href="/packages-details">Express Exterior</a>
              </h2>
              <p>
                Because sometimes you don’t just have the need for a clean car.
                You have a deeper need the need for speed. Exterior wash and
                blow dry in under 3 minutes.
              </p>
              <a
                href="/packages-details"
                className="readMore fwEbold text-uppercase"
              >
                read more <span className="fas fa-chevron-right icn"></span>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
              <div className="imgHolder overflow-hidden mb-5 overlayI position-relative mx-auto">
                <img
                  src="images/img05.png"
                  alt="image description"
                  className="img-fluid"
                />
                <div className="btnHolder position-absolute">
                  <a
                    href="/packages-details"
                    className="btn btn-light py-2 text-uppercase font-weight-bold"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <h2 className="headingIX mb-2">
                <a href="/packages-details">Auto Detailing</a>
              </h2>
              <p>
                Give all your surfaces the attention they de serve. Professional
                auto detail cleaning you can afford. No appt needed.
              </p>
              <a
                href="/packages-details"
                className="readMore fwEbold text-uppercase"
              >
                read more <span className="fas fa-chevron-right icn"></span>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
              <div className="imgHolder overflow-hidden mb-5 overlayI position-relative mx-auto">
                <img
                  src="images/img06.png"
                  alt="image description"
                  className="img-fluid"
                />
                <div className="btnHolder position-absolute">
                  <a
                    href="service-detail3.html"
                    className="btn btn-light py-2 text-uppercase font-weight-bold"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <h2 className="headingIX mb-2">
                <a href="service-detail3.html">Full Service Wash</a>
              </h2>
              <p>
                Get clean on the outside, while finding your lost change on the
                inside. A deep Interior &amp; exterior cleaning in approx. 20
                minutes.
              </p>
              <a
                href="service-detail3.html"
                className="readMore fwEbold text-uppercase"
              >
                read more <span className="fas fa-chevron-right icn"></span>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
              <div className="imgHolder overflow-hidden mb-5 overlayI position-relative mx-auto">
                <img
                  src="images/img04.png"
                  alt="image description"
                  className="img-fluid"
                />
                <div className="btnHolder position-absolute">
                  <a
                    href="service-detail4.html"
                    className="btn btn-light py-2 text-uppercase font-weight-bold"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <h2 className="headingIX mb-2">
                <a href="service-detail4.html">Complete Detail Wash</a>
              </h2>
              <p>
                Want to give your car that showroom look? Leave your car with us
                and less than 5 hours later we’ll have your vehicles.
              </p>
              <a
                href="service-detail4.html"
                className="readMore fwEbold text-uppercase"
              >
                read more <span className="fas fa-chevron-right icn"></span>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
              <div className="imgHolder overflow-hidden mb-5 overlayI position-relative mx-auto">
                <img
                  src="images/img05.png"
                  alt="image description"
                  className="img-fluid"
                />
                <div className="btnHolder position-absolute">
                  <a
                    href="service-detail5.html"
                    className="btn btn-light py-2 text-uppercase font-weight-bold"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <h2 className="headingIX mb-2">
                <a href="service-detail5.html">Oil Changing</a>
              </h2>
              <p>
                These services compliment your regular oil change service to
                ensure that your vehicle continues to run properly.
              </p>
              <a
                href="service-detail5.html"
                className="readMore fwEbold text-uppercase"
              >
                read more <span className="fas fa-chevron-right icn"></span>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
              <div className="imgHolder overflow-hidden mb-5 overlayI position-relative mx-auto">
                <img
                  src="images/img06.png"
                  alt="image description"
                  className="img-fluid"
                />
                <div className="btnHolder position-absolute">
                  <a
                    href="/packages-details"
                    className="btn btn-light py-2 text-uppercase font-weight-bold"
                  >
                    View Detail
                  </a>
                </div>
              </div>
              <h2 className="headingIX mb-2">
                <a href="/packages-details">Preventative Maintenance</a>
              </h2>
              <p>
                Our maintenance technicians are trained and specialize in giving
                your car the best care to avoid major breakdowns.
              </p>
              <a
                href="/packages-details"
                className="readMore fwEbold text-uppercase"
              >
                read more <span className="fas fa-chevron-right icn"></span>
              </a>
            </div>
          </div> */
}
