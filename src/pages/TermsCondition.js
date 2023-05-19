import React from "react";
import { useTranslation } from "react-i18next";

const TermsCondition = () => {
    const { t } = useTranslation();
  return (
    <>
      <section class="faqWrapSec cwsSec pt-12 pt-md-15 py-md-9 pt-lg-17 pb-10 pb-lg-10 pt-xl-19 pb-xl-13">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-12">
              <div class="headerII ltrSpce mb-8 mb-md-10 mb-lg-12 px-md-6 px-xl-10">
                <h2 class="h3 text-center fwEbold mb-4 mb-sm-5 mb-xl-6 mx-lg-12">
                    {t("TermsCondition")}
                </h2>
                <h5>{t("information-for-appointments")}</h5>
                <p> {t("information-for-appointments-des")} </p>
                <h5>{t("Maintenance")}</h5>
                <p> {t("Maintenance-des")} </p>
                <h5>{t("Important-Notes")}</h5>
                <p> {t("Important-Notes-des")} </p>
                <h5>{t("General-notes")}</h5>
                <p> {t("General-notes-des")} </p>
                <p>{t("terms-note1")}</p>
                <p> {t("terms-note2")} </p>
              </div>
            </div>
          </div>
    
        </div>
      </section>
    </>
  );
};

export default TermsCondition;
