import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function Services({ services }) {
  const { t } = useTranslation();
  const navigate = useNavigate()
  return (
    <section className="wsisSec pt-6 pt-lg-6 pb-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
            <div className="header ltrSpce text-center mb-10 mb-xl-11">
            <h3 className="h3 fwEbold mb-4">{i18next.language == "ar" ? 'الفئات' : 'Categories '}</h3>
              <p className="psudo">{t("category_subtitle")}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {services?.map((ele) => {
            return (
              <div
              style={{cursor:'pointer'}}
                className="col-12 col-md-6 col-lg-2 d-flex justify-content-center"
                key={ele.service_category_id}
                onClick={()=>{
                  localStorage.setItem('cat_name',ele.service_category_name_ar)
                  navigate({
                    pathname: "/packages",
                    search: createSearchParams({
                      id: ele.service_category_id,
                    }).toString(),
                    
                  });
                }}
              >
                <div className="sBlock mb-8 mb-lg-11 text-center text-md-left">
                  <div className="imgHolder overflow-hidden position-relative mx-auto">
                    <img
                      src={`http://blueteam.xyz/uploads/${ele.service_category_img}`}
                      data-aos="flip-right"
                      alt="image description"
                      className="img-fluid home-categ"
                    />
                  </div>
                  <h2 className="headingIX mb-2">
                    <a href="#">
                      {i18next.language == "ar"
                        ? ele.service_category_name_ar
                        : ele.service_category_name_en}
                    </a>
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
