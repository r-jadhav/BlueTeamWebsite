import React from "react";
import { Icon } from "@iconify/react";

export default function WhyChooseUs() {
  return (
    <section class="chooseSec pb-6">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header text-center font-weight-light mb-11">
              <h3 class="h3 fwEbold mb-4 pt-12"> Why Choose Us? </h3>
              <p className="psudo">
                Here’s Why our product beats all other competitors in market.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 d-flex">
            <div class="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div class="icoHolder mr-4 mt-1">
                <img
                  src="images/ico04.svg"
                  alt="image description"
                  width="60"
                  height="55"
                />
              </div>
              <div class="txtHolder">
                <h5 class="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  Trusted Services
                </h5>
                <p>
                  We bring you the most accurate &amp; fair-price service
                  carwash detailing service nation wide.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-flex">
            <div class="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div class="icoHolder mr-4 mt-1">
                <img
                  src="images/ico05.svg"
                  alt="image description"
                  width="60"
                  height="55"
                />
              </div>
              <div class="txtHolder">
                <h5 class="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  Organic Products
                </h5>
                <p>
                  Give all your surfaces the attention they professional auto
                  detail clean you can affordable.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-flex">
            <div class="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div class="icoHolder mr-4 mt-1">
                <img
                  src="images/ico06.svg"
                  alt="image description"
                  width="60"
                  height="55"
                />
              </div>
              <div class="txtHolder">
                <h5 class="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  Talented Workers
                </h5>
                <p>
                  Because sometimes you don’t just have the need for a clean
                  car. You have a deeper for speed.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-flex">
            <div class="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div class="icoHolder mr-4 mt-1">
                <Icon icon="majesticons:list-box-line" fontSize={50} color="#0b4b8a"></Icon>
              </div>
              <div class="txtHolder">
                <h5 class="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  Estimations
                </h5>
                <p>
                  We offer you the most accurate & fair car wash price estimates
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-flex">
            <div class="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div class="icoHolder mr-4 mt-1">
                <Icon icon="majesticons:thumb-up-line" fontSize={50} color="#0b4b8a"></Icon>
              </div>
              <div class="txtHolder">
                <h5 class="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  Trust
                </h5>
                <p>
                  Reliable team, which is certified for high-quality
                  performance.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-flex">
            <div class="cBlock d-flex text-secondary mb-6 mb-md-9 mb-xl-13">
              <div class="icoHolder mr-4 mt-1">
                <Icon icon="majesticons:timer-line" fontSize={50} color="#0b4b8a"></Icon>
              </div>
              <div class="txtHolder">
                <h5 class="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">
                  Warranties
                </h5>
                <p>Clean, polish, and wax anywhere, anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
