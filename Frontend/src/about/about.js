import { Component } from "react";

class About extends Component {
	render() {
		return (
			<>


				<div class="home d-flex flex-column align-items-start justify-content-end">
					{/* <!-- <div class="background_image" style="background-image:url(images/about.jpg)"></div> --> */}
					{/* <div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/about.jpg" data-speed="0.8"></div> */}
					<div class="home_overlay"><img src="images/home_slider.jpg" alt=""></img></div>
					<div class="home_container">
						<div class="container">
							<div class="row">
								<div class="col">
									<div class="home_content">
										<div class="home_title" id="text3">About us</div>
										<div class="home_text" id="text3">Welcome to our
											E-health
											We provide top
											medical services</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Intro --> */}

				<div class="intro">
					<div class="container">
						<div class="row">

							{/* <!-- Intro Content --> */}
							<div class="col-lg-8">
								<div class="intro_content">
									<div class="section_title_container">
										<div class="section_subtitle">This is Dr Pro</div>
										<div class="section_title"><h2>Welcome to our Clinic</h2></div>
									</div>
									<div class="intro_text">
										<p>We provide HOME DELIVERY SERVICE with up to 12% discount (*conditions apply) for our patients. No extra charges or taxes. We are attentive when prescribing drugs.
											A registered pharmacist scrutinizes the prescription and dispenses the drugs after explaining doses to the patient or a family member.
											A wide selection of medicines is available at our pharmacy.
											If our patients’ needs are beyond our selections, we will place the order on their behalf to the nearby stockists.
											We offer 17 kinds of Vaccinations at our Pharmacy. Review our Vaccination List.</p>
									</div>

									{/* <!-- Milestones --> */}
									<div class="milestones">
										<div class="row milestones_row">

											{/* <!-- Milestone --> */}
											<div class="col-md-3 milestone_col">
												<div class="milestone">
													<div class="milestone_counter" data-end-value="5000" data-sign-before="+">0</div>
													<div class="milestone_text">Satisfied Patients</div>
												</div>
											</div>

											{/* <!-- Milestone --> */}
											<div class="col-md-3 milestone_col">
												<div class="milestone">
													<div class="milestone_counter" data-end-value="352">0</div>
													<div class="milestone_text">Face Liftings</div>
												</div>
											</div>

											{/* <!-- Milestone --> */}
											<div class="col-md-3 milestone_col">
												<div class="milestone">
													<div class="milestone_counter" data-end-value="718">0</div>
													<div class="milestone_text">Injectibles</div>
												</div>
											</div>

											{/* <!-- Milestone --> */}
											<div class="col-md-3 milestone_col">
												<div class="milestone">
													<div class="milestone_counter" data-end-value="5">0</div>
													<div class="milestone_text">Awards Won</div>
												</div>
											</div>

										</div>
									</div>

								</div>
							</div>

							{/* <!-- Intro Image --> */}
							<div class="col-lg-3 offset-lg-1">
								<div class="intro_image"><img src="images/intro_1.jpg" alt=""></img></div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Testimonials --> */}

				<div class="testimonials">
					<div class="container">
						<div class="row">
							<div class="col">
								<div class="section_title_container text-center">
									<div class="section_subtitle">This is Dr Pro</div>
									<div class="section_title"><h2>Clients Testimonials</h2></div>
								</div>
							</div>
						</div>
						<div class="row testimonials_row">
							<div class="col">
								<div class="quote d-flex flex-column align-items-center justify-content-center ml-auto mr-auto"><img src="images/quote.png" alt=""></img></div>

								{/* <!-- Testimonials Slider --> */}
								<div class="test_slider_container">
									<div class="owl-carousel owl-theme test_slider">

										{/* <!-- Slide --> */}
										<div class="owl-item">
											<div class="test_item text-center">
												<div class="test_text">
													<p>Our aims to operate fully equipped and staffed ambulances via a central dispatch facility with radio communication between area hospitals and ambulances in order to ensure rapid transport and treatment for individual patients.</p>
												</div>
												<div class="test_info d-flex flex-row align-items-center justify-content-center">
													<div class="test_image"><img src="images/test.jpg" alt=""></img></div>
													<div class="test_text">Maria Williams, <span>Patient</span></div>
												</div>
											</div>
										</div>

										{/* <!-- Slide --> */}
										<div class="owl-item">
											<div class="test_item text-center">
												<div class="test_text">
													<p>Our aims to operate fully equipped and staffed ambulances via a central dispatch facility with radio communication between area hospitals and ambulances in order to ensure rapid transport and treatment for individual patients.</p>
												</div>
												<div class="test_info d-flex flex-row align-items-center justify-content-center">
													<div class="test_image"><img src="images/test.jpg" alt=""></img></div>
													<div class="test_text">Maria Williams, <span>Patient</span></div>
												</div>
											</div>
										</div>

										{/* <!-- Slide --> */}
										<div class="owl-item">
											<div class="test_item text-center">
												<div class="test_text">
													<p>Our aims to operate fully equipped and staffed ambulances via a central dispatch facility with radio communication between area hospitals and ambulances in order to ensure rapid transport and treatment for individual patients.</p>
												</div>
												<div class="test_info d-flex flex-row align-items-center justify-content-center">
													<div class="test_image"><img src="images/test.jpg" alt=""></img></div>
													<div class="test_text">Maria Williams, <span>Patient</span></div>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Call to action --> */}

				<div class="cta">
					<div class="container">
						<div class="row">
							<div class="col">
								<div class="cta_container d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
									<div class="cta_content">
										<div class="cta_title">Make your appointment today!</div>
										<div class="cta_text">Click appointment in one minute</div>
									</div>
									<div class="cta_phone ml-lg-auto">+34 586 778 8892</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Team --> */}

				<div class="team">
					<div class="container">
						<div class="row">
							<div class="col">
								<div class="section_title_container text-center">
									<div class="section_subtitle">This is Dr Pro</div>
									<div class="section_title"><h2>Meet the Surgeons</h2></div>
								</div>
							</div>
						</div>
						<div class="row team_row">

							{/* <!-- Team Item --> */}
							<div class="col-lg-4 team_col">
								<div class="team_item text-center d-flex flex-column aling-items-center justify-content-end">
									<div class="team_image"><img src="images/team_1.jpg" alt=""></img></div>
									<div class="team_content text-center">
										<div class="team_name"><a href="#">Michael Smith</a></div>
										<div class="team_title">Plastic Surgeon</div>
										<div class="team_text">
											<p>Tests are carried out on clinical specimens to obtain information about the health of a patient to aid in diagnosis, treatment, and prevention of disease fast and easily.</p>
										</div>
									</div>
								</div>
							</div>

							{/* <!-- Team Item --> */}
							<div class="col-lg-4 team_col">
								<div class="team_item text-center d-flex flex-column aling-items-center justify-content-end">
									<div class="team_image"><img src="images/team_2.jpg" alt=""></img></div>
									<div class="team_content text-center">
										<div class="team_name"><a href="#">Samantha Doe</a></div>
										<div class="team_title">Plastic Surgeon</div>
										<div class="team_text">
											<p>Tests are carried out on clinical specimens to obtain information about the health of a patient to aid in diagnosis, treatment, and prevention of disease fast and easily.</p>
										</div>
									</div>
								</div>
							</div>

							{/* <!-- Team Item --> */}
							<div class="col-lg-4 team_col">
								<div class="team_item text-center d-flex flex-column aling-items-center justify-content-end">
									<div class="team_image"><img src="images/team_3.jpg" alt=""></img>
									</div>
									<div class="team_content text-center">
										<div class="team_name"><a href="#">James Carl</a></div>
										<div class="team_title">Plastic Surgeon</div>
										<div class="team_text">
											<p>Tests are carried out on clinical specimens to obtain information about the health of a patient to aid in diagnosis, treatment, and prevention of disease fast and easily.</p>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				{/* <!-- Newsletter --> */}

				<div class="newsletter">
					<div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/newsletter.jpg" data-speed="0.8"></div>
					<div class="container">
						<div class="row">
							<div class="col text-center">
								<div class="newsletter_title">Subscribe to our newsletter</div>
							</div>
						</div>
						<div class="row newsletter_row">
							<div class="col-lg-8 offset-lg-2">
								<div class="newsletter_form_container">
									<form action="#" id="newsleter_form" class="newsletter_form">
										<input type="email" class="newsletter_input" placeholder="Your E-mail" required="required"></input>
										<button class="newsletter_button">subscribe</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>


			</>
		)

	}
}

export default About;