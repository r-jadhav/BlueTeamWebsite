import React from 'react'
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineLike, AiOutlineProfile } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
	const { t } = useTranslation();
  return (
    <>
        <section class="abtWSec pt-10 pt-sm-12 pt-md-16 pb-6 pb-sm-4 pb-md-8 pb-lg-0 pb-xl-6">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                    <header class="header text-center ltrSpce mb-8 mb-sm-10 mb-xl-15">
                        <h2 class="headingI fwEbold mb-2 mb-md-3 mb-lg-4">{t("AboutHeading")}</h2>
                    </header>
                </div>
            </div>
            <div class="row mb-2 mb-sm-4 mb-lg-10" style={{alignItems:'center'}}>
                <div class="col-12 col-lg-6">
                    <span class="d-block imgHolder mb-4 mb-sm-6 mb-lg-0 rounded overflow-hidden w-100">
                        <img src="images/img106.jpg" alt="image description" class="img-fluid"/>
                    </span>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="txtHolder mt-lg-n1 pl-lg-5">
                        <h2 class="fwSemibold fIStyle headingVIII mb-3 mb-sm-4">{t("About_sub_Heading")}</h2>
                        <p>{t("About_des1")}</p>
						<p>{t("About_des2")}</p>
					</div>
                </div>
            </div>
			<div class="row mb-2 mb-sm-4 mb-lg-10" style={{alignItems:'center'}}>
                <div class="col-12 col-lg-6">
					<p>{t("About_des3")}</p>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="txtHolder mt-lg-n1 pl-lg-5">
						<p>{t("About_des4")}</p>
					</div>
                </div>
            </div>
        </div>
        </section>
        <aside class="cntrHolder bgTheme pt-8 pt-md-10 pb-4">
				<div class="container">
					<ul class="list-unstyled d-flex flex-wrap counterList text-center  text-lg-left justify-content-center mb-0">
						<li class="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
							<span class="icoHolder flex-shrink-0 d-block d-lg-flex align-items-center justify-content-center mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
								<img src="images/ico08.svg" alt="image description" class="img-fluid" width="61" height="61"/>
							</span>
							<div class="wrap font-weight-light">
								<div className='d-block font-weight-normal mb-1'><strong style={{fontSize:43}}>90%</strong></div>
								<p>Clients The sick</p>
							</div>
						</li>
						<li class="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
							<span class="icoHolder flex-shrink-0 d-block d-lg-flex align-items-cente justify-content-centerr mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
								<img src="images/ico09.svg" alt="image description" class="img-fluid" width="61" height="61"/>
							</span>
							<div class="wrap font-weight-light">
                                <div className='d-block font-weight-normal mb-1'><strong style={{fontSize:43}}>16+</strong></div>
								<p>Team the work</p>
							</div>
						</li>
						<li class="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
							<span class="icoHolder flex-shrink-0 d-block d-lg-flex align-items-center justify-content-center mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
								<img src="images/ico10.svg" alt="image description" class="img-fluid" width="61" height="61"/>
							</span>
							<div class="wrap font-weight-light">
                            <div className='d-block font-weight-normal mb-1'><strong style={{fontSize:43}}>11 </strong></div>
								<p>Year Experience</p>
							</div>
						</li>
					</ul>
				</div>
		</aside>
        <aside class="pt-10 pt-sm-12 pb-6 pb-md-8 pt-md-14 pt-lg-16 pb-xl-10">
				<div class="container">
                <div class="row">
                <div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                    <header class="header text-center ltrSpce mb-8 mb-sm-10 mb-xl-15">
                        <h2 class="headingI fwEbold mb-2 mb-md-3 mb-lg-4">We offer Distinguished service </h2>
                        <p>We have partnered with Turtlewax to provide you with the most advanced fair price estimates</p>
                    </header>
                </div>
            </div>
					<div class="row justify-content-center">
						<div class="col-12 col-md-6 col-lg-4">
							<article class="text-center px-lg-2 px-xl-5 hlpcBlock mb-6">
								<span class="icoHolder mb-3 mb-xl-4 mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                    <AiOutlineProfile color='#0b4b8a' size={40}/>
								</span>
								<h2 class="headingIX fwSemibold mb-1">Estimates</h2>
								<p>We offer you the most accurate and fair laundry </p>
								{/* <a href="location.html" class="btn btn-light text-uppercase font-weight-bold py-3">find location</a> */}
							</article>
						</div>
						<div class="col-12 col-md-6 col-lg-4">
							<article class="text-center px-lg-2 px-xl-5 hlpcBlock mb-6">
								<span class="icoHolder mb-3 mb-xl-4 mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                    <AiOutlineLike color='#0b4b8a' size={40}/>
								</span>
								<h2 class="headingIX fwSemibold mb-1">Confidence</h2>
								<p>Save big on your next car wash with our great deals!</p>
								{/* <a href="Unlimited%20Wash%20Club.html" class="btn btn-light text-uppercase font-weight-bold py-3">JOIN WASH CLUB</a> */}
							</article>
						</div>
						<div class="col-12 col-md-6 col-lg-4">
							<article class="text-center px-lg-2 px-xl-5 hlpcBlock mb-6">
								<span class="icoHolder mb-3 mb-xl-4 mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                    <BsStopwatch color='#0b4b8a' size={40}/>
								</span>
								<h2 class="headingIX fwSemibold mb-1">Guarantees</h2>
								<p>Cleaning, polishing, wax anywhere, anytime</p>
								{/* <a href="javascript:void(0);" class="btn btn-light text-uppercase font-weight-bold py-3">Go to Store</a> */}
							</article>
						</div>
					</div>
				</div>
		</aside>

        <aside class="dscntcSec position-relative d-flex bgCover overlay" style={{backgroundImage: `url(images/img08.jpg)`}}>
				<div class="alignCenter w-100 d-flex align-items-center">
					<div class="container py-12 py-18 d-flex justify-content-end">
						<div class="discountOverClub text-center bg-white rounded py-6 px-4 p-sm-6 p-lg-10 pb-lg-11 position-relative">
							<h4 class="headingIV text-capitalize font-weight-bold mb-3">Surprise malfunctions ؟ We repair your car in place</h4>
							<p>Call us and pray to fix your car immediately</p>
							<a href="javascript:void(0);" class="btn btn-primary text-uppercase px-8 py-3 fwEbold">Book now</a>
						</div>
					</div>
				</div>
			</aside>
    </>
  )
}

export default AboutUs