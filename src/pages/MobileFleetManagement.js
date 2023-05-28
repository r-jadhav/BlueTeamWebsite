import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import i18next from "i18next";

const MobileFleetManagement = () => {
    React.useEffect(() => {
        AOS.init();
        window.scroll(0, 0);
      }, []);
  return (
    <>
      <section className="abtWSec pt-sm-12 pt-md-16 pb-6 pb-sm-4 pb-md-8 pb-lg-0 pb-xl-6">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header text-center ltrSpce mb-8 mb-sm-10 mb-xl-15">
                <h3 className="headingI h3 fwEbold mb-2 mb-md-3 mb-lg-4">
                  {i18next.language == "ar" ? "خدمات الأسطول المتنقلة " : "Mobile fleet management"}
                </h3>
              </div>
            </div>
          </div>
          <div
            className="row mb-2 mb-sm-4 mb-lg-10"
            style={{ alignItems: "center" }}
          >
            <div className="col-12 col-lg-6">
            <span className="d-block imgHolder mb-4 mb-sm-6 mb-lg-0 rounded overflow-hidden w-100">
                <img
                  src="images/main-pic.png"
                  alt="img08"
                  className="img-fluid"
                  data-aos="fade-left"
                />
              </span>
            </div>
            <div className="col-12 col-lg-6">
              <div className="txtHolder mt-lg-n1 pl-lg-5">
                <h2 className="fwSemibold fIStyle headingVIII mb-3 mb-sm-4">
                    {i18next.language == "ar" ? "برنامج خدمات الأسطول المتنقلة " : "Mobile fleet management program"}
                </h2>
                <p>{i18next.language == "ar" ? "حافظ على مظهر أسطول سياراتك على الطريق." : "Have the best-looking car fleet on the road!"}</p>
                <p>{i18next.language == "ar" ? " إن مظهر سيارتك يعبر عنك بشكل او بآخر، استمتع بمظهر لائق ونظافة رائعة لأسطول شركتك من خلال برنامج خدمات أسطول الشركة.  نقدم عروض وخصومات رائعة للوكلاء والشركات ذات المركبات المتعددة، تواصل معنا لتبقي أسطول سياراتك نظيفاً بأسعار ملائمة. " : "A clean car tells a lot about you, maintain a decent professional look for your company's fleet of vehicles through our Corporate fleet program. Dealerships and companies with multiple vehicles et great offers and discounts. Thus, you can keep your fleet clean with proper prices."}</p>
              </div>
            </div>
          </div>
          <div
            className="row mb-2 mb-sm-4 mb-lg-10"
            style={{ alignItems: "center" }}
          >
            <div className="col-12">
                <h2 className="fwSemibold fIStyle headingVIII mb-3 mb-sm-4">
                    {i18next.language == "ar" ? "ماذا نفعل؟ " : "What we do"}
                </h2>
                <p>{i18next.language == "en" ? "We deliver our services whenever you need them! Just call us." : "نصل إليك لنقدم خدماتنا في الوقت الذي يناسبك"}</p>
                <p>{i18next.language == "en" ? "Our cleaning services vary from exterior washes to interior deep cleaning. Moreover, our team of experienced cleaning technicians is trained to provide a professional cleaning service that guarantees you exceptional cleanliness and shines for your cars. If you are a fleet manager, a dealership, or a business owner, don't think twice before contacting us to get the perfect cleaning services for your fleet." :`نقدم لكم خدمات تنظيف متكاملة بدءا بالغسيل الخارجي وحتى التنظيف الداخلي العميق. ويتكون فريقنا من فنيي تنظيف ذوي خبرة طويلة مدربين على تقديم خدمة تنظيف احترافية لنضمن لك نظافة استثنائية وبريقاً لسياراتك.
إذا كنت مدير أسطول أو وكيل أو صاحب عمل ، فلا تفكر مليًا قبل الاتصال بنا للحصول على خدمات تنظيف مثالية لأسطولك.
`}</p>
            </div>
          </div>
          <div
            className="row mb-2 mb-sm-4 mb-lg-10"
            style={{ alignItems: "center" }}
          >
            <div className="col-12 col-lg-6">
                <h2 className="fwSemibold fIStyle headingVIII mb-3 mb-sm-4">
                    {i18next.language == "ar" ? "وقت أقل.. لمعان أكثر " : "Less time and more shine."}
                </h2>
                <p>{i18next.language == "ar" ? "لن يضطر موظفوك للقيادة من وإلى مركز غسيل السيارات خلال ساعات عملهم بعد الآن ، فنحن نصل إليك ونقدم لك خدمة غسيل سيارات عالية الجودة." : "Your employees won't have to drive to and from the wash during their working hours anymore, we reach you and deliver high-quality car wash."}</p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="txtHolder mt-lg-n1 pl-lg-5">
              <h2 className="fwSemibold fIStyle headingVIII mb-3 mb-sm-4">
                    {i18next.language == "ar" ? "تعزيز المشاركة" : "Promote engagement"}
                </h2>
                <p>{i18next.language == "ar" ? "لتبرز الاحترافية و المظهر اللائق لشركتك، أبق أسطول سياراتك نظيفاً على الطرق. " : "Keep your professional decent company's image with a clean fleet on the roads. "}</p>
              </div>
            </div>
          </div>

          <div
            className="row mb-2 mb-sm-4 mb-lg-10"
            style={{ alignItems: "center" }}
          >
            <div className="col-12">
                <h2 className="fwSemibold fIStyle headingVIII mb-3 mb-sm-4">
                    {i18next.language == "ar" ? "السلامة أولا" : "Safety first"}
                </h2>
                <p>{i18next.language == "ar" ? "احمِ سياراتك وموظفيك من مخاطر الذهاب إلى مواقع الخدمة." : "Protect both your cars and employees from service locations' risks. "}</p>
            </div>
          </div>
          <div
            className="row mb-2 mb-sm-4 mb-lg-10"
            style={{ alignItems: "center" }}
          >
            <div className="col-12">
                <h2 className="fwSemibold fIStyle headingVIII mb-3 mb-sm-4">
                    {i18next.language == "ar" ? "خدمة الزبائن" : "Customer service"}
                </h2>
                <p>{i18next.language == "ar" ? " يتعامل فريق دعم العملاء لدينا مع جميع المواقف بكفاءة ، اتصل بنا لحجز موعد ، حل مشاكل الخدمات ، أو لاستعراض سجل فواتيرك." : "Our customer support team handles all situations efficiently, contact us to book an appointment, solve services problems, and view your invoices history."}</p>
            </div>
          </div>


          <div
            className="row mb-2 mb-sm-4 mb-lg-10"
            style={{ alignItems: "center" }}
          >
              <div className="col-12 col-lg-6">
              <div className="txtHolder mt-lg-n1 pl-lg-5">
                <h2 className="fwSemibold fIStyle headingVIII mb-3 mb-sm-4">
                    {i18next.language == "ar" ? "اتصل بنا" : "Contact us"}
                </h2>
                <p>{i18next.language == "ar" ? "نحن هنا من أجلك" : "We're here for you"}</p>
                <p>{i18next.language == "ar" ? " هل ترغب في الاطلاع على عروضنا الخاصة وخصوماتنا؟  لا تستطيع تحديد الخدمة التي تناسب احتياجاتك؟  نحن هنا لمساعدتك ، اتصل بنا." : "Would you like to view our special offers and discounts? Can't decide what service fits your needs?  We are here to help you, contact us."}</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
            <span className="d-block imgHolder mb-4 mb-sm-6 mb-lg-0 rounded overflow-hidden w-100">
                <img
                  src="images/five.PNG"
                  alt="image description"
                  className="img-fluid"
                  data-aos="fade-right"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <aside className="cntrHolder bgTheme pt-8 pt-md-10 pb-4">
        <div className="container">
          <ul className="list-unstyled d-flex flex-wrap counterList text-center  text-lg-left justify-content-center mb-0">
            <li className="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
              <span className="icoHolder flex-shrink-0 d-block d-lg-flex align-items-center justify-content-center mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
                <img
                  src="images/ico08.svg"
                  alt="image description"
                  className="img-fluid"
                  width="61"
                  height="61"
                />
              </span>
              <div className="wrap font-weight-light text-white">
                <div className="d-block font-weight-normal mb-1">
                  <strong style={{ fontSize: 43 }}>90%</strong>
                </div>
                <p>
                  {i18next.language == "ar" ? "رضا الاء" : "Satisfactory"}
                </p>
              </div>
            </li>
            <li className="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
              <span className="icoHolder flex-shrink-0 d-block d-lg-flex align-items-cente justify-content-centerr mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
                <img
                  src="images/ico09.svg"
                  alt="image description"
                  className="img-fluid"
                  width="61"
                  height="61"
                />
              </span>
              <div className="wrap font-weight-light text-white">
                <div className="d-block font-weight-normal mb-1">
                  <strong style={{ fontSize: 43 }}>16+</strong>
                </div>
                <p>{i18next.language == "ar" ? "" : "Teams"}</p>
              </div>
            </li>
            <li className="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
              <span className="icoHolder flex-shrink-0 d-block d-lg-flex align-items-center justify-content-center mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
                <img
                  src="images/ico10.svg"
                  alt="image description"
                  className="img-fluid"
                  width="61"
                  height="61"
                />
              </span>
              <div className="wrap font-weight-light text-white">
                <div className="d-block font-weight-normal mb-1">
                  <strong style={{ fontSize: 43 }}>11 </strong>
                </div>
                <p>
                  {i18next.language == "ar" ? "سنة خبرة " : "Year Experience"}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <aside
        className="dscntcSec position-relative d-flex bgCover overlay"
        style={{ backgroundImage: `url(images/img08.jpg)` }}
      >
        <div className="alignCenter w-100 d-flex align-items-center">
          <div className="container py-12 py-18 d-flex justify-content-end">
            <div className="discountOverClub text-center bg-white rounded py-6 px-4 p-sm-6 p-lg-10 pb-lg-11 position-relative">
              <h4 className="headingIV text-capitalize font-weight-bold mb-3">
                {i18next.language == "ar"
                  ? "أعطال مفاجئة؟  نحن نصلح سيارتك في مكانها "
                  : "Surprise malfunctions? We repair your car in place"}
              </h4>
              <p>
                {i18next.language == "ar"
                  ? "اتصل بنا الآن لإصلاح سيارتك على الفور "
                  : "Call us and pray to fix your car immediately"}
              </p>
              <button
                onClick={()=>{
                  setShow(true)
                }}
                className="btn btn-primary text-uppercase px-8 py-3 fwEbold"
              >
                {i18next.language == "ar" ? "احجز الآن" : "Book now"}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileFleetManagement;
