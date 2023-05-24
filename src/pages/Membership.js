import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Membership = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <section class="abtWSec pt-sm-12 pt-md-16 pb-6 pb-sm-4 pb-md-8 pb-lg-0 pb-xl-6">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-12">
              <div class="headerII ltrSpce text-center mb-8 mb-md-10 mb-lg-12 px-md-6 px-xl-10">
                <h3 class="headingI h3 fwEbold mb-2 mb-xl-4">
                  {t("Membership-Cards")}{" "}
                </h3>
                <p> {i18next.language == "ar" ? `اطلع على بطاقات العضوية المميزة من بلو تيم والتي يمكن استخدامها للحصول على أي خدمة من خدماتنا بما في ذلك "غسيل السيارات، والتلميع ، والتلوين ، وتركيب فيلم حماية الطلاء ، وأفلام تغيير اللون ، وحماية الحلقة ، وطبقات النانو سيراميك"

نقدم نوعين من البطاقات "البطاقة الذهبية والبطاقة الفضية" كل واحدة تمنحك خصومات من 10 حتى 40٪.  بالإضافة إلى أنك ستحصل على رصيد إضافي في كل مرة تقوم فيها بشحن البطاقة.
` : `Blue Team offers membership cards, which can be used for any
                  of BlueTeam's services including " car wash, polishing,
                  tinting, paint protection film installation, color change
                  films, ring protection, nano-ceramic layers" We offer two
                  types of cards " the golden card and the silver card" each of
                  which gives you discounts of 10 Up to 40%. Besides, you get an
                  additional balance every time you charge the card.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-9 ">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4">
              <div class="cofBlock bd-white text-center float-md-right mx-auto mr-md-1 ml-md-0 mb-5 mb-md-0">
                <h4 class="mb-0 headingX py-4">
                  <strong class="d-block font-weight-normal text-capitalize mb-2">
				  {i18next.language == "ar"
                          ? 'البطاقة الفضية '
                          : 'Silver Card'}
                  </strong>
                  <strong class="headingII d-block font-weight-bold text-primary mb-2">
				  {i18next.language == "ar"
                          ? 'وفر ١٠٠'
                          : 'Save 100dhs'}
                    
                  </strong>
                  <strong class="d-block dtlservice font-weight-normal mb-1">
				  {i18next.language == "ar"
                          ? 'ادفع ٤٠٠ وسيصبح رصيدك ٥٠٠!'
                          : 'Pay 400 and your balance will be 500!'}
                  </strong>
                  <strong class="d-block dtlservice font-weight-normal mb-1">
				  {i18next.language == "ar"
                          ? 'تمنحك أولوية الخدمة'
                          : 'Gives you priority to get the service'}
                  </strong>
                </h4>
              </div>
            </div>
            <div class="col-12 col-md-4 pl-xl-5">
              <div class="cofBlock bd-white text-center float-md-right mx-auto mr-md-1 ml-md-0 mb-5 mb-md-0">
                <h4 class="mb-0 headingX py-4">
                  <strong class="d-block font-weight-normal text-capitalize mb-2">
				  	{i18next.language == "ar"
                          ? 'البطاقة الذهبية '
                          : 'Golden Card'}
                  </strong>
                  <strong class="headingII d-block font-weight-bold text-primary mb-2">
				  {i18next.language == "ar"
                          ? 'وفر ٣٠٠'
                          : 'Save 300dhs'}
                  </strong>
                  <strong class="d-block dtlservice font-weight-normal mb-1">
				  {i18next.language == "ar"
                          ? 'ادفع ٧٠٠ وسيصبح رصيدك ١٠٠٠!'
                          : 'Pay 700 and your balance will be 1000!'}
                    
                  </strong>
                  <strong class="d-block dtlservice font-weight-normal mb-1">
				  {i18next.language == "ar"
                          ? 'تمنحك أولوية الخدمة '
                          : 'Gives you priority to get the service'}
                    
                  </strong>
                </h4>
              </div>
            </div>
            <div class="col-12 col-md-4 pl-xl-5">
              <div class="cofBlock bd-white text-center float-md-right mx-auto mr-md-1 ml-md-0 mb-5 mb-md-0">
                <h4 class="mb-0 headingX py-4">
                  <strong class="d-block font-weight-normal text-capitalize mb-2">
                    {i18next.language == "ar"
                          ? 'البطاقة البلاتينية'
                          : 'Platinum Card'}
                  </strong>
                  <strong class="headingII d-block font-weight-bold text-primary mb-2">
				  {i18next.language == "ar"
                          ? 'وفر ٨٠٠'
                          : 'Save 800dhs'}
                    
                  </strong>
                  <strong class="d-block dtlservice font-weight-normal mb-1">
				  {i18next.language == "ar"
                          ? 'ادفع ١٢٠٠ وسيصبح رصيدك ٢٠٠٠!'
                          : 'Pay 1200 and your balance will be 2000!'}
                  </strong>
                  <strong class="d-block dtlservice font-weight-normal mb-1">
				  {i18next.language == "ar"
                          ? 'تمنحك أولوية الخدمة'
                          : 'Gives you priority to get the service'}
                  </strong>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;
