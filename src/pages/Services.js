import React from "react";
import api from "../constant/api";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [getService, setService] = React.useState();

  const getServices = () => {
    api.get("/service/getServicecategory").then((res) => {
      setService(res.data.data);
    });
  };

  React.useEffect(() => {
    getServices();
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="wsisSec pt-12 pt-lg-16 pb-4">
        <div className="container">
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
                  key={ele.service_category_id}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    onClick={() => {
                      navigate({
                        pathname: "/packages",
                        search: createSearchParams({
                          id: ele.service_category_id,
                        }).toString(),
                      });
                    }}
                    className="sBlock mb-8 mb-lg-11 text-center text-md-left"
                    style={{
                      background: ele.color,
                      padding: 20,
                      justifyContent: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    <div className="imgHolder overflow-hidden mb-5 position-relative mx-auto d-flex justify-content-center">
                      <img
                        src={`http://blueteam.xyz/uploads/${ele.service_category_img}`}
                        alt="image description"
                        className="img-fluid"
                        style={{ minWidth: 200, width: "auto" }}
                      />
                    </div>
                    <h2 className="headingIX mb-2">
                      <p>
                        {i18next.language == "ar"
                          ? ele.service_category_name_ar
                          : ele.service_category_name_en}
                      </p>
                    </h2>
                    <p>We do all kinds of polishing and ceramics</p>
                    <span className="readMore fwEbold text-uppercase">
                      {i18next.language == "ar"
                        ? "اطلع على الباقات"
                        : "View Packages "}

                      <span className="fas fa-chevron-right icn"></span>
                    </span>
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

export default Services;
