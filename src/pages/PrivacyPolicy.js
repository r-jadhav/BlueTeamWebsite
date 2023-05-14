import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
    const { t } = useTranslation();
  return (
    <>
      <section class="cwsSec pt-12 pt-md-15 py-md-9 pt-lg-17 pb-10 pb-lg-10 pt-xl-19 pb-xl-13">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-12">
              <header class="headerII ltrSpce mb-8 mb-md-10 mb-lg-12 px-md-6 px-xl-10">
                <h2 class="h3 text-center fwEbold mb-4 mb-sm-5 mb-xl-6 mx-lg-12">
                    {t("Privacy-Policy")}
                </h2>
                <h5>{t("We-respect-your-privacy")}</h5>
                <p> {t("We-respect-your-privacy-des")} </p>
                <h5>{t("Information-we-collect")}</h5>
                <p> {t("Information-we-collect-des")} </p>
                <h5>{t("How-do-we-use-your-information")}</h5>
                <p> {t("How-do-we-use-your-information-des")} </p>
                <h5>{t("Disclosure-of-your-information")}</h5>
                <p> {t("Disclosure-of-your-information-des")} </p>
                <h5>{t("Safety")}</h5>
                <p> {t("Safety-des")} </p>
                <h5>{t("Modifications-to-this-Privacy-Policy")}</h5>
                <p> {t("Modifications-to-this-Privacy-Policy-des")} </p>
              </header>
            </div>
          </div>
    
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
