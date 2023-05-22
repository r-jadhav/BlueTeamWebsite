import React from 'react'
import Testimonials from '../components/Testimonials'
import Banner from '../components/Banner'
import Gallery from '../components/gallery/Gallery'
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../constant/api';
import i18next from "i18next";

const Home = () =>{
	const { t } = useTranslation();
	const [getService, setService] = React.useState()

	const getServices = () => {
		api.get("/service/getServicecategory").then((res) => {
			setService(res.data.data)
		  });
	  };

	React.useEffect(() => {
		getServices();
		AOS.init();
	  }, [])
	 
	  
  return (
    <>
    <div id="pageWrapper">
		<main>

			<Banner/>
			<aside className="hlpSec mt-n16 pb-12 pb-md-16">
				<div className="container">
					<div className="row helpBlockList no-gutters">
						<div className="col-12 d-flex flex-wrap hlpBlockList">
							<article className="hlpBlock col-12 col-lg-4 w-100 text-center p-7 p-lg-5 p-xl-8" data-background="primary">
								<span className="icoHolder mb-5 d-block mx-auto">
									<span className="ico icon-ico28"><img data-aos="zoom-in" src="images/estimate.png" width={80}/></span>
								</span>
								<h2 className="headingIX mb-2 ">Estimations</h2>
								<p>We offer you the most accurate & fair car wash price estimates</p>
								{/* <a href="#" className="btn btn-light text-uppercase fwEbold py-3 mb-2">find location <span className="fas fa-chevron-right icn"></span></a> */}
							</article>
							<article className="hlpBlock col-12 col-lg-4 w-100 text-center p-7 p-lg-5 p-xl-8" data-background="bgTheme">
								<span className="icoHolder mb-5 d-block mx-auto">
									<span className="ico icon-ico29"><img data-aos="zoom-in" src="images/trust.png" width={80}/></span>
								</span>
								<h2 className="headingIX mb-2">Trust</h2>
								<p>Reliable team, which is certified for high-quality performance.</p>
								{/* <a href="#" className="btn btn-light text-uppercase fwEbold py-3 mb-2">join wash club <span className="fas fa-chevron-right icn"></span></a> */}
							</article>
							<article className="hlpBlock col-12 col-lg-4 w-100 text-center p-7 p-lg-5 p-xl-8" data-background="primary">
								<span className="icoHolder mb-5 d-block mx-auto">
									<span className="ico icon-ico29"><img data-aos="zoom-in" src="images/guarantee.png" width={80}/></span>
								</span>
								<h2 className="headingIX mb-2">Warranties</h2>
								<p>Clean, polish, and wax anywhere, anytime.</p>
								{/* <a href="#" className="btn btn-light text-uppercase fwEbold py-3 mb-2">go to store <span className="fas fa-chevron-right icn"></span></a> */}
							</article>
						</div>
					</div>
				</div>
			</aside>

			<section class="wsisSec pt-12 pt-lg-16 pb-4">
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
							<div class="header ltrSpce text-center mb-10 mb-xl-11">
								<h1 class="headingI fwEbold mb-2 mb-xl-4">Categories</h1>
								<p>{t("category_subtitle")}</p>
							</div>
						</div>
					</div>
					<div class="row justify-content-center">
						{getService?.map((ele)=>{
							return (
								<div class="col-12 col-md-6 col-lg-2 d-flex justify-content-center" key={ele.service_category_id}>
									<div class="sBlock mb-8 mb-lg-11 text-center text-md-left">
										<div class="imgHolder overflow-hidden position-relative mx-auto">
											<img src={`http://blueteam.xyz/uploads/${ele.service_category_img}`} data-aos="flip-right" alt="image description" class="img-fluid home-categ"/>
										</div>
										<h2 class="headingIX mb-2"><a href="#">
										{i18next.language == "ar" ? ele.service_category_name_ar : ele.service_category_name_en}
										</a></h2>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>

			<aside className="olneBook bgTheme py-7">
				<div className="container">
					<div className="d-md-flex align-items-center justify-content-center text-center text-md-left">
						<h3 className="h4 text-white fwSemibold mb-4 mb-md-0">{t("book-Appoint-head")}</h3>
						<a href="#" data-toggle="modal" data-aos="flip-up" data-target="#exampleModal" className="btn btn-primary fwEbold text-uppercase py-3 py-lg-4 ml-md-4 ml-lg-6">{t("book-Appoint")} </a>
					</div>
				</div>
			</aside>

			<section className="abtSec pt-12 pt-md-15 ">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-md-5 col-lg-6">
							<div className="imgHolder mx-auto mt-md-2 mt-lg-0 mr-md-0 mt-md-0 ml-md-n32 float-lg-right">
								<img src="images/img28.png" alt="image description" className="img-fluid" data-aos="fade-right"/>
							</div>
						</div>
						<div className="col-12 col-md-7 col-lg-6">
							<div className="txtHolder pt-7 pt-md-6 pt-xl-16 text-center text-md-left">
								<h3 className="headingIV mb-4">
									<strong className="d-block font-weight-bold">{t("About_sub_Heading")}</strong>
								</h3>
								<p>{t("About_des1")}</p>
								<p>{t("About_des2")}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		
			<aside className="dscntclb bg-primary pt-6 pb-7">
				<div className="container">
					<div className="d-flex align-items-center text-white justify-content-center">
						<span className="icoHolder mr-3">
							<img src="images/ico14.svg" alt="image description" width="40" height="43"/>
						</span>
						<h3 className="h5 mb-0 font-weight-normal text-white fIStyle">Enjoy BlueTeam's  <strong className="font-weight-bold"> special membership </strong> packages </h3>
						<p>You will get a Discount on any of our services through BlueTeam's membership cards. Look at the membership card packages and get great deals. </p>
					</div>
				</div>
			</aside>

			<section className="kyccSec pt-10 pt-sm-12 pt-md-16 pt-lg-19 ">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="header text-center mb-8 mb-md-11">
								<h2 className="h3 fwEbold mb-3">{t("gallery_main_head")}</h2>
								<p>{t("gallery_sub_head")}</p>
							</div>
						</div>
					</div>
					<div className="gridImgHolder mb-6 mb-lg-9">
					<Gallery/>
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
							<div class="wrap font-weight-light text-white">
								<div className='d-block font-weight-normal mb-1'><strong style={{fontSize:43}}>90%</strong></div>
								<p>{i18next.language == "ar" ? 'رضا العملاء': 'Satisfactory' }</p>
							</div>
						</li>
						<li class="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
							<span class="icoHolder flex-shrink-0 d-block d-lg-flex align-items-cente justify-content-centerr mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
								<img src="images/ico09.svg" alt="image description" class="img-fluid" width="61" height="61"/>
							</span>
							<div class="wrap font-weight-light text-white">
                                <div className='d-block font-weight-normal mb-1'><strong style={{fontSize:43}}>16+</strong></div>
								<p>{i18next.language == "ar" ? 'فريق عمل': 'Teams' }</p>
							</div>
						</li>
						<li class="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
							<span class="icoHolder flex-shrink-0 d-block d-lg-flex align-items-center justify-content-center mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
								<img src="images/ico10.svg" alt="image description" class="img-fluid" width="61" height="61"/>
							</span>
							<div class="wrap font-weight-light text-white">
                            <div className='d-block font-weight-normal mb-1'><strong style={{fontSize:43}}>11 </strong></div>
							<p>{i18next.language == "ar" ? 'سنة خبرة ': 'Year Experience' }</p>
							</div>
						</li>
					</ul>
				</div>
		</aside>

			<Testimonials/>
			<aside className="mapHolder w-100">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0387173266186!2d54.49938290000001!3d24.3799565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40f233f0f737%3A0x398170c0c7c45436!2sBlueteam%20Car%20Services!5e0!3m2!1sen!2sin!4v1682677171522!5m2!1sen!2sin" height="480" 
                // style="border:0" 
                allowFullScreen></iframe>
			</aside>
		</main>		
	</div>
	
    </>
  )
}
export default Home