import React from "react";
import ChatBot from "react-simple-chatbot";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Footer = () => {

  const { t } = useTranslation();

  const config = {
    width: "700px",
    height: "700px",
    floating: "True",
    // floatingIcon:<BsWhatsapp color='#fff' size={25}/>,
  };

  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
  ];

  return (
    <>
      <aside
        className="footerAside position-relative text-white bgCover"
        // style={{ backgroundImage: `url(images/img10.jpg)` }}
      >
        <div className="contactHolder pt-6 pb-3 py-md-6">
          <div className="container">
            <address className="mb-0">
              <ul className="contList list-unstyled mb-0 d-flex flex-wrap justify-content-center">
                <li className="d-flex align-items-center mb-md-0">
                  <div className="ico mr-1">
                    <img
                      src="images/ico16.svg"
                      alt="images description"
                      width="25"
                      height="39"
                      className="img-fluid contact-icon"
                    />
                  </div>
                  <ul className="list-unstyled mb-0 wrap">
                    <li className="mb-lg-1">{i18next.language == "ar" ? 'اتصل بنا الآن' : 'Call us now:' }</li>
                    <li>
                      <a href="tel:+971-502-000-787" className="tell">
                        +971-502-000-787
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="d-flex align-items-center mb-md-0">
                  <div className="ico mr-1">
                    <img
                      src="images/ico17.svg"
                      alt="images description"
                      width="25"
                      height="36"
                      className="img-fluid contact-icon"
                    />
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-lg-1">{i18next.language == "ar" ? 'راسلنا عبر البريد الإلكتروني ' : 'Email us now:' }</li>
                    <li>
                      <a href="mailto:info@blueteamuae.com" className="mail">
                        info@blueteamuae.com
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="d-flex align-items-center mb-md-0">
                  <div className="ico mr-2">
                    <img
                      src="images/ico18.svg"
                      alt="images description"
                      width="39"
                      height="39"
                      className="img-fluid contact-icon"
                    />
                  </div>
                  <ul className="list-unstyled mb-0 ftimeList">
                    <li className="mb-lg-1">{i18next.language == "ar" ? 'ساعات عملنا' : 'Our Hours' }</li>
                    <li>{i18next.language == "ar" ? '6 صباحا - 3 فجراً' : '6:00 am - 3:00 am'}
                    </li>
                  </ul>
                </li>
              </ul>
            </address>
          </div>
        </div>
        <div className="container pt-10 pb-8 pt-lg-13 pb-lg-16">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3 d-md-flex mb-8 mb-sm-4 mb-lg-0">
              <div className="txtHolder w-100">
                <h6 className="h6 text-capitalize fwEbold mb-4 mb-sm-5 mb-lg-6">
                  {t("AboutHeading")}
                </h6>
                <p className="text-dark"> {t("About_footer")} </p>
                <a
                  href="#/aboutus"
                  className="btn btn-outline-dark text-uppercase fwEbold py-lg-3 text-dark"
                >
                  {i18next.language == "ar" ? 'المزيد' : 'about more' }
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 d-md-flex mb-8 mb-sm-4 mb-lg-0">
              <div className="w-100">
                <h6 className="h6 text-capitalize fwEbold mb-4 mb-lg-6">
                  {i18next.language == "ar" ? 'المواقع' : 'Location pages' }
                </h6>
                <ul className="fLink list-unstyled text-capitalize">
                  <li>
                      <NavLink to="/aboutus" className="text-dark">
                        {t("AboutHeading")} 
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/services" className="text-dark">
                        {t("Services")}
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/membership" className="text-dark">
                        {t("Membership-Cards")} 
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/faq" className="text-dark">
                        {t("faq")} 
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/contactus" className="text-dark">
                       {t("contact-us")}
                      </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 d-md-flex mb-8 mb-sm-4 mb-lg-0">
              <div className="w-100">
                <h6 className="h6 text-capitalize fwEbold mb-4 mb-lg-6">
                {i18next.language == "ar" ? 'خدماتنا' : 'Our Services'}
                </h6>
                <ul className="fLink list-unstyled text-capitalize">
                  <ul className="fLink list-unstyled text-capitalize">
                    <li>
                      <a href="#" className="text-dark">{i18next.language == "ar" ? 'غسيل السيارة' : 'Car Wash' }</a>
                    </li>
                    <li>
                      <a href="#" className="text-dark">{i18next.language == "ar" ? 'صيانة السيارة' : 'Car Detailing' }</a>
                    </li>
                    <li>
                      <a href="#" className="text-dark">{i18next.language == "ar" ? 'المرآب ' : 'Car Garage' }</a>
                    </li>
                    <li>
                      <a href="#" className="text-dark">{i18next.language == "ar" ? 'غسيل الدراجة' : 'Bike Wash' }</a>
                    </li>
                    <li>
                      <a href="#" className="text-dark">{i18next.language == "ar" ? 'غسيل القارب' : 'Boat Wash' }</a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 d-md-flex mb-sm-4 mb-lg-0">
              <div className="wrapHolder w-100">
                <h6 className="h6 text-capitalize fwEbold mb-4 mb-lg-6">
                {i18next.language == "ar" ? 'النشرة الإخبارية ' : 'Newsletter'}
                </h6>
                <p className="text-dark">
                {i18next.language == "ar" ? 'قم بالتسجيل لمعرفة المزيد عن عروضنا الخاصة ، وبطاقات العضوية، وأخبارنا' : 'Signup today for know about specials offers, coupons &amp; news.' }
                  
                </p>
                <form className="emailForm1 mb-6">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control px-4"
                      placeholder={i18next.language == "ar" ? 'عنوان البريد الإلكتروني ' : "Email Address"}
                    />
                    <div className="input-group-prepend mr-0">
                      <button
                        type="submit"
                        className="btn btnTheme rounded-right fas fa-paper-plane"
                      ></button>
                    </div>
                  </div>
                </form>
                <ul className="socialFNetwork d-flex mb-0 pt-4 list-unstyled bdrTop justify-content-center justify-content-sm-start">
                  <li>
                    <a
                      href="https://www.facebook.com/Blueteamcarservices/"
                      target="_blank"
                      className="fab fa-facebook-square"
                    ></a>
                  </li>
                  {/* <li><a href="javascript:void(0);" className="fab fa-twitter-square"></a></li>
									<li><a href="javascript:void(0);" className="fab fa-linkedin"></a></li> */}
                  <li>
                    <a
                      href="https://www.instagram.com/blueteam.ae/?hl=en"
                      target="_blank"
                      className="fab fa-instagram"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <footer id="footer" className="py-5 py-md-6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <span className="txt d-block text-center text-md-left mb-4 mb-md-0">
                ©2023 <a href="homepage.html">Blue Team.</a>{i18next.language == "ar" ? 'جميع الحقوق محفوظة ' : "All Rights Reserved"}
              </span>
            </div>
            <div className="col-12 col-md-6">
              <ul className="list-unstyled footerLink d-flex mb-0 justify-content-center justify-content-md-end flex-wrap">
                <li>
                  <a href="/#/terms-condition">{t("TermsCondition")}</a>
                </li>
                <li>
                  <a href="/#/privacy-policy">{t("Privacy-Policy")}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="stickyChat">
          <ChatBot steps={steps} {...config} />
        </div>
        <div className="stickyPhone">
          <a href="tel:+971 800 2827">
            <img
              src="images/whatsapp.svg"
              alt="images description"
              width="80"
              className="img-fluid"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
