import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Icon } from "@iconify/react";
import { getAnalytics, logEvent } from "firebase/analytics";
import api from "../constant/api";
import Input from "react-phone-number-input/input";
import message from "../constant/Message";
import { ToastContainer } from "react-toastify";
import moment from "moment/moment";

const Contact = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState();

  const [values, setValues] = React.useState({
    wc_name: "",
    wc_phone: "",
    wc_email: "",
    wc_subject: "",
    wc_message: "",
    wc_date_time: "",
  });
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const analytics = getAnalytics();
  const submitContact = () => {
    if (value == "" || value.length != 11) {
      message("Please Enter Valid Phone Number", "warning");
    } else {
      if (values.name == "") {
        message("Please Enter Valid Name", "warning");
      } else {
        values.wc_phone = value;
        values.wc_date_time = moment().format("DD-MM-YYYY, h:mm:ss a");
        api
          .post("/website/addContactEnquiry", values)
          .then((res) => {
            if (res.status == 200) {
              if (res.data.msg == "Success") {
                message(
                  "Thanks For Contacting Us. Our 24*7 support will reach you soon",
                  "success"
                );
              } else {
                message("Try Again Later", "error");
              }
            }
          })
          .catch((err) => {
            message("Please Check your internet Connection", "error");
          });
      }
    }
  };

  const handleInputs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div id="pageWrapper">
        <ToastContainer></ToastContainer>
        <main>
          <section className="abtWSec pt-sm-12 pt-md-16 pb-6 pb-sm-4 pb-md-8 pb-lg-0 pb-xl-6">
            <div className="container">
              <div className="row">
                <div className="col-12 col-xl-10 offset-xl-1">
                  <div className="header ltrSpce text-center mb-6 mb-md-8 mb-lg-12 mb-xl-14">
                    <h3 className="headingI fwEbold h3 text-capitalize mb-2 mb-md-3 mb-lg-4">
                      {/* h3 fwEbold mb-2  */}
                      {t("contact-us")}
                    </h3>
                    <p>
                      {i18next.language == "ar"
                        ? "يمكنك التواصل معنا عبر العناوين والأرقام الموضحة أدناه، أو عن طريق إرسال رسالة"
                        : "You can communicate with us comfortably with the following information or send a message"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row flex-row-reverse">
                <div className="col-12 col-md-8 mb-6 mb-md-0">
                  <form className="contactForm pl-xl-4">
                    <div className="formRoW d-flex flex-Wrap">
                      <div className="formCol form-group">
                        <label className="text-capitalize" for="contactName">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contactName"
                          name="wc_name"
                          onChange={handleInputs}
                        />
                      </div>
                      <div className="formCol form-group">
                        <label className="text-capitalize" for="contactPhone">
                          phone number
                        </label>

                        <Input
                          className="form-control"
                          country="AE"
                          international
                          withCountryCallingCode
                          placeholder="Enter phone number"
                          value={value}
                          onChange={setValue}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="text-capitalize"
                        for="contactEmailAddress"
                      >
                        {i18next.language == "ar"
                          ? "عنوان البريد الإلكتروني "
                          : "email address"}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactEmailAddress"
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-capitalize" for="contactSubject">
                        subject
                      </label>
                      <select
                        name="wc_subject"
                        onChange={handleInputs}
                        className="custom-select"
                        id="contactSubject"
                      >
                        <option>Reason for contact</option>
                        <option value="On Site Car Service">
                          On Site Car Service
                        </option>
                        <option value="WorkStation Service">
                          WorkStation Service
                        </option>
                        <option value="Support">Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="text-capitalize" for="contactMessage">
                        {i18next.language == "ar" ? "الرسالة" : "message"}
                      </label>
                      <textarea
                        onChange={handleInputs}
                        name="wc_message"
                        className="form-control"
                        id="contactMessage"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-warning text-uppercase fwEbold"
                        onClick={() => {
                          submitContact();
                          logEvent(analytics, "select_content");
                        }}
                      >
                        {i18next.language == "ar"
                          ? "إرسال الرسالة "
                          : "send message"}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-md-4 alignRight">
                  <ul className="contSideList list-unstyled mb-8 mb-lg-11 pt-md-1">
                    <li className="d-flex">
                      <div className="ico mr-2 mr-lg-3 mt-1">
                        <Icon
                          icon="solar:phone-outline"
                          color="#0b4b8a"
                          fontSize={50}
                        />
                      </div>
                      <ul className="list-unstyled mb-0 wrap text-capitalize fwSemibold">
                        <li className="mb-lg-2">
                          {i18next.language == "ar"
                            ? "اتصل بنا في أي وقت"
                            : "Call us anytime:"}{" "}
                        </li>
                        <li>
                          <a
                            style={{ color: "#0b4b8a" }}
                            href="tel:025555292"
                            className="tell"
                          >
                            +971-502-000-787
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="d-flex">
                      <div className="ico mr-2 mr-lg-3 mt-1">
                        <Icon
                          icon="bytesize:location"
                          color="#0b4b8a"
                          fontSize={50}
                        />
                      </div>
                      <div className="addressWrap">
                        <h2 className="headingXI text-capitalize fwSemibold mb-2">
                          {i18next.language == "ar" ? "العنوان" : "address"}
                        </h2>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-1">
                            {i18next.language == "ar"
                              ? "مصفح M14 محل 3 و 4 - أبو ظبي"
                              : "Mussafah M14 SHOP 3 AND 4 - Abu Dhabi"}{" "}
                          </li>
                          <li>
                            {i18next.language == "ar"
                              ? "- الإمارات العربية المتحدة"
                              : "- United Arab Emirates"}{" "}
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="d-flex mb-md-0">
                      <div className="ico mr-2 mr-lg-3 mt-1">
                        <Icon
                          icon="ion:time-outline"
                          color="#0b4b8a"
                          fontSize={50}
                        />
                      </div>
                      <div className="tmeWrap">
                        <h2 className="headingXI text-capitalize fwSemibold mb-2">
                          {i18next.language == "ar"
                            ? "ساعات عملنا"
                            : "working hours:"}
                        </h2>
                        <ul className="list-unstyled tmeList mb-0">
                          <li className="mb-1">
                            {i18next.language == "ar"
                              ? "من الإثنين إلى السبت: 6:00 صباحًا - 3:00 ظهراً"
                              : "Mon-Sat: 6:00 am - 3:00 am"}
                          </li>
                          <li>
                            {i18next.language == "ar"
                              ? " الأحد: 6:00 صباحاً - 3:00 ظهراً"
                              : "Sun: 6:00 am - 3:00 am"}
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <h3 className="headingIX mb-3">
                    {i18next.language == "ar"
                      ? "لديك سؤال؟"
                      : "Have any questions?"}
                  </h3>
                  <ul className="list-unstyled MailList mb-7">
                    <li className="mb-1">
                      <a href="mailto:info@blueteamuae.com">
                        info@blueteamuae.com
                      </a>
                    </li>
                  </ul>
                  {/* <ul className="socialSNetwork list-unstyled d-flex mb-0">
								<li><a href="javascript:void(0);" className="fab fa-facebook-square"></a></li>
								<li><a href="javascript:void(0);" className="fab fa-twitter-square"></a></li>
								<li><a href="javascript:void(0);" className="fab fa-linkedin"></a></li>
								<li><a href="javascript:void(0);" className="fas fa-rss-square"></a></li>
							</ul> */}
                </div>
              </div>
            </div>
          </section>
          <aside className="mapHolder w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0387173266186!2d54.49938290000001!3d24.3799565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40f233f0f737%3A0x398170c0c7c45436!2sBlueteam%20Car%20Services!5e0!3m2!1sen!2sin!4v1682677171522!5m2!1sen!2sin"
              height="480"
              // style="border:0"
              allowFullScreen
            ></iframe>
          </aside>
        </main>
      </div>
    </>
  );
};

export default Contact;
