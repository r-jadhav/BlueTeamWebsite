import React from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <section className="abtWSec pt-sm-12 pt-md-16 pb-6 pb-sm-4 pb-md-8 pb-lg-0 pb-xl-6">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-10 offset-xl-1">
              <div className="header ltrSpce text-center mb-8 mb-sm-10 mb-md-12 mb-xl-14 px-lg-20 px-xl-4">
                <h3 className="h3 fwEbold mb-2">{t("FaqMainHead")}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="accordion accordWrap mb-8 mb-sm-12 mb-lg-14"
                id="accordionGeneral"
              >
                <div className="card">
                  <div className="card-header p-0 border-0" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        {t("Faqtitle1")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans1")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading2">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        {t("Faqtitle2")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse2"
                    className="collapse"
                    aria-labelledby="heading2"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans2")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading3">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        {t("Faqtitle3")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse3"
                    className="collapse"
                    aria-labelledby="heading3"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans3")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading4">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse4"
                        aria-expanded="false"
                        aria-controls="collapse4"
                      >
                        {t("Faqtitle4")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse4"
                    className="collapse"
                    aria-labelledby="heading4"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans4")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading5">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse5"
                        aria-expanded="false"
                        aria-controls="collapse5"
                      >
                        {t("Faqtitle5")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="heading5"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans5")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading6">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse6"
                        aria-expanded="false"
                        aria-controls="collapse6"
                      >
                        {t("Faqtitle6")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse6"
                    className="collapse"
                    aria-labelledby="heading6"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans6")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading7">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse7"
                        aria-expanded="false"
                        aria-controls="collapse7"
                      >
                        {t("Faqtitle7")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse7"
                    className="collapse"
                    aria-labelledby="heading7"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans7")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading8">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse8"
                        aria-expanded="false"
                        aria-controls="collapse8"
                      >
                        {t("Faqtitle8")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse8"
                    className="collapse"
                    aria-labelledby="heading8"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans8")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading9">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse9"
                        aria-expanded="false"
                        aria-controls="collapse9"
                      >
                        {t("Faqtitle9")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse9"
                    className="collapse"
                    aria-labelledby="heading9"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans9")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading10">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse10"
                        aria-expanded="false"
                        aria-controls="collapse10"
                      >
                        {t("Faqtitle10")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse10"
                    className="collapse"
                    aria-labelledby="heading10"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans10")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading11">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse11"
                        aria-expanded="false"
                        aria-controls="collapse11"
                      >
                        {t("Faqtitle11")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse11"
                    className="collapse"
                    aria-labelledby="heading11"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans11")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading12">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse12"
                        aria-expanded="false"
                        aria-controls="collapse12"
                      >
                        {t("Faqtitle12")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse12"
                    className="collapse"
                    aria-labelledby="heading12"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans12")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading13">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse13"
                        aria-expanded="false"
                        aria-controls="collapse13"
                      >
                        {t("Faqtitle13")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse13"
                    className="collapse"
                    aria-labelledby="heading13"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans13")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading14">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse14"
                        aria-expanded="false"
                        aria-controls="collapse14"
                      >
                        {t("Faqtitle14")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse14"
                    className="collapse"
                    aria-labelledby="heading14"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans14")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading15">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse15"
                        aria-expanded="false"
                        aria-controls="collapse15"
                      >
                        {t("Faqtitle15")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse15"
                    className="collapse"
                    aria-labelledby="heading15"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans15")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading16">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse16"
                        aria-expanded="false"
                        aria-controls="collapse16"
                      >
                        {t("Faqtitle16")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse16"
                    className="collapse"
                    aria-labelledby="heading16"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans16")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading17">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse17"
                        aria-expanded="false"
                        aria-controls="collapse17"
                      >
                        {t("Faqtitle17")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse17"
                    className="collapse"
                    aria-labelledby="heading17"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans17")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading18">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse18"
                        aria-expanded="false"
                        aria-controls="collapse18"
                      >
                        {t("Faqtitle18")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse18"
                    className="collapse"
                    aria-labelledby="heading18"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans18")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading19">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse19"
                        aria-expanded="false"
                        aria-controls="collapse19"
                      >
                        {t("Faqtitle19")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse19"
                    className="collapse"
                    aria-labelledby="heading19"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans19")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading20">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse20"
                        aria-expanded="false"
                        aria-controls="collapse20"
                      >
                        {t("Faqtitle20")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse20"
                    className="collapse"
                    aria-labelledby="heading20"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans20")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading21">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse21"
                        aria-expanded="false"
                        aria-controls="collapse21"
                      >
                        {t("Faqtitle21")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse21"
                    className="collapse"
                    aria-labelledby="heading21"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans21")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading22">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse22"
                        aria-expanded="false"
                        aria-controls="collapse22"
                      >
                        {t("Faqtitle22")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse22"
                    className="collapse"
                    aria-labelledby="heading22"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans22")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading23">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse23"
                        aria-expanded="false"
                        aria-controls="collapse23"
                      >
                        {t("Faqtitle23")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse23"
                    className="collapse"
                    aria-labelledby="heading23"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans23")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading24">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse24"
                        aria-expanded="false"
                        aria-controls="collapse24"
                      >
                        {t("Faqtitle24")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse24"
                    className="collapse"
                    aria-labelledby="heading24"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans24")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading25">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse25"
                        aria-expanded="false"
                        aria-controls="collapse25"
                      >
                        {t("Faqtitle25")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse25"
                    className="collapse"
                    aria-labelledby="heading25"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans25")}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 border-0" id="heading26">
                    <h2 className="mb-0">
                      <button
                        className="btn position-relative btn-link py-3 pl-7 pr-4 px-md-11 w-100 text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse26"
                        aria-expanded="false"
                        aria-controls="collapse26"
                      >
                        {t("Faqtitle26")}
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapse26"
                    className="collapse"
                    aria-labelledby="heading26"
                    data-parent="#accordionGeneral"
                  >
                    <div className="card-body pl-7 pr-4 px-md-11 pb-7 pt-7 mt-n1 pt-0">
                      {t("Faqans26")}
                    </div>
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

export default Faq;
