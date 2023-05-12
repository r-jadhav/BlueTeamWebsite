import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import ReactFlagsSelect from "react-flags-select";
import i18next from "i18next";

const Header = () => {

	const [select, setSelect] = useState("EN");
	const onSelect = (code) => {
	  console.log(code);
	  setSelect(code);
	  if (code == "AR") {
		i18next.changeLanguage("ar");
	  } else {
		i18next.changeLanguage("en");
	  }
	};
	console.log("SELECT", select);

  return (
    <>
    <header id="header" className="bg-white">
			<div className="midBar pt-4">
				<div className="container">
					<div className="row">
						<div className="col-6 col-md-4 d-flex justify-content-center">
							<div className="logo position-relative">
								<a href="#">
									<img src="images/logo.png" alt="Auto &amp; Detailing template" className="img-fluid"/>
								</a>
							</div>
						</div>
						<div className="col-6 col-md-8 d-flex align-items-center justify-content-end position-static">
							<ul className=" list-unstyled contactList d-flex mb-0 position-relative mr-17 mr-sm-19 mr-md-23 mr-lg-4 mr-xl-0">
								<li className="d-lg-flex flex-wrap d-none">
									<span className="time rounded-sm d-block mr-lg-2 pt-lg-2">
										<span className="far fa-clock p-lg-0 icn"></span>
									</span>
									<ul className="list-unstyled mb-0 timeList">
										<li><time className=" d-none d-lg-block" dateTime="2019-07-15">Hours</time></li>
										<li><time className=" d-none d-lg-block" dateTime="2019-07-15">6 am - 3 am</time></li>
									</ul>
									
								</li>
								<li className="d-flex flex-wrap">
									<span className="ico d-block mr-lg-2 pt-lg-2">
										<a href="tel:025555292" className="fas fa-phone rounded-sm p-lg-0 icn"></a>
									</span>
									<div className="wrap d-none d-lg-block">
										<span className="text d-block">Call now</span>
										<a className="tell fwSemibold" href="tel:18001234567">025555292</a>
									</div>
								</li>
							</ul>
							<div className="btnHolder ml-xl-8 d-none d-md-block">
								<a href="javascript:void(0);" className="btn btn-warning py-xl-4 text-uppercase fwEbold" data-toggle="modal" data-target="#exampleModal">book appointment</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="menuHolder">
				<div className="container position-relative">
					<nav className="navbar navHolder d-flex navbar-expand-lg navbar-dark p-0 mt-lg-0 mr-lg-0 position-static">
						<div className="menuLogo">
							<a href="#">
								{/* <img src="images/logo2.png" alt="Auto &amp; Detailing template" className="img-fluid logoWhite">
								<img src="images/logo.png" alt="Auto &amp; Detailing template" className="img-fluid logoBlack"> */}
							</a>
						</div>
						<a href="javascript:void(0);" className="search position-relative order-lg-2 fas fa-search" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></a>
						<button className="navbar-toggler toggleBar position-relative" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse navCollapse text-uppercase fwBlack" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item active dropdown">
								<NavLink to="" className="nav-link" >Home</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/aboutus" className="nav-link" >About Us</NavLink>
								</li>
								<li className="nav-item"><NavLink to="/services" className="nav-link">Our services</NavLink></li>
								<li className="nav-item"><NavLink to="/" className="nav-link">Membership cards</NavLink></li>
								<li className="nav-item">
									<a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="javascript:void(0);">Common questions</a>
								</li>
								<li className="nav-item dropdown">
									<NavLink to="/faq" className="nav-link" >Faq</NavLink>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="javascript:void(0);">Contact us</a>
								</li>
							</ul>
						</div>
						<ReactFlagsSelect
							onSelect={onSelect}
							countries={["GB","AR" ]}
							selected={select}
							customLabels={{ GB: "EN", AR: "AR" }}
						/>
						<div id="collapseExample" className="collapse searchFormCollapse position-absolute">
							<form className="sForm rounded-sm overflow-hidden input-group position-relative">
								<input type="text" className="form-control form-control-sm pr-2" placeholder="Find Freelancers"/>
								<div className="input-group-prepend mr-0">
									<button type="submit" className="btn buttonReset text-white fas fa-search"></button>
								</div>
							</form>
						</div>
					</nav>
				</div>
			</div>
		</header>

		<div className="modal pr-0 fade" id="exampleModal" >
			<div className="modal-dialog appointPopup" role="document">
				<div className="modal-content">
					<div className="modal-header py-3 py-sm-4 py-md-5 px-7 px-sm-12 px-md-14 text-center position-relative">
						<h5 className="modal-title headingVII text-capitalize w-100" id="exampleModalLabel">make an appointment</h5>
						<button type="button" className="close rounded-circle position-absolute m-0" data-dismiss="modal" aria-label="Close">
				        </button>
					</div>
					<form className="appointForm">
						<div className="modal-body p-0">
							<div className="formGroup px-2 py-4 p-sm-6 p-md-8 pt-lg-10 px-lg-10">
								<h3 className="headingVIII mb-1 text-capitalize">select location</h3>
								<label>Select your nearest location here</label>
								<select className="custom-select" id="contactSubject">
									<option>Bridgeport, CT1205 North Ave., Bridgeport, CT 06604 </option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
							<div className="formGroup vehicleWrap px-2 py-4 p-sm-6 p-md-8 px-lg-10">
								<h3 className="headingVIII mb-1 text-capitalize">vehicle type</h3>
								<label>Select your vehicle type</label>
								<div className="d-sm-flex vehicleWrapCheck flex-wrap">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
										<label className="form-check-label" htmlFor="defaultCheck1">
										SUV
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
										<label className="form-check-label" htmlFor="defaultCheck2">
										Sedon
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
										<label className="form-check-label" htmlFor="defaultCheck3">
										Small SUV
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
										<label className="form-check-label" htmlFor="defaultCheck4">
										Mini Van
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="defaultCheck5"/>
										<label className="form-check-label" htmlFor="defaultCheck5">
										Pickup Truck
										</label>
									</div>
								</div>
							</div>
							<div className="formGroup pkgWrap py-4 px-2 p-sm-6 pb-sm-2 pt-md-7 pb-md-4 px-lg-8 px-lg-10">
								<h3 className="headingVIII mb-1 mb-lg-2 text-capitalize">wash packages</h3>
								<label>Choose the best wash package for your vehicle</label>
								<select className="custom-select mb-6" id="contactSubject">
									<option>- Select Service Types -</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
								<ul className="list-unstyled radioCheckList mb-0">
									<li>
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="popupCheck1"/>
											<label className="form-check-label mb-0" htmlFor="popupCheck1">
												<h4 className="headingX fwSemibold text-capitalize">
													<strong className="fwSemibold">full fivestar detail</strong>
													<strong className="font-weight-normal"> - 13.00</strong>
												</h4>
												<span className="timeLimit d-block">5 Hours</span>
												<a href="javascript:void(0);" className="info text-capitalize">more info...</a>
											</label>
										</div>
									</li>
									<li>
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="popupCheck2"/>
											<label className="form-check-label mb-0" htmlFor="popupCheck2">
												<h4 className="headingX fwSemibold text-capitalize">
													<strong className="fwSemibold">Interior Fivestar Detail</strong>
													<strong className="font-weight-normal"> - 25.99</strong>
												</h4>
												<span className="timeLimit d-block">5 Hours</span>
												<a href="javascript:void(0);" className="info text-capitalize">more info...</a>
											</label>
										</div>
									</li>
									<li>
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="popupCheck3"/>
											<label className="form-check-label mb-0" htmlFor="popupCheck3">
												<h4 className="headingX fwSemibold text-capitalize">
													<strong className="fwSemibold">Simoniz Diamond Plate Ceramic Paint Coating</strong>
													<strong className="font-weight-normal"> - 39.99</strong>
												</h4>
												<span className="timeLimit d-block">5 Hours</span>
												<a href="javascript:void(0);" className="info text-capitalize">more info...</a>
											</label>
										</div>
									</li>
									<li>
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="popupCheck4"/>
											<label className="form-check-label mb-0" htmlFor="popupCheck4">
												<h4 className="headingX fwSemibold text-capitalize">
													<strong className="fwSemibold">Scratch Repair</strong>
													<strong className="font-weight-normal"> - 24.00</strong>
												</h4>
												<span className="timeLimit d-block">5 Hours</span>
												<a href="javascript:void(0);" className="info text-capitalize">more info...</a>
											</label>
										</div>
									</li>
									<li>
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="popupCheck5"/>
											<label className="form-check-label mb-0" htmlFor="popupCheck5">
												<h4 className="headingX fwSemibold text-capitalize">
													<strong className="fwSemibold">Headlight Restoration</strong>
													<strong className="font-weight-normal"> - 18.59</strong>
												</h4>
												<span className="timeLimit d-block">5 Hours</span>
												<a href="javascript:void(0);" className="info text-capitalize">more info...</a>
											</label>
										</div>
									</li>
								</ul>
							</div>
							<div className="formGroup appointDetail py-4 px-2 p-sm-6 pb-sm-3 px-md-8 pt-md-8 pb-md-6 pb-lg-6 px-lg-10">
								<h3 className="headingVIII text-capitalize">Appointment Details</h3>
								<label>When would you like us to come? </label>
								<div className="row formRow">
									<div className="col-12 col-md-6">
										<input className="form-control" type="date" />
									</div>
									<div className="col-12 col-md-6">
										<input className="form-control" type="time" />
									</div>
								</div>
							</div>
							<div className="formGroup appointDetail py-4 px-2 p-sm-6 p-md-8 px-lg-10">
								<h3 className="headingVIII text-capitalize">Booking Summary</h3>
								<label>See duration and price Estimate here</label>
								<div className="row summaryRow">
									<div className="col-12 col-md-6">
										<article className="smyBlock mb-3 mb-md-0 align-items-center bg-primary d-flex p-4 p-lg-5">
											<span className="icoHolder">
												<img src="images/ico59.svg" className="img-fluid" alt="image description"/>
											</span>
											<div className="textWrap pr-lg-1 text-right flex-grow-1">
												<h3 className="fwSemibold headingIX text-white"> 0 Hour 0 Mins</h3>
												<h4 className="clrTheme headingXIII mb-0 text-uppercase">duration</h4>
											</div>
										</article>
									</div>
									<div className="col-12 col-md-6">
										<article className="smyBlock mb-3 mb-md-0 align-items-center bg-primary d-flex p-4 p-lg-5 px-xl-6">
											<span className="icoHolder">
												<img src="images/ico60.svg" className="img-fluid" alt="image description"/>
											</span>
											<div className="textWrap text-right flex-grow-1">
												<h3 className="fwSemibold headingIX text-white"> $25.99</h3>
												<h4 className="clrTheme headingXIII mb-0 text-uppercase">total price</h4>
											</div>
										</article>
									</div>
								</div>
							</div>
							<div className="formGroup border-0 enterDetail py-4 px-2 p-sm-6 p-md-8 px-lg-10">
								<h3 className="headingVIII text-capitalize mb-2"> Enter Your Details </h3>
								<label>This information will be used to contact you about your service.</label>
								<div className="row formRow">
									<div className="col-12 col-md-6">
										<div className="form-group">
											<input className="form-control" type="text" placeholder="First Name"/>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="form-group">
											<input className="form-control" type="text" placeholder="Last Name"/>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="form-group">
											<input className="form-control" type="tel" placeholder="Phone Number"/>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="form-group">
											<input className="form-control" type="Email" placeholder="Email Address"/>
										</div>
									</div>
								</div>
								<div className="row formIIRow justify-content-center">
									<div className="col-12 col-md-6 col-lg-4">
										<div className="form-group">
											<input className="form-control" type="text" placeholder="Make"/>
										</div>
									</div>
									<div className="col-12 col-md-6 col-lg-4">
										<div className="form-group">
											<input className="form-control" type="text" placeholder="Model"/>
										</div>
									</div>
									<div className="col-12 col-md-6 col-lg-4">
										<div className="form-group">
											<input className="form-control" type="tel" placeholder="Year"/>
										</div>
									</div>
								</div>
								<textarea className="form-control" placeholder="Additional Requirements"></textarea>
							</div>
						</div>
						<div className="modal-footer text-center px-2  px-sm-6 px-md-10 px-lg-24 mt-n1 pt-0 pb-8 pb-sm-10 pb-md-13 pb-lg-17 d-block border-0">
							<p>Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details.</p>
							<button type="submit" className="btn btnTheme text-uppercase fwEbold text-uppercase m-0">Confirm Booking</button>
						</div>
					</form>
				</div>
			</div>
		</div>

    </>
  )
}

export default Header