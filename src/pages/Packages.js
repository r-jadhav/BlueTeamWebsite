import React from "react";
import api from "../constant/api";
import i18next from "i18next";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Row } from "reactstrap";
import { Icon } from "@iconify/react";
import BookingEnquiry from "../components/Home/BookingEnquiry";
import { useTranslation } from "react-i18next";

const Packages = () => {
  const { t } = useTranslation();
  const [getServiceData, setServiceData] = React.useState();
  const [searchparams] = useSearchParams();
  const [services, setService] = React.useState();
  const [show, setShow] = React.useState(false);
  const [selected, setSelected] = React.useState({
    category: "",
    package: "",
  });
  const getServices = () => {
    api.get("/service/getServicecategory").then((res) => {
      setService(res.data.data);
    });
  };
  const navigate = useNavigate();
  const getServicesById = () => {
    const cat = localStorage.getItem("cat_name");
    setSelected({
      category: cat,
      package: "",
    });
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
    getServices();
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
            <div className="col-12">
              <div className="header ltrSpce text-center mb-10 mb-xl-11">
                <h1 className="headingI fwEbold mb-2 mb-xl-4">
                  {t("service_provide")}
                </h1>
                <p> {t("service_provide_des")} </p>
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
                              let formalELE = ele;
                              formalELE.selected_cat = selected.category;
                              navigate("/packages-details", {
                                state: formalELE,
                              });
                            }}
                            className="btn btn-light py-2 text-uppercase font-weight-bold"
                          >
                           {t("view_details")}{" "}
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
                      <Row className="justify-content-center-mobile">
                        <button
                          onClick={() => {
                            let formalELE = ele;
                            formalELE.selected_cat = selected.category;
                            navigate("/packages-details", { state: formalELE });
                          }}
                          className="btn btn-light text-uppercase fwEbold py-2"
                        >
                          {t("view_details")}{" "}
                          <span>
                            <Icon icon="ic:round-chevron-right"></Icon>
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setSelected({
                              category: selected.category,
                              package: ele.sp_name_ar,
                            });
                            setShow(true);
                          }}
                          className="btn btnTheme text-uppercase fwEbold py-2 ml-2"
                        >
                         {t("book_now")} &nbsp;
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
