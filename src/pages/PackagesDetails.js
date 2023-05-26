import React from "react";
import { Icon } from "@iconify/react";
import Banner from "../components/Service/PackagesDetails/CarWashBanner";

const PackagesDetails = () => {
    const [show, setShow] = React.useState(false);

  return (
    <>

<Banner setShow={setShow} />
      <section class="serviceDetail py-10 py-sm-12 py-md-14 pt-lg-16 pb-lg-16 pb-xl-20">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
              <div class="header text-center ltrSpce font-weight-light mb-4 px-lg-5 px-xl-10">
                <h1 class="headingI text-capitalize mb-3 fwEbold">
                  full service car wash
                </h1>
                {/* <p>
                  A car wash is great. But add windows, dusting and a vacuum,
                  and you’ll feel great on the inside too.
                </p> */}
              </div>
            </div>
            {/* <div class="col-12">
              <div class="imgWRoundWrap mb-12 mb-md-18 mt-md-n2">
                <span class="icoRound rounded-circle mx-auto d-flex align-items-center justify-content-center overflow-hidden position-relative">
                    <Icon icon="grommet-icons:car" fontSize={50} color="#fff"></Icon>
                </span>
                <hr class="bdrIcnLine m-0" />
              </div>
            </div> */}
            <div class="col-12 col-xl-10 offset-xl-1">
              <div class="txtHolder text-center px-lg-3 px-xl-10 text-sm-left mb-7 mb-md-10 mb-lg-12 mb-xl-15">
                <p>
                  An Express Wash is a more traditional car wash. Our tunnels
                  are equipped with the industry’s latest car wash equipment and
                  use only the finest soaps and wax available. Each car is
                  washed with soft-cloth, neo-glide foam or lammswool cloth.
                </p>
                <p>
                  Our Full Service Washes will either require the customer to
                  stay in his or her vehicle or exit the vehicle while it is run
                  through the tunnel. This process takes 15 minutes or less.
                </p>
                <a href="javascript:void(0);" class="fwSemibold">
                  See Your Location for Service!
                </a>
              </div>
            </div>
            <div class="col-12">
              <div class="row mb-md-3">
                <div class="col-12 col-lg-6">
                  <article class="planFullList mb-6 mb-sm-8 overflow-hidden rounded">
                    <header class="priceHeader p-3 py-md-4 text-capitalize">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <h2 class="ml-md-3 mb-0 headingIX">Ultimate Wash</h2>
                        </div>
                        <div class="col-4 text-right">
                          <h3 class="headingIX fwSemibold mb-0">$50.99</h3>
                        </div>
                      </div>
                    </header>
                    <div class="txtWrap px-3 px-md-6 pt-5 pb-7">
                      <strong class="d-block font-weight-normal mb-4">
                        Clean, Shine & Protect PLUS
                      </strong>
                      <ul class="list-unstyled checkList text-secondary text-left mb-n2">
                        <li class="position-relative pl-0">
                          <Icon icon="grommet-icons:checkmark" fontSize={18} color="#0b4b8a" className="mr-2"></Icon>
                          Exterior Wash & Towel Dry
                        </li>
                        <li class="position-relative pl-0">
                          <Icon icon="grommet-icons:checkmark" fontSize={18} color="#0b4b8a" className="mr-2"></Icon>
                          Double Liquid Polish
                        </li>
                        <li class="position-relative pl-0">
                          <Icon icon="grommet-icons:checkmark" fontSize={18} color="#0b4b8a" className="mr-2"></Icon>
                          Clear Coat Shield | Carnauba Wax
                        </li>
                        <li class="position-relative pl-0">
                          <Icon icon="grommet-icons:checkmark" fontSize={18} color="#0b4b8a" className="mr-2"></Icon>
                          Armour All Tire Shine
                        </li>
                        <li class="position-relative pl-0">
                          <Icon icon="grommet-icons:checkmark" fontSize={18} color="#0b4b8a" className="mr-2"></Icon>
                          Interior Windows, Dusting, & Vacuum
                        </li>
                        <li class="position-relative pl-0">
                          <Icon icon="grommet-icons:checkmark" fontSize={18} color="#0b4b8a" className="mr-2"></Icon>
                          Meguiars Spray Wax or RainX
                        </li>
                      </ul>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-warning mt-5 fwSemibold rounded py-4 px-2"
                      >
                        Enquiry Now
                      </a>
                    </div>
                  </article>
                </div>
                <div class="col-12 col-lg-6">
                  <article class="planFullList mb-6 mb-sm-8 overflow-hidden rounded">
                    <header class="priceHeader p-3 py-md-4 text-capitalize">
                      <div class="row align-items-center">
                        <div class="col-8">
                          <h2 class="ml-md-3 mb-0 headingIX">
                            Super Protection
                          </h2>
                        </div>
                        <div class="col-4 text-right">
                          <h3 class="headingIX fwSemibold mb-0">$30.99</h3>
                        </div>
                      </div>
                    </header>
                    <div class="txtWrap px-3 px-md-6 pt-5 pb-7">
                      <strong class="d-block font-weight-normal mb-4">
                        Clean & Protect PLUS
                      </strong>
                      <ul class="list-unstyled checkList text-secondary text-left mb-n2">
                        <li class="position-relative pl-0">
                          <Icon icon="grommet-icons:checkmark" fontSize={18} color="#0b4b8a" className="mr-2"></Icon>
                          Clean inside windows
                        </li>
                        <li class="position-relative pl-0">
                          <Icon icon="grommet-icons:checkmark" fontSize={18} color="#0b4b8a" className="mr-2"></Icon>
                          Full-service soft-cloth wash
                        </li>
                        <li class="position-relative pl-0">
                          <Icon icon="grommet-icons:checkmark" fontSize={18} color="#0b4b8a" className="mr-2"></Icon>
                          Clear Coat Shield | Carnauba Wax
                        </li>
                        <li class="position-relative pl-0">
                          <Icon icon="grommet-icons:checkmark" fontSize={18} color="#0b4b8a" className="mr-2"></Icon>
                          Armour All Tire Shine
                        </li>
                        <li class="position-relative pl-0">
                          <Icon icon="grommet-icons:checkmark" fontSize={18} color="#0b4b8a" className="mr-2"></Icon>
                          Interior Windows, Dusting, & Vacuum
                        </li>
                      </ul>
                       <a
                        href="javascript:void(0);"
                        class="btn btn-warning mt-5 fwSemibold rounded py-4 px-2"
                      >
                        Enquiry Now
                      </a>
                    </div>
                  </article>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 text-center">
                  <div class="servicetxtDetail px-xl-5">
                    <p>
                      *All services and prices vary by location and vehicle
                      condition. Quote provided prior to services. Call for more
                      details or to schedule an appointment.
                    </p>
                    <div class="btnHolder mt-lg-5 mt-xl-8">
                      {/* <a
                        href="javascript:void(0);"
                        class="btn btnTheme fwEbold text-uppercase"
                      >
                        <span class="far fa-calendar-check mr-1 mr-lg-2"></span>
                        Enquiry Now
                      </a> */}
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

export default PackagesDetails;
