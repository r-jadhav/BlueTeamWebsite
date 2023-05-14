import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
	const config ={
		width: "400px",
		height: "500px",
		floating: 'True',
		floatingIcon:<BsWhatsapp color='#fff' size={25}/>,
	  };

	const steps = [
			{
			  id: '1',
			  message: 'What is your name?',
			  trigger: '2',
			},
			{
			  id: '2',
			  user: true,
			  trigger: '3',
			},
			{
			  id: '3',
			  message: 'Hi {previousValue}, nice to meet you!',
			  end: true,
			},
		  ];

  return (
	<>
	<aside className="footerAside position-relative text-white bgCover" style={{backgroundImage:`url(images/img10.jpg)`}} >
				<div className="contactHolder pt-6 pb-3 py-md-6">
					<div className="container">
						<address className="mb-0">
							<ul className="contList list-unstyled mb-0 d-flex flex-wrap justify-content-center">
								<li className="d-flex align-items-center mb-md-0">
									<div className="ico mr-1">
										<img src="images/ico16.svg" alt="images description" width="25" height="39" className="img-fluid"/>
									</div>
									<ul className="list-unstyled mb-0 wrap">
										<li className="mb-lg-1">Call us now:</li>
										<li>
											<a href="tel:+971-502-000-787" className="tell">+971-502-000-787</a>
										</li>
									</ul>
								</li>
								<li className="d-flex align-items-center mb-md-0">
									<div className="ico mr-1">
										<img src="images/ico17.svg" alt="images description" width="25" height="36" className="img-fluid"/>
									</div>
									<ul className="list-unstyled mb-0">
										<li className="mb-lg-1">Email us now:</li>
										<li><a href="mailto:info@blueteamuae.com" className="mail">info@blueteamuae.com</a></li>
									</ul>
								</li>
								<li className="d-flex align-items-center mb-md-0">
									<div className="ico mr-2">
										<img src="images/ico18.svg" alt="images description" width="39" height="39" className="img-fluid"/>
									</div>
									<ul className="list-unstyled mb-0 ftimeList">
										<li className="mb-lg-1">Our Hours</li>
										<li>6 صباحا - 3 فجراً</li>
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
								<h6 className="h6 text-capitalize fwEbold text-white mb-4 mb-sm-5 mb-lg-6">about us</h6>
								<p>Plutim is the first mobile car wash and maintenance company in the country</p>
								<a href="About%20us.html" className="btn btn-outline-light text-uppercase fwEbold py-lg-3">about more</a>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 d-md-flex mb-8 mb-sm-4 mb-lg-0">
							<div className="w-100">
								<h6 className="h6 text-capitalize fwEbold text-white mb-4 mb-lg-6">Location pages</h6>
								<ul className="fLink list-unstyled text-capitalize">
									<li><a href="#">Main</a></li>
									<li><a href="#">About the company</a></li>
									<li><a href="#">Our services</a></li>
									<li><a href="#">Membership cards</a></li>
									<li><a href="#">Common questions</a></li>
									<li><a href="#">Contact us</a></li>
								</ul>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 d-md-flex mb-8 mb-sm-4 mb-lg-0">
							<div className="w-100">
								<h6 className="h6 text-capitalize fwEbold text-white mb-4 mb-lg-6">Our Services</h6>
								<ul className="fLink list-unstyled text-capitalize">
									<ul className="fLink list-unstyled text-capitalize">
									<li><a href="#">express exterior</a></li>
									<li><a href="#">auto detailing</a></li>
									<li><a href="#">full service carwash</a></li>
									<li><a href="#">Express Detailing</a></li>
									<li><a href="#">oil changing</a></li>
									<li><a href="#">preventative maintenance</a></li>
								</ul>
								</ul>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 d-md-flex mb-sm-4 mb-lg-0">
							<div className="wrapHolder w-100">
								<h6 className="h6 text-capitalize fwEbold text-white mb-4 mb-lg-6">newsletter</h6>
								<p>Signup today for know about specials offers, coupons &amp; news.</p>
								<form className="emailForm1 mb-6">
									<div className="input-group">
										<input type="email" className="form-control px-4" placeholder="Email Address"/>
										<div className="input-group-prepend mr-0">
											<button type="submit" className="btn btnTheme rounded-right fas fa-paper-plane"></button>
										</div>
									</div>
								</form>
								<ul className="socialFNetwork d-flex mb-0 pt-4 list-unstyled bdrTop justify-content-center justify-content-sm-start">
									<li><a href="javascript:void(0);" className="fab fa-facebook-square"></a></li>
									<li><a href="javascript:void(0);" className="fab fa-twitter-square"></a></li>
									<li><a href="javascript:void(0);" className="fab fa-linkedin"></a></li>
									<li><a href="javascript:void(0);" className="fas fa-rss-square"></a></li>
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
				<span className="txt d-block text-center text-md-left mb-4 mb-md-0">©2023 <a href="homepage.html">Blue Team.</a> All Rights Reserved</span>
			</div>
			<div className="col-12 col-md-6">
				<ul className="list-unstyled footerLink d-flex mb-0 justify-content-center justify-content-md-end flex-wrap">
					<li><a href="javascript:void(0);">Site Map</a></li>
					<li><a href="javascript:void(0);">Terms and Conditions</a></li>
					<li><a href="/#/privacy-policy">Privacy Policy</a></li>
				</ul>
			</div>
		</div>
	</div>
	
	<div className='stickyPhone'>
	<ChatBot steps={steps} {...config}/>
	</div>

	
</footer>
</>
  )
}

export default Footer
		// <div className="modal pr-0 fade" id="exampleModal">
		// 	<div className="modal-dialog appointPopup" role="document">
		// 		<div className="modal-content">
		// 			<div className="modal-header py-3 py-sm-4 py-md-5 px-7 px-sm-12 px-md-14 text-center position-relative">
		// 				<h5 className="modal-title headingVII text-capitalize w-100" id="exampleModalLabel">make an appointment</h5>
		// 				<button type="button" className="close rounded-circle position-absolute m-0" data-dismiss="modal" aria-label="Close">
		// 		        </button>
		// 			</div>
		// 			<form className="appointForm">
		// 				<div className="modal-body p-0">
		// 					<div className="formGroup px-2 py-4 p-sm-6 p-md-8 pt-lg-10 px-lg-10">
		// 						<h3 className="headingVIII mb-1 text-capitalize">select location</h3>
		// 						<label>Select your nearest location here</label>
		// 						<select className="custom-select" id="contactSubject">
		// 							<option>Bridgeport, CT1205 North Ave., Bridgeport, CT 06604 </option>
		// 							<option value="1">One</option>
		// 							<option value="2">Two</option>
		// 							<option value="3">Three</option>
		// 						</select>
		// 					</div>
		// 					<div className="formGroup vehicleWrap px-2 py-4 p-sm-6 p-md-8 px-lg-10">
		// 						<h3 className="headingVIII mb-1 text-capitalize">vehicle type</h3>
		// 						<label>Select your vehicle type</label>
		// 						<div className="d-sm-flex vehicleWrapCheck flex-wrap">
		// 							<div className="form-check">
		// 								<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
		// 								<label className="form-check-label" for="defaultCheck1">
		// 								SUV
		// 								</label>
		// 							</div>
		// 							<div className="form-check">
		// 								<input className="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
		// 								<label className="form-check-label" for="defaultCheck2">
		// 								Sedon
		// 								</label>
		// 							</div>
		// 							<div className="form-check">
		// 								<input className="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
		// 								<label className="form-check-label" for="defaultCheck3">
		// 								Small SUV
		// 								</label>
		// 							</div>
		// 							<div className="form-check">
		// 								<input className="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
		// 								<label className="form-check-label" for="defaultCheck4">
		// 								Mini Van
		// 								</label>
		// 							</div>
		// 							<div className="form-check">
		// 								<input className="form-check-input" type="checkbox" value="" id="defaultCheck5"/>
		// 								<label className="form-check-label" for="defaultCheck5">
		// 								Pickup Truck
		// 								</label>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className="formGroup pkgWrap py-4 px-2 p-sm-6 pb-sm-2 pt-md-7 pb-md-4 px-lg-8 px-lg-10">
		// 						<h3 className="headingVIII mb-1 mb-lg-2 text-capitalize">wash packages</h3>
		// 						<label>Choose the best wash package for your vehicle</label>
		// 						<select className="custom-select mb-6" id="contactSubject">
		// 							<option>- Select Service Types -</option>
		// 							<option value="1">One</option>
		// 							<option value="2">Two</option>
		// 							<option value="3">Three</option>
		// 						</select>
		// 						<ul className="list-unstyled radioCheckList mb-0">
		// 							<li>
		// 								<div className="form-check">
		// 									<input className="form-check-input" type="checkbox" value="" id="popupCheck1"/>
		// 									<label className="form-check-label mb-0" for="popupCheck1"/>
		// 										<h4 className="headingX fwSemibold text-capitalize">
		// 											<strong className="fwSemibold">full fivestar detail</strong>
		// 											<strong className="font-weight-normal"> - 13.00</strong>
		// 										</h4>
		// 										<span className="timeLimit d-block">5 Hours</span>
		// 										<a href="javascript:void(0);" className="info text-capitalize">more info...</a>
		// 									<label/>
		// 								</div>
		// 							</li>
		// 							<li>
		// 								<div className="form-check">
		// 									<input className="form-check-input" type="checkbox" value="" id="popupCheck2"/>
		// 									<label className="form-check-label mb-0" for="popupCheck2">
		// 										<h4 className="headingX fwSemibold text-capitalize">
		// 											<strong className="fwSemibold">Interior Fivestar Detail</strong>
		// 											<strong className="font-weight-normal"> - 25.99</strong>
		// 										</h4>
		// 										<span className="timeLimit d-block">5 Hours</span>
		// 										<a href="javascript:void(0);" className="info text-capitalize">more info...</a>
		// 									</label>
		// 								</div>
		// 							</li>
		// 							<li>
		// 								<div className="form-check">
		// 									<input className="form-check-input" type="checkbox" value="" id="popupCheck3"/>
		// 									<label className="form-check-label mb-0" for="popupCheck3">
		// 										<h4 className="headingX fwSemibold text-capitalize">
		// 											<strong className="fwSemibold">Simoniz Diamond Plate Ceramic Paint Coating</strong>
		// 											<strong className="font-weight-normal"> - 39.99</strong>
		// 										</h4>
		// 										<span className="timeLimit d-block">5 Hours</span>
		// 										<a href="javascript:void(0);" className="info text-capitalize">more info...</a>
		// 									</label>
		// 								</div>
		// 							</li>
		// 							<li>
		// 								<div className="form-check">
		// 									<input className="form-check-input" type="checkbox" value="" id="popupCheck4"/>
		// 									<label className="form-check-label mb-0" for="popupCheck4">
		// 										<h4 className="headingX fwSemibold text-capitalize">
		// 											<strong className="fwSemibold">Scratch Repair</strong>
		// 											<strong className="font-weight-normal"> - 24.00</strong>
		// 										</h4>
		// 										<span className="timeLimit d-block">5 Hours</span>
		// 										<a href="javascript:void(0);" className="info text-capitalize">more info...</a>
		// 									</label>
		// 								</div>
		// 							</li>
		// 							<li>
		// 								<div className="form-check">
		// 									<input className="form-check-input" type="checkbox" value="" id="popupCheck5"/>
		// 									<label className="form-check-label mb-0" for="popupCheck5">
		// 										<h4 className="headingX fwSemibold text-capitalize">
		// 											<strong className="fwSemibold">Headlight Restoration</strong>
		// 											<strong className="font-weight-normal"> - 18.59</strong>
		// 										</h4>
		// 										<span className="timeLimit d-block">5 Hours</span>
		// 										<a href="javascript:void(0);" className="info text-capitalize">more info...</a>
		// 									</label>
		// 								</div>
		// 							</li>
		// 						</ul>
		// 					</div>
		// 					<div className="formGroup appointDetail py-4 px-2 p-sm-6 pb-sm-3 px-md-8 pt-md-8 pb-md-6 pb-lg-6 px-lg-10">
		// 						<h3 className="headingVIII text-capitalize">Appointment Details</h3>
		// 						<label>When would you like us to come? </label>
		// 						<div className="row formRow">
		// 							<div className="col-12 col-md-6">
		// 								<input className="form-control" type="date" />
		// 							</div>
		// 							<div className="col-12 col-md-6">
		// 								<input className="form-control" type="time" />
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className="formGroup appointDetail py-4 px-2 p-sm-6 p-md-8 px-lg-10">
		// 						<h3 className="headingVIII text-capitalize">Booking Summary</h3>
		// 						<label>See duration and price Estimate here</label>
		// 						<div className="row summaryRow">
		// 							<div className="col-12 col-md-6">
		// 								<article className="smyBlock mb-3 mb-md-0 align-items-center bg-primary d-flex p-4 p-lg-5">
		// 									<span className="icoHolder">
		// 										<img src="images/ico59.svg" className="img-fluid" alt="image description"/>
		// 									</span>
		// 									<div className="textWrap pr-lg-1 text-right flex-grow-1">
		// 										<h3 className="fwSemibold headingIX text-white"> 0 Hour 0 Mins</h3>
		// 										<h4 className="clrTheme headingXIII mb-0 text-uppercase">duration</h4>
		// 									</div>
		// 								</article>
		// 							</div>
		// 							<div className="col-12 col-md-6">
		// 								<article className="smyBlock mb-3 mb-md-0 align-items-center bg-primary d-flex p-4 p-lg-5 px-xl-6">
		// 									<span className="icoHolder">
		// 										<img src="images/ico60.svg" className="img-fluid" alt="image description"/>
		// 									</span>
		// 									<div className="textWrap text-right flex-grow-1">
		// 										<h3 className="fwSemibold headingIX text-white"> $25.99</h3>
		// 										<h4 className="clrTheme headingXIII mb-0 text-uppercase">total price</h4>
		// 									</div>
		// 								</article>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className="formGroup border-0 enterDetail py-4 px-2 p-sm-6 p-md-8 px-lg-10">
		// 						<h3 className="headingVIII text-capitalize mb-2"> Enter Your Details </h3>
		// 						<label>This information will be used to contact you about your service.</label>
		// 						<div className="row formRow">
		// 							<div className="col-12 col-md-6">
		// 								<div className="form-group">
		// 									<input className="form-control" type="text" placeholder="First Name"/>
		// 								</div>
		// 							</div>
		// 							<div className="col-12 col-md-6">
		// 								<div className="form-group">
		// 									<input className="form-control" type="text" placeholder="Last Name"/>
		// 								</div>
		// 							</div>
		// 							<div className="col-12 col-md-6">
		// 								<div className="form-group">
		// 									<input className="form-control" type="tel" placeholder="Phone Number"/>
		// 								</div>
		// 							</div>
		// 							<div className="col-12 col-md-6">
		// 								<div className="form-group">
		// 									<input className="form-control" type="Email" placeholder="Email Address"/>
		// 								</div>
		// 							</div>
		// 						</div>
		// 						<div className="row formIIRow justify-content-center">
		// 							<div className="col-12 col-md-6 col-lg-4">
		// 								<div className="form-group">
		// 									<input className="form-control" type="text" placeholder="Make"/>
		// 								</div>
		// 							</div>
		// 							<div className="col-12 col-md-6 col-lg-4">
		// 								<div className="form-group">
		// 									<input className="form-control" type="text" placeholder="Model"/>
		// 								</div>
		// 							</div>
		// 							<div className="col-12 col-md-6 col-lg-4">
		// 								<div className="form-group">
		// 									<input className="form-control" type="tel" placeholder="Year"/>
		// 								</div>
		// 							</div>
		// 						</div>
		// 						<textarea className="form-control" placeholder="Additional Requirements"></textarea>
		// 					</div>
		// 				</div>
		// 				<div className="modal-footer text-center px-2  px-sm-6 px-md-10 px-lg-24 mt-n1 pt-0 pb-8 pb-sm-10 pb-md-13 pb-lg-17 d-block border-0">
		// 					<p>Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details.</p>
		// 					<button type="submit" className="btn btnTheme text-uppercase fwEbold text-uppercase m-0">Confirm Booking</button>
		// 				</div>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div> 
		//  <span id="back-top" className="text-center rounded-circle fa fa-angle-up"></span> 
		//  <div id="loader" className="loader-holder">
		// 	<div className="block"><img src="images/svg/three-dots.svg" width="60" alt="loader"/></div>
		// </div> 