import React from 'react'
import Testimonials from '../components/Testimonials'
// import Gallery from '../components/gallery/Gallery'

function Home() {
  return (
    <>
    <div id="pageWrapper">
		<main>
			<section className="bannerSec bannerSlide">
				<div>
					<div className="bsSlide bgCover overlay text-center position-relative d-flex" 
                    style={{backgroundImage:`url(images/img01.jpg)`}}
                    >
						{/* <video autoplay loop id="myVideo">
							<source src="videos/banner.mp4" type="video/mp4"/>
						</video> */}

						<div className="alignCenter w-100 d-flex align-items-center">
							<div className="container pt-6 pt-sm-10 pb-22 pt-md-12 pb-md-25 pt-lg-15 pb-lg-35">
								<div className="caption text-white position-relative">
									<h1 className="w-100 mb-6 mb-md-9 text-white">
										<strong className="fwEbold d-block mb-md-2 mb-xl-0">You want to </strong>
										<strong className="fwEbold d-block mb-3 mt-md-n4 mb-md-2">wash your car</strong>
										<strong className="fwEbold d-block font-weight-bold headingVI">We have washed thousands of cars of all kinds and will provide you with the service perfectly</strong>
									</h1>
									<a href="#" className="btn btnTheme text-uppercase fwEbold py-3 px-4 py-md-4 px-md-6">Purchase Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="bsSlide bgCover overlay position-relative d-flex" style={{backgroundImage:`url(images/img02.jpg)`}}>
						<div className="alignCenter d-flex w-100 align-items-center">
							<div className="container pt-6 pt-sm-10 pb-22 pt-md-12 pb-md-25 pt-lg-15 pb-lg-35">
								<div className="caption text-white position-relative text-center text-xxl-left">
									<h1 className="heading w-100 mb-7 mb-md-10 text-white">
										<strong className="d-block fwEbold  mb-md-2 mb-xl-0">We made it </strong>
										<strong className="d-block fwEbold mb-4">easy for you</strong>
										<strong className="d-block fwSemibold headingXII">It is the first mobile car washing and maintenance company in the country</strong>
									</h1>
									<a href="#" className="btn btnTheme text-uppercase fwEbold py-3 px-4 py-lg-4 px-lg-5">Services &amp; Pricing</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="bsSlide bgCover overlay position-relative d-flex align-items-center text-center"
					style={{backgroundImage:`url(images/img03.jpg)`}}
                     >
						<div className="alignCenter d-flex w-100 align-items-center">
							<div className="container pt-6 pt-sm-10 pb-22 pt-md-12 pb-md-25 pt-lg-15 pb-lg-35">
								<div className="caption text-white position-relative mb">
									<h1 className="w-100 mb-9 text-white">
										<strong className="fwEbold d-block  mb-md-2 mb-xl-0">Anywhere</strong>
										<strong className="d-block font-weight-bold headingVI">At full speed we will get you to maintain your car in place</strong>
									</h1>
									<a href="#" className="btn btnTheme text-uppercase fwEbold py-3 px-4 py-lg-4 px-lg-6">About us more</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<aside className="hlpSec mt-n16 pb-12 pb-md-16">
				<div className="container">
					<div className="row helpBlockList no-gutters">
						<div className="col-12 d-flex flex-wrap hlpBlockList">
							<article className="hlpBlock col-12 col-lg-4 w-100 text-center p-7 p-lg-5 p-xl-8" data-background="primary">
								<span className="icoHolder mb-5 d-block mx-auto">
									<span className="ico icon-ico28"></span>
								</span>
								<h2 className="headingIX mb-2 ">Find Locations</h2>
								<p>Find a convenient car wash store, or Auto detail center near you.</p>
								<a href="location.html" className="btn btn-light text-uppercase fwEbold py-3 mb-2">find location <span className="fas fa-chevron-right icn"></span></a>
							</article>
							<article className="hlpBlock col-12 col-lg-4 w-100 text-center p-7 p-lg-5 p-xl-8" data-background="bgTheme">
								<span className="icoHolder mb-5 d-block mx-auto">
									<span className="ico icon-ico29"></span>
								</span>
								<h2 className="headingIX mb-2">Unlimited wash Club</h2>
								<p>Save big on your next car wash with our great deals!</p>
								<a href="Unlimited%20Wash%20Club.html" className="btn btn-light text-uppercase fwEbold py-3 mb-2">join wash club <span className="fas fa-chevron-right icn"></span></a>
							</article>
							<article className="hlpBlock col-12 col-lg-4 w-100 text-center p-7 p-lg-5 p-xl-8" data-background="warning">
								<span className="icoHolder mb-5 d-block mx-auto">
									<span className="ico icon-ico30"></span>
								</span>
								<h2 className="headingIX mb-2">Shop gift Cards</h2>
								<p>Purchase giftcards, wash pass, wash book from our online store</p>
								<a href="shop%20single%20product.html" className="btn btn-light text-uppercase fwEbold py-3 mb-2">go to store <span className="fas fa-chevron-right icn"></span></a>
							</article>
						</div>
					</div>
				</div>
			</aside>
			<section className="wsiSec py-10 pt-md-14 pb-md-12">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<header className="header text-center ltrSpce mb-8 mb-md-11">
								<h2 className="h2 fwEbold mb-3">Main services</h2>
								<p>We provide full service for car washing, maintenance and polishing</p>
							</header>
						</div>
					</div>
					<div className="row d-block">
						<div className="SpecializedSlider">
							<div>
								<div className="col-12">
									<article className="sBlock text-center mb-1 mb-sm-4 mb-lg-8">
										<div className="imgHolder overflow-hidden rounded mb-5 overlayI w-100 position-relative mx-auto">
											<img src="images/img04.png" alt="image description" className="img-fluid"/>
											<div className="btnHolder position-absolute">
												<a href="service-detail.html" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
											</div>
										</div>
										<h3 className="headingIX mb-2"><a href="service-detail.html">Mobile vehicle maintenance</a></h3>
										{/* <p>In a hurry and need a car wash?</p> */}
									</article>
								</div>
							</div>
							<div>
								<div className="col-12">
									<article className="sBlock text-center mb-1 mb-sm-4 mb-lg-8">
										<div className="imgHolder overflow-hidden rounded mb-5 overlayI w-100 position-relative mx-auto">
											<img src="images/img05.png" alt="image description" className="img-fluid"/>
											<div className="btnHolder position-absolute">
												<a href="service-detail2.html" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
											</div>
										</div>
										<h3 className="headingIX mb-2"><a href="service-detail2.html">Hidden cars</a></h3>
										{/* <p>Keep your car like Showroom model</p> */}
									</article>
								</div>
							</div>
							<div>
								<div className="col-12">
									<article className="sBlock text-center mb-1 mb-sm-4 mb-lg-8">
										<div className="imgHolder overflow-hidden rounded mb-5 overlayI w-100 position-relative mx-auto">
											<img src="images/img06.png" alt="image description" className="img-fluid"/>
											<div className="btnHolder position-absolute">
												<a href="service-detail3.html" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
											</div>
										</div>
										<h3 className="headingIX mb-2"><a href="service-detail3.html">Auto polish</a></h3>
										{/* <p>Clean on both the inside &amp; outside.</p> */}
									</article>
								</div>
							</div>
							<div>
								<div className="col-12">
									<article className="sBlock text-center mb-1 mb-sm-4 mb-lg-8">
										<div className="imgHolder overflow-hidden rounded mb-5 overlayI w-100 position-relative mx-auto">
											<img src="images/img05.png" alt="image description" className="img-fluid"/>
											<div className="btnHolder position-absolute">
												<a href="service-detail2.html" className="btn btn-light py-2 text-uppercase font-weight-bold">view detail</a>
											</div>
										</div>
										<h3 className="headingIX mb-2"><a href="service-detail2.html">External and internal washing of cars</a></h3>
										{/* <p>Keep your car like Showroom model</p> */}
									</article>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<aside className="olneBook bgTheme py-7">
				<div className="container">
					<div className="d-md-flex align-items-center justify-content-center text-center text-md-left">
						<h3 className="h4 text-white fwSemibold mb-4 mb-md-0">Easy Online Carwash Booking System</h3>
						<a href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal" className="btn btn-primary fwEbold text-uppercase py-3 py-lg-4 ml-md-4 ml-lg-6">bOOK aPPOINTMENT</a>
					</div>
				</div>
			</aside>
			{/* <section className="abtSec py-12 pt-md-15 pb-md-17">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-6 pr-xl-10 mb-3">
							<div className="row">
								<div className="col-12">
									<div className="imgHolder mb-4">
										<img src="images/img11.png" alt="image description" className="img-fluid"/>
									</div>
								</div>
								<div className="col-12">
									<div className="d-flex flex-wrap imgBlockIIWrap">
										<div className="col-12 col-sm-6">
											<div className="imgHolder mb-4 mb-lg-0">
												<img src="images/img12.png" alt="image description" className="img-fluid"/>
											</div>
										</div>
										<div className="col-12 col-sm-6">
											<div className="imgHolder mb-4 mb-lg-0">
												<img src="images/img13.png" alt="image description" className="img-fluid"/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-6 ml-xl-n3">
							<div className="txtHolder pt-1 mb-6">
								<h3 className="headingVI font-weight-bold mb-3">We help more than 25 years drive customers clean car.</h3>
								<p>Over the past 6 years we cleaned over 34,000 cars, saved over 8.9 million liters of water from being used in car washing and employed 50 youth. Our legacy is in the youth that gained work and life skills, grew their confidence and have moved on to bigger.</p>
							</div>
							<ul className="list-unstyled mb-7 checkList">
								<li className="position-relative"><span className="ico position-absolute icon-check"></span>Flex Serve Car Wash &amp; A La Carte Services</li>
								<li className="position-relative"><span className="ico position-absolute icon-check"></span>VIP &amp; Annual Pass Programs</li>
								<li className="position-relative"><span className="ico position-absolute icon-check"></span>Pay for your wash electronically and securely</li>
								<li className="position-relative"><span className="ico position-absolute icon-check"></span>Gourmet Sandwiches, Coffee &amp; Tea</li>
								<li className="position-relative"><span className="ico position-absolute icon-check"></span>Flexible and Cost-Effective</li>
							</ul>
							<a href="About%20us.html" className="btn btn-outline-primary fwEbold text-uppercase px-6">about more</a>
						</div>
					</div>
				</div>
			</section>
			 */}
			<section className="abtSec pt-12 pt-md-15 ">
				{/* <div className="learHolder position-absolute">
					<img src="images/img29.jpg" alt="image description" className="img-fluid"/>
				</div> */}
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-md-5 col-lg-6">
							<div className="imgHolder mx-auto mt-md-2 mt-lg-0 mr-md-0 mt-md-0 ml-md-n32 float-lg-right">
								<img src="images/img28.png" alt="image description" className="img-fluid"/>
							</div>
						</div>
						<div className="col-12 col-md-7 col-lg-6">
							<div className="txtHolder pt-7 pt-md-6 pt-xl-16 text-center text-md-left">
								<h3 className="headingIV mb-4">
									<strong className="d-block font-weight-bold">Plutim 11 years of experience</strong>
									{/* <strong className="d-block font-weight-bold">in Carwash &amp; Detailing Industry</strong> */}
								</h3>
								<p>Plutim is the first mobile car washing and maintenance company in the country, we are an Emirati company 
                        / National aiming to create meaningful jobs where cleaners feel appreciated and recognized as individuals, and that their work affects the lives of others, we are deeply committed to the quality of the environment and services. Our methods are effective, effective and environmentally friendly, as we use wet wipes made of fine fibers to use them with our water-free methods that provide the option to consume water</p>
								<a href="javascript:void(0);" className="btn btn-outline-primary fwEbold text-uppercase py-3 px-6">about more</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		
			<section className="svpdSec bgCover" 
            // style="background-image: url(images/img07.jpg)"
            >
				{/* <div className="container">
					<div className="row">
						<div className="col-12 col-lg-4 txtHolder text-center text-lg-left mb-6">
							<h2 className="h4 mb-2">We’re Providing Best Quality Service</h2>
							<p>Carwash Hand Wash is an eco-friendly, hand car wash and detailing service based in Portland. Our company was founded back in 1998 by a team of experts.</p>
							<a href="javascript:void(0);" className="btn btnTheme text-uppercase py-3 mt-2 py-lg-4 fwEbold">view all services</a>
						</div>
						<div className="col-12 col-lg-8">
							<ul className="list-unstyled d-sm-flex mb-0 checkList flex-wrap pt-2">
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>Platinum exterior wash</li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>24-hour rain guarantee</li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>Door panels / seats wiped</li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>Super wash</li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span> hard surfaces cleaned &amp; disinfected </li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>A thorough cleaning of dash, doors</li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>Rubber mats washed </li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>Tire Shine </li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>Undercarriage rust inhibitor </li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>Hotels &amp; Motels</li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>Rim cleaner x 2 </li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>Religious Organizations </li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>Undercarriage rust3 inhibito</li>
								<li className="position-relative pr-md-3"><span className="ico position-absolute icon-check"></span>Daycare centers</li>
							</ul>
						</div>
					</div>
				</div> */}
			</section>
			<aside className="dscntclb bg-primary pt-6 pb-7">
				<div className="container">
					<div className="d-flex align-items-center text-white justify-content-center">
						<span className="icoHolder mr-3">
							<img src="images/ico14.svg" alt="image description" width="40" height="43"/>
						</span>
						<h3 className="h5 mb-0 font-weight-normal text-white fIStyle">Join our car wash club and Get <strong className="font-weight-bold">20% Discount</strong> &amp; Unlimited Wash Scheme!</h3>
					</div>
				</div>
			</aside>
			<section className="kyccSec pt-10 pt-sm-12 pt-md-16 pt-lg-19 pb-6 pb-md-10 pb-lg-14">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<header className="header text-center mb-8 mb-md-11">
								<h2 className="h3 fwEbold mb-3">Keep Your Car Clean Everyday of The Year!</h2>
								<p>See some of Images from Our Gallery.</p>
							</header>
						</div>
					</div>
					<div className="gridImgHolder mb-6 mb-lg-9">
					{/* <Gallery/> */}
					</div>
					<div className="row">
						<div className="col-12 col-lg-10 offset-lg-1">
							<ul className="list-unstyled d-flex flex-wrap counterList alt text-center justify-content-center mb-0">
								<li className="mb-6">
									<span className="icoHolder d-block mx-auto mb-4">
										<img src="images/ico11.svg" alt="image description" width="44" height="44" className="img-fluid"/>
									</span>
									<div className="wrap font-weight-light">
										<strong className="counter d-block font-weight-normal mb-1">8650</strong>
										<p>Total Cars washed</p>
									</div>
								</li>
								<li className="mb-6">
									<span className="icoHolder d-block mx-auto mb-4">
										<img src="images/ico12.svg" alt="image description" width="44" height="44" className="img-fluid"/>
									</span>
									<div className="wrap font-weight-light">
										<strong className="counter d-block font-weight-normal mb-1">5289</strong>
										<p>Coffees Released</p>
									</div>
								</li>
								<li className="mb-6">
									<span className="icoHolder d-block mx-auto mb-4">
										<img src="images/ico13.svg" alt="image description" width="44" height="44" className="img-fluid"/>
									</span>
									<div className="wrap font-weight-light">
										<strong className="counter d-block font-weight-normal mb-1">1200</strong>
										<p>Satisfied customers</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<Testimonials/>
		
			{/* <section className="plnSec py-10 py-md-14">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<header className="header text-center ltrSpce font-weight-light">
								<h3 className="h2 fwEbold mb-2">Unlimited Wash Plans</h3>
								<p>Wash whenever you want and enjoy the ease of auto monthly billing.</p>
							</header>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-sm-6 col-lg-3 d-flex">
							<article className="planList text-center rounded position-relative w-100 mb-6 mb-8 mb-lg-11">
								<header>
									<h4 className="headingXI text-capitalize px-3 mb-0">Express Wash</h4>
									<div className="priceHolder px-3 pt-4 pb-5">
										<div className="wrap mb-1">
											<sup className="font-weight-light">$</sup>
											<span className="price font-weight-light">24</span>
											<sup className="font-weight-light">99</sup>
										</div>
										<span>Per month (Include tax)</span>
									</div>
								</header>
								<ul className="list-unstyled pt-8 pb-23 typeList text-secondary mb-0 px-5 text-left">
									<li>Soft-cloth Wash</li>
									<li>Spot-free Rinse</li>
									<li>Spot-free Thermal dry</li>
									<li>Rain shield</li>
								</ul>
								<span className="btnHolder d-block position-absolute">
									<a href="javascript:void(0);" className="btn btn-outline-primary text-uppercase fwEbold py-3">join now</a>
								</span>
							</article>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 d-flex">
							<article className="planList text-center rounded position-relative w-100 mb-6 mb-8 mb-lg-11">
								<header>
									<h4 className="headingXI text-capitalize px-3 mb-0">Supreme Wash</h4>
									<div className="priceHolder px-3 pt-4 pb-5">
										<div className="wrap mb-1">
											<sup className="font-weight-light">$</sup>
											<span className="price font-weight-light">32</span>
											<sup className="font-weight-light">99</sup>
										</div>
										<span>Per month (Include tax)</span>
									</div>
								</header>
								<ul className="list-unstyled pt-8 pb-23 typeList text-secondary mb-0 px-5 text-left">
									<li>Soft-cloth Wash</li>
									<li>Spot-free Rinse</li>
									<li>Spot-free Thermal dry</li>
									<li>Rain shield</li>
									<li>Undercarriage Flush &amp; Brake Dust Remover</li>
									<li>Triple Foam</li>
								</ul>
								<span className="btnHolder d-block position-absolute">
									<a href="javascript:void(0);" className="btn btn-outline-primary text-uppercase fwEbold py-3">join now</a>
								</span>
							</article>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 d-flex">
							<article className="planList active text-center position-relative rounded w-100 mb-6 mb-8 mb-lg-11">
								<header>
									<h4 className="headingXI text-capitalize text-white px-3 mb-0 bg-primary">Ultra FullServe</h4>
									<div className="priceHolder px-3 pt-4 pb-5">
										<div className="wrap mb-1">
											<sup className="font-weight-light">$</sup>
											<span className="price font-weight-light">45</span>
											<sup className="font-weight-light">99</sup>
										</div>
										<span>Per month (Include tax)</span>
									</div>
								</header>
								<ul className="list-unstyled pt-8 pb-23 typeList text-secondary mb-0 px-5 text-left">
									<li>Soft-cloth Wash</li>
									<li>Spot-free Rinse</li>
									<li>Spot-free Thermal dry</li>
									<li>Rain shield</li>
									<li>Undercarriage Flush &amp; Brake Dust Remover</li>
									<li>Triple Foam</li>
									<li>Tire Dressing</li>
									<li>Water-repellant</li>
								</ul>
								<span className="btnHolder d-block position-absolute">
									<a href="javascript:void(0);" className="btn btnTheme text-uppercase fwEbold py-3">join now</a>
								</span>
							</article>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 d-flex">
							<article className="planList text-center rounded position-relative w-100 mb-6 mb-8 mb-lg-11">
								<header>
									<h4 className="headingXI text-capitalize px-3 mb-0">Ultimate Shine</h4>
									<div className="priceHolder px-3 pt-4 pb-5">
										<div className="wrap mb-1">
											<sup className="font-weight-light">$</sup>
											<span className="price font-weight-light">59</span>
											<sup className="font-weight-light">99</sup>
										</div>
										<span>Per month (Include tax)</span>
									</div>
								</header>
								<ul className="list-unstyled pt-8 pb-23 typeList text-secondary mb-0 px-5 text-left">
									<li>Soft-cloth Wash</li>
									<li>Spot-free Rinse</li>
									<li>Spot-free Thermal dry</li>
									<li>Rain shield</li>
									<li>Undercarriage Flush &amp; Brake Dust Remover</li>
									<li>Triple Foam</li>
									<li>Tire Dressing</li>
									<li>Water-repellant</li>
									<li>Carnauba hot wax</li>
									<li>Vacuum & Wipe Console</li>
								</ul>
								<span className="btnHolder d-block position-absolute">
									<a href="javascript:void(0);" className="btn btn-outline-primary text-uppercase fwEbold py-3">join now</a>
								</span>
							</article>
						</div>
					</div>
					<div className="row">
						<div className="col-12 wrap d-md-flex justify-content-center flex-wrap text-center text-md-center">
							<h4 className="headingXI font-weight-normal">Already have an Unlimited Wash Pass? <a href="Manage-memberShip.html" className="text-capitalize fIStyle">Manage Unlimited Account</a></h4>
						</div>
					</div>
				</div>
			</section> */}
			{/* <section className="coseSec bgwSmoke coseSec py-8 py-md-10 pt-lg-15 pb-lg-13">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<header className="header text-center ltrSpce font-weight-light mb-10 mb-lg-12">
								<h2 className="fwEbold mb-2">Why Choose Us?</h2>
								<p>Here’s Why our product beats all other competitors in market.</p>
							</header>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-12 col-md-6 col-lg-4 d-flex">
							<article className="cBlock boxSdw d-flex bg-white py-5 py-sm-7 px-2 px-sm-5 px-lg-2 px-xl-4 rounded mb-4">
								<span className="icoHolder mr-2 mr-xl-3 mt-1">
									<img src="images/ico04.svg" alt="image description" className="img-fluid" width="56" height="55"/>
								</span>
								<div className="txtHolder">
									<h3 className="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">Trusted Services</h3>
									<p>Leave your car with us and less than 5 hours later we’ll have your showroom model Super vehicles.</p>
								</div>
							</article>
						</div>
						<div className="col-12 col-md-6 col-lg-4 d-flex">
							<article className="cBlock boxSdw d-flex bg-white py-5 py-sm-7 px-2 px-sm-5 px-lg-2 px-xl-4 rounded mb-4">
								<span className="icoHolder mr-2 mr-xl-3 mt-1">
									<img src="images/ico05.svg" alt="image description" className="img-fluid" width="56" height="55"/>
								</span>
								<div className="txtHolder">
									<h3 className="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">Organic Products</h3>
									<p>These services compliment your regular oil change service to ensure that your vehicle properly.</p>
								</div>
							</article>
						</div>
						<div className="col-12 col-md-6 col-lg-4 d-flex">
							<article className="cBlock boxSdw d-flex bg-white py-5 py-sm-7 px-2 px-sm-5 px-lg-2 px-xl-4 rounded mb-4">
								<span className="icoHolder mr-2 mr-xl-3 mt-1">
									<img src="images/ico06.svg" alt="image description" className="img-fluid" width="56" height="55"/>
								</span>
								<div className="txtHolder">
									<h3 className="headingIX bdrBtm position-relative text-capitalize font-weight-normal pb-4 mb-3">Talented Workers</h3>
									<p>We bring you the most accurate &amp; fair-price service carwash detailing service nation wide.</p>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section> */}
			{/* <aside className="dscntcSec position-relative d-flex bgCover overlay" 
            style="background-image: url(images/img08.jpg)"
            >
				<div className="alignCenter w-100 d-flex align-items-center">
					<div className="container py-12 py-18 d-flex justify-content-end">
						<div className="discountOverClub text-center bg-white rounded py-6 px-4 p-sm-6 p-lg-10 pb-lg-11 position-relative">
							<h4 className="headingIV text-capitalize font-weight-bold mb-3">Special Discounts Club</h4>
							<p>Our car wash has a variety of premium quality services, that your car will love!</p>
							<a href="javascript:void(0);" className="btn btn-primary text-uppercase px-8 py-3 fwEbold">join now</a>
						</div>
					</div>
				</div>
			</aside> */}
			{/* <aside className="cntrHolder bgTheme pt-8 pt-md-10 pb-4">
				<div className="container">
					<ul className="list-unstyled d-flex flex-wrap counterList text-center  text-lg-left justify-content-center mb-0">
						<li className="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
							<span className="icoHolder flex-shrink-0 d-block d-lg-flex align-items-center justify-content-center mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
								<img src="images/ico08.svg" alt="image description" className="img-fluid" width="61" height="61"/>
							</span>
							<div className="wrap font-weight-light">
								<strong className="counter d-block font-weight-normal mb-1">8650</strong>
								<p>Total Cars washed</p>
							</div>
						</li>
						<li className="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
							<span className="icoHolder flex-shrink-0 d-block d-lg-flex align-items-cente justify-content-centerr mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
								<img src="images/ico09.svg" alt="image description" className="img-fluid" width="61" height="61"/>
							</span>
							<div className="wrap font-weight-light">
								<strong className="counter d-block font-weight-normal mb-1">5289</strong>
								<p>Coffees Released</p>
							</div>
						</li>
						<li className="d-lg-flex flex-wrap justify-content-center align-items-center mb-7">
							<span className="icoHolder flex-shrink-0 d-block d-lg-flex align-items-center justify-content-center mx-auto ml-lg-0 mr-lg-3 mb-2 mb-lg-0">
								<img src="images/ico10.svg" alt="image description" className="img-fluid" width="61" height="61"/>
							</span>
							<div className="wrap font-weight-light">
								<strong className="counter d-block font-weight-normal mb-1">1200</strong>
								<p>Satisfied customers</p>
							</div>
						</li>
					</ul>
				</div>
			</aside> */}
			{/* <aside className="awrdSec py-12 pt-lg-15 pb-lg-19">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<header className="header text-center font-weight-light mb-7">
								<h4 className="headingVII fwEbold mb-2 text-capitalize">Our Certification &amp; Awards</h4>
								<p>Press &amp; Recongnition</p>
							</header>
						</div>
					</div>
					<div className="row d-block">
						<div className="col-12 col-md-10 col-xl-8 offset-md-1 offset-xl-2">
							<div className="awardSlider text-center">
								<div>
									<div className="col-12">
										<article className="awardBlock">
											<div className="imgHolder overflow-hidden mx-auto mb-2 align-items-center d-flex">
												<a href="javascript:void(0);"><img src="images/img14.jpg" alt="certificate" className="img-fluid"/></a>
											</div>
											<h5 className="headingXIII mb-0">
												<strong className="d-block font-weight-normal">Best of Fastest Growing</strong>
												<strong className="d-block font-weight-normal">Companies 2017</strong>
											</h5>
										</article>
									</div>
								</div>
								<div>
									<div className="col-12">
										<article className="awardBlock">
											<div className="imgHolder overflow-hidden mx-auto mb-2 align-items-center d-flex">
												<a href="javascript:void(0);"><img src="images/img15.jpg" alt="certificate" className="img-fluid"/></a>
											</div>
											<h5 className="headingXIII mb-0">
												<strong className="d-block font-weight-normal">Mr.Trash wheel’s hero of the</strong>
												<strong className="d-block font-weight-normal">harbor award 2016</strong>
											</h5>
										</article>
									</div>
								</div>
								<div>
									<div className="col-12">
										<article className="awardBlock">
											<div className="imgHolder overflow-hidden mx-auto mb-2 align-items-center d-flex">
												<a href="javascript:void(0);"><img src="images/img16.jpg" alt="certificate" className="img-fluid"/></a>
											</div>
											<h5 className="headingXIII mb-0">
												<strong className="d-block font-weight-normal">Baltimore Sun Best of the</strong>
												<strong className="d-block font-weight-normal">Baltimore 2011</strong>
											</h5>
										</article>
									</div>
								</div>
								<div>
									<div className="col-12">
										<article className="awardBlock">
											<div className="imgHolder overflow-hidden mx-auto mb-2 align-items-center d-flex">
												<a href="javascript:void(0);"><img src="images/img17.jpg" alt="certificate" className="img-fluid"/></a>
											</div>
											<h5 className="headingXIII mb-0">
												<strong className="d-block font-weight-normal">Mr.Trash wheel’s hero of the</strong>
												<strong className="d-block font-weight-normal">harbor award 2016</strong>
											</h5>
										</article>
									</div>
								</div>
								<div>
									<div className="col-12">
										<article className="awardBlock">
											<div className="imgHolder overflow-hidden mx-auto mb-2 align-items-center d-flex">
												<a href="javascript:void(0);"><img src="images/img18.jpg" alt="certificate" className="img-fluid"/></a>
											</div>
											<h5 className="headingXIII mb-0">
												<strong className="d-block font-weight-normal">Best of Baltimore Magnet</strong>
												<strong className="d-block font-weight-normal">winner 2010</strong>
											</h5>
										</article>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside> */}
			{/* <section className="rqstSrvic py-14 bg-greyBlue">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-md-6 text-white text-center px-xl-13 mb-10 mb-md-2 txtHolder">
							<h4 className="h4 pb-4 mb-5 position-relative text-white">Request a Call back for Your Next Carwash Service</h4>
							<p>We inspire clients to make their most challenging business decisions with confidence. Send us a message, or phone 1-800 123 4567 between 09:00 and 18:00 Monday to Saturday.</p>
							<strong className="d-block headingIV mb-9">Call: <a href="tel:18001234567">1-800-123-4567</a></strong>
							<a href="contact%201.html" className="btn btnTheme fwEbold text-uppercase py-3 py-lg-4 px-5 px-lg-6">contact us now</a>
						</div>
						<div className="col-12 col-md-6">
							<form action="#" className="requestForm bg-white rounded p-5 py-lg-7 px-lg-8">
								<div className="form-group">
									<label className="text-gray" for="selectFormControl">I would like to discuss:</label>
									<select className="custom-select" id="selectFormControl">
										<option selected="">- Select reasons here -</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
								<div className="form-group">
									<label className="text-gray" for="nameFormControl">Name</label>
									<input type="text" className="form-control" id="nameFormControl"/>
								</div>
								<div className="form-group mb-4">
									<label className="text-gray" for="phoneFormControl">Phone Number</label>
									<input type="text" className="form-control" id="phoneFormControl"/>
								</div>
								<div className="form-group mb-1">
									<button type="submit" className="btn btn-primary text-uppercase fwEbold px-5">send request</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section> */}
			<aside className="mapHolder w-100">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0387173266186!2d54.49938290000001!3d24.3799565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40f233f0f737%3A0x398170c0c7c45436!2sBlueteam%20Car%20Services!5e0!3m2!1sen!2sin!4v1682677171522!5m2!1sen!2sin" height="480" 
                // style="border:0" 
                allowFullScreen></iframe>
			</aside>
			{/* <aside className="lctnSec py-11">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-4 col-xl-3 txtHolder text-center text-lg-left mb-5">
							<h5 className="h4 mb-3">See all Carwash Locations</h5>
							<p>These are our network location over the world specific foreign charitable organization.</p>
							<div className="slideBtn d-flex justify-content-center justify-content-lg-start">
								<a href="javascript:void(0);" className="btnHolder buttonLeft rounded d-flex justify-content-center align-items-center mr-2 lsBtnPrev">
									<i className="arrow fas fa-chevron-left"></i>
								</a>
								<a href="javascript:void(0);" className="btnHolder buttonRight rounded d-flex justify-content-center align-items-center mr-2 lsBtnNext">
									<i className="arrow arrowNext fas fa-chevron-right"></i>
								</a>
							</div>
						</div>
						<div className="col-12 col-lg-8 col-xl-9 pt-1">
							<div className="row d-block">
								<div className="locationSlider">
									<div>
										<div className="col-12">
											<article className="wlBlock text-center rounded mb-8">
												<header className="header text-uppercase py-4">
													<h6 className="headingX mb-0">Allisonville Road</h6>
												</header>
												<div className="clList px-6 py-5">
													<p>8252 Kelly Lane Indianapolis, IN 46250</p>
													<p>Call: <a href="tel:6604567890" className="tell">(660) 456-7890</a></p>
													<p><time datetime="2019-07-18">Mon-Sat: 8 am - 8 pm Sunday: 9 am - 6 pm</time></p>
													<p><a href="javascript:void(0);" className="btn btnTheme d-block mt-7 mb-n2 py-3 text-uppercase fwEbold">store details</a></p>
												</div>
											</article>
										</div>
									</div>
									<div>
										<div className="col-12">
											<article className="wlBlock text-center rounded mb-8">
												<header className="header text-uppercase py-4">
													<h6 className="headingX mb-0">Allisonville Road</h6>
												</header>
												<div className="clList px-6 py-5">
													<p>10580 N Michigan Road Carmel, IN 46032 </p>
													<p>Call: <a href="tel:6604567890" className="tell">(660) 456-7890</a></p>
													<p><time datetime="2019-07-18">Mon-Sat: 8 am - 8 pm Sunday: 9 am - 6 pm</time></p>
													<p><a href="javascript:void(0);" className="btn btnTheme d-block mt-7 mb-n2 py-3 text-uppercase fwEbold">store details</a></p>
												</div>
											</article>
										</div>
									</div>
									<div>
										<div className="col-12">
											<article className="wlBlock text-center rounded mb-8">
												<header className="header text-uppercase py-4">
													<h6 className="headingX mb-0">Allisonville Road</h6>
												</header>
												<div className="clList px-6 py-5">
													<p>14837 Thatcher Lane Carmel, IN 46032 </p>
													<p>Call: <a href="tel:660-456-7890" className="tell">(660) 456-7890</a></p>
													<p><time datetime="2019-07-18">Mon-Sat: 8 am - 8 pm Sunday: 9 am - 6 pm</time></p>
													<p><a href="javascript:void(0);" className="btn btnTheme d-block mt-7 mb-n2 py-3 text-uppercase fwEbold">store details</a></p>
												</div>
											</article>
										</div>
									</div>
									<div>
										<div className="col-12">
											<article className="wlBlock text-center rounded mb-8">
												<header className="header text-uppercase py-4">
													<h6 className="headingX mb-0">Allisonville Road</h6>
												</header>
												<div className="clList px-6 py-5">
													<p>10580 N Michigan Road Carmel, IN 46032 </p>
													<p>Call: <a href="tel:6604567890" className="tell">(660) 456-7890</a></p>
													<p><time datetime="2019-07-18">Mon-Sat: 8 am - 8 pm Sunday: 9 am - 6 pm</time></p>
													<p><a href="javascript:void(0);" className="btn btnTheme d-block mt-7 mb-n2 py-3 text-uppercase fwEbold">store details</a></p>
												</div>
											</article>
										</div>
									</div>
									<div>
										<div className="col-12">
											<article className="wlBlock text-center rounded mb-8">
												<header className="header text-uppercase py-4">
													<h6 className="headingX mb-0">Allisonville Road</h6>
												</header>
												<div className="clList px-6 py-5">
													<p>14837 Thatcher Lane Carmel, IN 46032 </p>
													<p>Call: <a href="tel:660-456-7890" className="tell">(660) 456-7890</a></p>
													<p><time datetime="2019-07-18">Mon-Sat: 8 am - 8 pm Sunday: 9 am - 6 pm</time></p>
													<p><a href="javascript:void(0);" className="btn btnTheme d-block mt-7 mb-n2 py-3 text-uppercase fwEbold">store details</a></p>
												</div>
											</article>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside> */}
			
		</main>		
	</div>
	
    </>
  )
}
export default Home