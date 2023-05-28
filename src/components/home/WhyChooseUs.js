import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation();
  return (
    <section className="chooseSec pb-6">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header text-center font-weight-light mb-11">
              <h3 className="h3 fwEbold mb-4 pt-12"> {t('why_choose_us')} </h3>
              <p className="psudo">
                {t('why_choose_us_subhead')}
              </p>
            </div>
          </div> 
        </div>
        <div
          className="row"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div className="icoHolder mr-4 mt-1">
                <img
                  src="images/ico04.svg"
                  alt="image description"
                  width="60"
                  height="55"
                />
              </div>
              <div className="txtHolder">
                <h5 className="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  {t('trusted_services')}
                </h5>
                <p>
                  {t('trusted_services_des')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div className="icoHolder mr-4 mt-1">
                <img
                  src="images/ico05.svg"
                  alt="image description"
                  width="60"
                  height="55"
                />
              </div>
              <div className="txtHolder">
                <h5 className="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  {t('organic_products')}
                </h5>
                <p>
                  {t('organic_products_des')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div className="icoHolder mr-4 mt-1">
                <img
                  src="images/ico06.svg"
                  alt="image description"
                  width="60"
                  height="55"
                />
              </div>
              <div className="txtHolder">
                <h5 className="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  {t('talented_workers')}
                </h5>
                <p>
                 {t('talented_workers_des')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div className="icoHolder mr-4 mt-1">
                <Icon
                  icon="majesticons:list-box-line"
                  fontSize={50}
                  color="#0b4b8a"
                ></Icon>
              </div>
              <div className="txtHolder">
                <h5 className="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  {t('Estimations')}
                </h5>
                <p>
                  {t('Estimations_des')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div className="icoHolder mr-4 mt-1">
                <Icon
                  icon="majesticons:thumb-up-line"
                  fontSize={50}
                  color="#0b4b8a"
                ></Icon>
              </div>
              <div className="txtHolder">
                <h5 className="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  {t('Trust')}
                </h5>
                <p>
                  {t('Trust_des')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div className="icoHolder mr-4 mt-1">
                <Icon
                  icon="majesticons:timer-line"
                  fontSize={50}
                  color="#0b4b8a"
                ></Icon>
              </div>
              <div className="txtHolder">
                <h5 className="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  {t('Warranties')}
                </h5>
                <p>{t('Warranties_des')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
