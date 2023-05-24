import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Icon } from "@iconify/react";
import { getAnalytics, logEvent } from "firebase/analytics";

const Contact = () => {
  const { t } = useTranslation();
  const analytics = getAnalytics();
  return (
    <>
      <div id="pageWrapper">
        <main>
          <section class="contactSec py-10 py-sm-12 pb-md-14 pt-lg-14 pb-lg-16 pb-xl-18">
            <div class="container">
              <div class="row">
                <div class="col-12 col-xl-10 offset-xl-1">
                  <header class="header ltrSpce text-center mb-6 mb-md-8 mb-lg-12 mb-xl-14">
                    <h1 class="fwEbold h2 text-capitalize mb-2">
                      {t("contact-us")}
                    </h1>
                    <p>
                      {i18next.language == "ar"
                        ? "يمكنك التواصل معنا عبر العناوين والأرقام الموضحة أدناه، أو عن طريق إرسال رسالة"
                        : "You can communicate with us comfortably with the following information or send a message"}
                    </p>
                  </header>
                </div>
              </div>
              <div class="row flex-row-reverse">
                <div class="col-12 col-md-8 mb-6 mb-md-0">
                  <form class="contactForm pl-xl-4">
                    <div class="formRoW d-flex flex-Wrap">
                      <div class="formCol form-group">
                        <label class="text-capitalize" for="contactName">
                          your Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="contactName"
                        />
                      </div>
                      <div class="formCol form-group">
                        <label class="text-capitalize" for="contactPhone">
                          phone number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="contactPhone"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="text-capitalize" for="contactEmailAddress">
                        {i18next.language == "ar"
                          ? "عنوان البريد الإلكتروني "
                          : "email address"}
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="contactEmailAddress"
                      />
                    </div>
                    <div class="form-group">
                      <label class="text-capitalize" for="contactSubject">
                        subject
                      </label>
                      <select class="custom-select" id="contactSubject">
                        <option>Select one of the reason for contact</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="text-capitalize" for="contactMessage">
                        {i18next.language == "ar" ? "الرسالة" : "message"}
                      </label>
                      <textarea
                        class="form-control"
                        id="contactMessage"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <button
                        type="button"
                        class="btn btn-warning text-uppercase fwEbold"
                        onClick={()=>{
                          logEvent(analytics, 'select_content', {
                            content_type: 'image',
                            content_id: 'P12453',
                            items: [{ name: 'Kittens' }]
                          });
                        }}
                      >
                        {i18next.language == "ar"
                          ? "إرسال الرسالة "
                          : "send message"}
                      </button>
                    </div>
                  </form>
                </div>
                <div class="col-12 col-md-4 alignRight">
                  <ul class="contSideList list-unstyled mb-8 mb-lg-11 pt-md-1">
                    <li class="d-flex">
                      <div class="ico mr-2 mr-lg-3 mt-1">
                        <Icon
                          icon="solar:phone-outline"
                          color="#0b4b8a"
                          fontSize={50}
                        />
                      </div>
                      <ul class="list-unstyled mb-0 wrap text-capitalize fwSemibold">
                        <li class="mb-lg-2">
                          {i18next.language == "ar"
                            ? "اتصل بنا في أي وقت"
                            : "Call us anytime:"}{" "}
                        </li>
                        <li>
                          <a href="tel:025555292" class="tell">
                            +971-502-000-787
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="d-flex">
                      <div class="ico mr-2 mr-lg-3 mt-1">
                        <Icon
                          icon="bytesize:location"
                          color="#0b4b8a"
                          fontSize={50}
                        />
                      </div>
                      <div class="addressWrap">
                        <h2 class="headingXI text-capitalize fwSemibold mb-2">
                          {i18next.language == "ar" ? "العنوان" : "address"}
                        </h2>
                        <ul class="list-unstyled mb-0">
                          <li class="mb-1">
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
                    <li class="d-flex mb-md-0">
                      <div class="ico mr-2 mr-lg-3 mt-1">
                        <Icon
                          icon="ion:time-outline"
                          color="#0b4b8a"
                          fontSize={50}
                        />
                      </div>
                      <div class="tmeWrap">
                        <h2 class="headingXI text-capitalize fwSemibold mb-2">
                          {i18next.language == "ar"
                            ? "ساعات عملنا"
                            : "working hours:"}
                        </h2>
                        <ul class="list-unstyled tmeList mb-0">
                          <li class="mb-1">
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
                  <h3 class="headingIX mb-3">
                    {i18next.language == "ar"
                      ? "لديك سؤال؟"
                      : "Have any questions?"}
                  </h3>
                  <ul class="list-unstyled MailList mb-7">
                    <li class="mb-1">
                      <a href="mailto:info@blueteamuae.com">
                        info@blueteamuae.com
                      </a>
                    </li>
                  </ul>
                  {/* <ul class="socialSNetwork list-unstyled d-flex mb-0">
								<li><a href="javascript:void(0);" class="fab fa-facebook-square"></a></li>
								<li><a href="javascript:void(0);" class="fab fa-twitter-square"></a></li>
								<li><a href="javascript:void(0);" class="fab fa-linkedin"></a></li>
								<li><a href="javascript:void(0);" class="fas fa-rss-square"></a></li>
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
