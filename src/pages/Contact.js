import React from 'react'

const Contact = () => {
  return (
    <>
        <div id="pageWrapper">
	
		<main>
		
			<section class="contactSec py-10 py-sm-12 pb-md-14 pt-lg-14 pb-lg-16 pb-xl-18">
				<div class="container">
					<div class="row">
						<div class="col-12 col-xl-10 offset-xl-1">
							<header class="header ltrSpce text-center mb-6 mb-md-8 mb-lg-12 mb-xl-14">
								<h1 class="fwEbold h2 text-capitalize mb-2">contact us</h1>
								<p>You can communicate with us comfortably with the following information or send a message</p>
							</header>
						</div>
					</div>
					<div class="row flex-row-reverse">
						<div class="col-12 col-md-8 mb-6 mb-md-0">
							<form class="contactForm pl-xl-4">
								<div class="formRoW d-flex flex-Wrap">
									<div class="formCol form-group">
										<label class="text-capitalize" for="contactName">your Name</label>
										<input type="text" class="form-control" id="contactName"/>
									</div>
									<div class="formCol form-group">
										<label class="text-capitalize" for="contactPhone">phone number</label>
										<input type="text" class="form-control" id="contactPhone"/>
									</div>
								</div>
								<div class="form-group">
									<label class="text-capitalize" for="contactEmailAddress">email address</label>
									<input type="text" class="form-control" id="contactEmailAddress"/>
								</div>
								<div class="form-group">
									<label class="text-capitalize" for="contactSubject">subject</label>
									<select class="custom-select" id="contactSubject">
										<option>Select one of the reason for contact</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
								<div class="form-group">
									<label class="text-capitalize" for="contactMessage">message</label>
									<textarea class="form-control" id="contactMessage"></textarea>
								</div>
								<div class="form-group">
									<button type="submit" class="btn btnTheme text-uppercase fwEbold">send message</button>
								</div>
							</form>
						</div>
						<div class="col-12 col-md-4 alignRight">
							<ul class="contSideList list-unstyled mb-8 mb-lg-11 pt-md-1">
								<li class="d-flex">
									<div class="ico mr-2 mr-lg-3 mt-1">
										<img src="images/ico16.svg" alt="images description" width="37" height="37"/>
									</div>
									<ul class="list-unstyled mb-0 wrap text-capitalize fwSemibold">
										<li class="mb-lg-2">Call us anytime:</li>
										<li>
											<a href="tel:025555292" class="tell">025555292</a>
										</li>
									</ul>
								</li>
								<li class="d-flex">
									<div class="ico mr-2 mr-lg-3 mt-1">
										<img src="images/ico17.svg" alt="images description" width="39" height="39"/>
									</div>
									<div class="addressWrap">
										<h2 class="headingXI text-capitalize fwSemibold mb-2">address</h2>
										<ul class="list-unstyled mb-0">
											<li class="mb-1">M40, Mussafah Complex - Abu Dhabi </li>
											<li>- United Arab Emirates</li>
										</ul>
									</div>
								</li>
								<li class="d-flex mb-md-0">
									<div class="ico mr-2 mr-lg-3 mt-1">
										<img src="images/ico18.svg" alt="images description" width="39" height="39"/>
									</div>
									<div class="tmeWrap">
										<h2 class="headingXI text-capitalize fwSemibold mb-2">working hours:</h2>
										<ul class="list-unstyled tmeList mb-0">
											<li class="mb-1">Mon-Sat: 6:00 am - 3:00 am</li>
											<li>Sun: 6:00 am - 3:00 am</li>
										</ul>
									</div>
								</li>
							</ul>
							<h3 class="headingIX mb-3">Have any questions?</h3>
							<ul class="list-unstyled MailList mb-7">
								<li class="mb-1"><a href="mailto:info@blueteamuae.com">info@blueteamuae.com</a></li>
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
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0387173266186!2d54.49938290000001!3d24.3799565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40f233f0f737%3A0x398170c0c7c45436!2sBlueteam%20Car%20Services!5e0!3m2!1sen!2sin!4v1682677171522!5m2!1sen!2sin" height="480" 
                // style="border:0" 
                allowFullScreen></iframe>
			</aside>
		</main>
	</div>
    </>
  )
}

export default Contact