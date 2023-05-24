import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import $ from "jquery";

const TermsCondition = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    $(document).ready(function() {
      $("p").css("white-space", "pre-line");
    });
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section class="faqWrapSec cwsSec pt-12 pt-md-15 py-md-9 pt-lg-17 pb-10 pb-lg-10 pt-xl-19 pb-xl-13">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-12">
              <div class="headerII ltrSpce mb-8 mb-md-10 mb-lg-12 px-md-6 px-xl-10">
                <h3 class="h3 text-center fwEbold mb-4 mb-sm-5 mb-xl-6 mx-lg-12">
                  {t("TermsCondition")}
                </h3>

                <h5>{t("information-for-appointments")}</h5>
                <p> {t("information-for-appointments-des")} </p>
                <h5>{t("Maintenance")}</h5>
                <div>
                  {i18next.language == "ar" ? (
                    <p>
                      <br /> ● لا تنظف الغلاف لمدة 48 ساعة بعد تركيب أفلام
                      التظليل لتتيح للمادة اللاصقة الالتصاق بإحكام على الزجاج .{" "}
                      <br /> ● لا تقم بغسل السيارة لفترة زمنية لا تقل عن 10 أيام
                      من تاريخ تركيب الحماية لتتيح للمادة اللاصقة الالتصاق
                      بإحكام على الهيكل . <br /> ● تجنب استخدام السوائل المركبة
                      للتنظيف واستبدلها بالصابون مخلوطاُ بالماء النظيف مع قماش
                      نظيف وناعم . <br /> ● لا تقم بوضع الملصقات أو الأشرطة
                      اللاصقة على أي نوع من أنواع التغليف . <br /> ● لا تزل
                      أطراف الغلاف لأن ذلك سيتسبب بضرر دائم على النظام اللاصق ذي
                      الحساسية نحو الضغط . <br /> ● في حال ملاحظة طبقة ضبابية
                      خفيفة مثل الغيم بين الغلاف والزجاج بعد التركيب فهذا طبيعي
                      وسوف يختفي خلال 4 أسابيع إلى 10 أسابيع ويلزم تعريض السيارة
                      للشمس لمدة 3 أسابيع على الأقل وذلك لضمان جفاف الماء بين
                      الفيلم والزجاج. <br /> ● قد تتكون بعض الخطوط المتراكمة على
                      الزجاج التي عادة ما تحتاج لأكثر من جزء من الغلاف لضمان
                      تغطية كاملة{" "}
                    </p>
                  ) : (
                    <p>
                      <br /> ● Do not clean the film for 48 hours after applying
                      the tint films to allow the adhesive to stick properly to
                      the glass.
                      <br /> ● Do not wash the car for at least 10 days after
                      installing the protective coat to allow the adhesive to
                      stick properly to the car's body. <br /> ● Avoid using
                      compound liquids for cleaning, and replace them with soap
                      mixed with clean water and a soft, clean cloth. <br /> ●
                      Do not place labels or adhesive tapes on the car
                      protection films. <br /> ● Do not remove the wrapper's
                      edges as this will cause permanent damage to the
                      pressure-sensitive adhesive system. <br /> ● If you
                      noticed a light hazy layer like a cloud between the cover
                      and the glass after installation, this is normal and will
                      disappear within 4 to 10 weeks. The car must be exposed to
                      the sun for at least 3 weeks to ensure that the water
                      between the film and the glass dries. <br /> ● Some
                      accumulated lines may form on the glass, which usually
                      requires more than one part of the cover to ensure
                      complete coverage.
                    </p>
                  )}
                </div>
                <h5>{t("Important-Notes")}</h5>
                <p> {t("Important-Notes-des")} </p>
                <h5>{t("General-notes")}</h5>
                <p> {t("General-notes-des")} </p>
                <p>{t("terms-note1")}</p>
                <p> {t("terms-note2")} </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsCondition;
