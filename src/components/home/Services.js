import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Services({ services }) {
  const { t } = useTranslation();

  return (
    <section class="wsisSec pt-12 pt-lg-16 pb-4">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
            <div class="header ltrSpce text-center mb-10 mb-xl-11">
              <h1 class="headingI fwEbold mb-2 mb-xl-4">Categories</h1>
              <p>{t("category_subtitle")}</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          {services?.map((ele) => {
            return (
              <div
                class="col-12 col-md-6 col-lg-2 d-flex justify-content-center"
                key={ele.service_category_id}
              >
                <div class="sBlock mb-8 mb-lg-11 text-center text-md-left">
                  <div class="imgHolder overflow-hidden position-relative mx-auto">
                    <img
                      src={`http://blueteam.xyz/uploads/${ele.service_category_img}`}
                      data-aos="flip-right"
                      alt="image description"
                      class="img-fluid home-categ"
                    />
                  </div>
                  <h2 class="headingIX mb-2">
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
