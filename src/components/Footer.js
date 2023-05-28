import React from "react";
import ChatBot from "react-simple-chatbot";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Icon } from "@iconify/react";
import { getAnalytics, logEvent } from "firebase/analytics";
import api from "../constant/api";
import message from "../constant/Message";

const Footer = () => {
  const { t } = useTranslation();
  const analytics = getAnalytics();

  const config = {
    floating: "True",
  };
  const handleEnd = ({ steps, values }) => {
    api
      .post("/website/addBookingEnquiry", {
        we_category: values[0],
        we_package: values[1],
        we_date: "",
        we_time: "",
        we_name: values[2],
        we_phone: values[3],
        we_email: "",
        we_status: "0",
        we_done_by: "",
        we_amount: "",
        we_type: "",
      })
      .then((res) => {
        if (res.status == 200) {
          message(
            "Thanks For Contacting Us. Our 24*7 support will reach you soon",
            "success"
          );
          setTimeout(() => {
            window.location.reload();
          }, 600);
        } else {
          message("Try Again Later", "warning");
        }
      })
      .catch((err) => {
        message("Please Check your internet Connection", "error");
      });
    console.log(steps);
    console.log(values);
  };
  const [botSteps, setBotSteps] = React.useState([
    {
      id: "1",
      message: "Hello! What kind of service you need?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: "غسيل سيارات", label: "غسيل سيارات", trigger: "3" },
        { value: "تلميع ومخفي", label: "تلميع ومخفي", trigger: "4" },
        { value: "صيانة السيارات", label: "صيانة السيارات", trigger: "5" },
        // { value: 4, label: "غسيل الدراجة", trigger: "6" },
        // { value: 5, label: "غسل القارب", trigger: "7" },
      ],
    },
    {
      id: "3",
      options: [
        { value: "لباقة الفضية ", label: "لباقة الفضية ", trigger: "7" },
        { value: "الباقة الذهبية", label: "الباقة الذهبية", trigger: "7" },
        { value: "الباقة الماسية", label: "الباقة الماسية", trigger: "7" },
        {
          value: "الباقة الخاصة ( بريميوم )",
          label: "الباقة الخاصة ( بريميوم )",
          trigger: "7",
        },
      ],
    },
    {
      id: "4",
      options: [
        { value: "مخفي ضمان  ", label: "مخفي ضمان  ", trigger: "7" },

        { value: "زيرو زيرو ضمان  ", label: "زيرو زيرو ضمان  ", trigger: "7" },
        {
          value: "مخفي زيرو زيرو ضمان  ",
          label: "مخفي زيرو زيرو ضمان  ",
          trigger: "7",
        },
        {
          value: "زيرو زيرو 5 سنوات كامل",
          label: "زيرو زيرو 5 سنوات كامل",
          trigger: "7",
        },
        {
          value: "زيرو زيرو 10 سنوات كامل",
          label: "زيرو زيرو 10 سنوات كامل",
          trigger: "7",
        },
        {
          value: "جلاد حماية الأضواء",
          label: "جلاد حماية الأضواء",
          trigger: "7",
        },
        {
          value: "جلاد شفاف (MATE ppf)",
          label: "جلاد شفاف (MATE ppf)",
          trigger: "",
        },
        {
          value: "جلاد شفاف(ppf)لحماية الصبغ",
          label: "جلاد شفاف(ppf)لحماية الصبغ",
          trigger: "",
        },
      ],
    },
    {
      id: "5",
      options: [
        {
          value: "تبديل مساحات الزجاج ",
          label: "تبديل مساحات الزجاج ",
          trigger: "7",
        },
        {
          value: "الصيانة الشاملة للمركبة ( ميجر سرفيس",
          label: "الصيانة الشاملة للمركبة ( ميجر سرفيس",
          trigger: "7",
        },
        {
          value: "فحص المركبة بالكمبيوتر  ",
          label: "فحص المركبة بالكمبيوتر  ",
          trigger: "7",
        },
        {
          value: "شحن البطارية وفحص السبب ",
          label: "شحن البطارية وفحص السبب ",
          trigger: "7",
        },
        {
          value: "تبديل بطانة الفرامل ",
          label: "تبديل بطانة الفرامل ",
          trigger: "7",
        },
        { value: "تبديل الإطارات ", label: "تبديل الإطارات ", trigger: "7" },
        {
          value: "تعبئة غاز المكيف ",
          label: "تعبئة غاز المكيف ",
          trigger: "7",
        },
        {
          value: "الصيانة الدورية للمركبة ",
          label: "الصيانة الدورية للمركبة ",
          trigger: "7",
        },
        {
          value: "تبديل بطارية السيارة ",
          label: "تبديل بطارية السيارة ",
          trigger: "7",
        },
        {
          value: "تبديل زيت المحرك  ",
          label: "تبديل زيت المحرك  ",
          trigger: "7",
        },
      ],
    },
    {
      id: "7",
      message: "What is your name?",
      trigger: "8",
    },
    {
      id: "8",
      user: true,
      trigger: "9",
    },
    {
      id: "9",
      message: "{previousValue} we need mobile number to contact you",
      trigger: "10",
    },
    {
      id: "10",
      user: true,
      trigger: "11",
    },
    {
      id: "11",
      message: "Thanks for contacting. Our 24*7 service will reach out soon",
      end: true,
    },
  ]);

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
                    <Icon
                      icon="solar:phone-outline"
                      color="#fff"
                      fontSize={50}
                    />
                  </div>
                  <ul className="list-unstyled mb-0 wrap">
                    <li className="mb-lg-1">
                      {i18next.language == "ar"
                        ? "اتصل بنا الآن"
                        : "Call us now:"}
                    </li>
                    <li>
                      <a href="tel:025555292" className="tell">
                        025-555-292
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="d-flex align-items-center mb-md-0">
                  <div className="ico mr-1">
                    <Icon icon="bytesize:location" color="#fff" fontSize={50} />
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-lg-1">
                      {i18next.language == "ar"
                        ? "راسلنا عبر البريد الإلكتروني "
                        : "Email us now:"}
                    </li>
                    <li>
                      <a href="mailto:info@blueteamuae.com" className="mail">
                        info@blueteamuae.com
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="d-flex align-items-center mb-md-0">
                  <div className="ico mr-2">
                    <Icon icon="ion:time-outline" color="#fff" fontSize={50} />
                  </div>
                  <ul className="list-unstyled mb-0 ftimeList">
                    <li className="mb-lg-1">
                      {i18next.language == "ar" ? "ساعات عملنا" : "Our Hours"}
                    </li>
                    <li>
                      {i18next.language == "ar"
                        ? "6 صباحا - 3 فجراً"
                        : "6:00 am - 3:00 am"}
                    </li>
                  </ul>
                </li>
              </ul>
            </address>
          </div>
        </div>
        <div className="container pt-10 pt-lg-13">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3 d-md-flex mb-8 mb-sm-4 mb-lg-0 text-center-mobile">
              <div className="txtHolder w-100">
                <h6 className="h6 text-capitalize fwEbold mb-4 mb-sm-5 mb-lg-6">
                  {t("AboutHeading")}
                </h6>
                <p className="text-dark"> {t("About_footer")} </p>
                <ul className="socialFNetwork d-flex mb-0 pt-4 list-unstyled bdrTop justify-content-center justify-content-sm-start">
                  <li>
                    <a
                      href="https://www.facebook.com/Blueteamcarservices/"
                      target="_blank"
                      className="fab fa-facebook-square"
                    ></a>
                  </li>
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
            <div className="col-12 col-sm-6 col-lg-2 d-md-flex mb-8 mb-sm-4 mb-lg-0 text-center-mobile">
              <div className="w-100">
                <h6 className="h6 text-capitalize fwEbold mb-4 mb-lg-6">
                  {i18next.language == "ar" ? "المواقع" : "Location pages"}
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
            <div className="col-12 col-sm-6 col-lg-3 d-md-flex mb-8 mb-sm-4 mb-lg-0 text-center-mobile">
              <div className="w-100">
                <h6 className="h6 text-capitalize fwEbold mb-4 mb-lg-6">
                  {i18next.language == "ar" ? "خدماتنا" : "Our Services"}
                </h6>
                <ul className="fLink list-unstyled text-capitalize">
                  <ul className="fLink list-unstyled text-capitalize">
                    <li>
                      <a href="#" className="text-dark">
                        {i18next.language == "ar" ? "غسيل السيارة" : "Car Wash"}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark">
                        {i18next.language == "ar"
                          ? "صيانة السيارة"
                          : "Car Detailing"}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark">
                        {i18next.language == "ar" ? "المرآب " : "Car Garage"}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark">
                        {i18next.language == "ar"
                          ? "غسيل الدراجة"
                          : "Bike Wash"}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark">
                        {i18next.language == "ar" ? "غسيل القارب" : "Boat Wash"}
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 d-md-flex mb-sm-4 mb-lg-0 text-center-mobile">
              <div className="txtHolder w-100">
                <h6 className="h6 text-capitalize fwEbold mb-4 mb-lg-6">
                  contact info
                </h6>
                <address className="mb-0">
                  <ul className="contList2 list-unstyled mb-0 justify-content-center">
                    <li className="d-flex mb-6">
                      <div className="ico pr-3 flex-shrink-0 d-flex align-items-center">
                        <Icon
                          icon="solar:phone-outline"
                          color="#0b4b8a"
                          fontSize={30}
                        />
                      </div>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1 text-dark">
                        {i18next.language == "ar"
                            ? "اتصل بنا في أي وقت"
                            : "Call us anytime:"}{" "}
                        </li>
                        <li >
                        <a href="tel:025-555-292" className="text-dark">
                          025-555-292
                        </a>
                        </li> 
                      </ul>
                     
                    </li>
                    <li className="d-flex mb-6">
                      <div className="ico pr-3 flex-shrink-0 d-flex align-items-center">
                        <Icon
                          icon="bytesize:location"
                          color="#0b4b8a"
                          fontSize={30}
                        />
                      </div>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1 text-dark">
                          {i18next.language == "ar"
                            ? "مصفح M14 محل 3 و 4 - أبو ظبي"
                            : "Mussafah M14 SHOP 3 AND 4 - Abu Dhabi"}{" "}
                        </li>
                        <li className="text-dark">
                          {i18next.language == "ar"
                            ? "- الإمارات العربية المتحدة"
                            : "- United Arab Emirates"}{" "}
                        </li>
                      </ul>
                    </li>
                    <li className="d-flex mb-6">
                      <div className="ico pr-3 flex-shrink-0 d-flex align-items-center">
                        <Icon
                          icon="ion:time-outline"
                          color="#0b4b8a"
                          fontSize={30}
                        />
                      </div>
                      <ul className="list-unstyled mb-0 ftimeList">
                        <li className="mb-1 text-dark">
                          {i18next.language == "ar"
                            ? "من الإثنين إلى السبت: 6:00 صباحًا - 3:00 ظهراً"
                            : "Mon-Sat: 6:00 am - 3:00 am"}
                        </li>
                        <li className="text-dark">
                          {i18next.language == "ar"
                            ? " الأحد: 6:00 صباحاً - 3:00 ظهراً"
                            : "Sun: 6:00 am - 3:00 am"}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </address>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <footer
        style={{ border: "1px solid #d7cece" }}
        id="footer"
        className="py-5 py-md-6"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <span className="txt d-block text-center text-md-left mb-4 mb-md-0">
                ©2023 <a href="homepage.html">Blue Team.</a>
                {i18next.language == "ar"
                  ? "جميع الحقوق محفوظة "
                  : "All Rights Reserved"}
              </span>
            </div>
            <div className="col-12 col-md-6">
              <ul className="list-unstyled footerLink d-flex mb-0 justify-content-center justify-content-md-end flex-wrap">
                <li>
                  <a href="/terms-condition">{t("TermsCondition")}</a>
                </li>
                <li>
                  <a href="/privacy-policy">{t("Privacy-Policy")}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="stickyChat"
          onClick={() => {
            logEvent(analytics, "chatbot_footer");
          }}
        >
          <ChatBot handleEnd={handleEnd} steps={botSteps} {...config} />
        </div>
        <div
          className="stickyPhone"
          onClick={() => {
            logEvent(analytics, "whatsapp_footer_button");
          }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=971502000787"
            target="_blank"
          >
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
};

export default Footer;
