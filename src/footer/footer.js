import { Component } from "react";


class Footer extends Component{
    render(){
        return(
            <div>
            
	<footer class="footer">
		<div class="footer_content">
			<div class="container">
				<div class="row">

					{/* <!-- Footer About --> */}
					<div class="col-lg-3 footer_col">
						<div class="footer_about">
							<div class="footer_logo">
								<a href="#">
									<div>Digital<span>medical</span></div>
									<div>Health First</div>
								</a>
							</div>
							<div class="footer_about_text">
								<p>The Pharmacy department offers a wide range of Nepal Government approved medicines to our patients including home medicine delivery services around Biratnagar. After proving your prescription, you can place your order online, by email, phone call, Viber.</p>
							</div>
						</div>
					</div>

					{/* <!-- Footer Contact Info --> */}
					<div class="col-lg-3 footer_col">
						<div class="footer_contact">
							<div class="footer_title">Contact Info</div>
							<ul class="contact_list">
								<li>+977 98053968755541</li>
								<li>Softwarica@gmail.com</li>
								<li>WebAPISoftwarica@gmail.com</li>
							</ul>
						</div>
					</div>

					{/* <!-- Footer Locations --> */}
					<div class="col-lg-3 footer_col">
						<div class="footer_location">
							<div class="footer_title">Our Locations</div>
							<ul class="locations_list">
								<li>
									<div class="location_title">kathmandu</div>
									<div class="location_text">45 Creekside Av  FL 931</div>
								</li>
								<li>
									<div class="location_title">Biratnagar</div>
									<div class="location_text">1481 Creekside Lane Avila Beach, CA 931</div>
								</li>
							</ul>
						</div>
					</div>

					{/* <!-- Footer Opening Hours --> */}
					<div class="col-lg-3 footer_col">
						<div class="opening_hours">
							<div class="footer_title">Opening Hours</div>
							<ul class="opening_hours_list">
								<li class="d-flex flex-row align-items-start justify-content-start">
									<div>Monday:</div>
									<div class="ml-auto">8:00am - 9:00pm</div>
								</li>
								<li class="d-flex flex-row align-items-start justify-content-start">
									<div>Thuesday:</div>
									<div class="ml-auto">8:00am - 9:00pm</div>
								</li>
								<li class="d-flex flex-row align-items-start justify-content-start">
									<div>Wednesday:</div>
									<div class="ml-auto">8:00am - 9:00pm</div>
								</li>
								<li class="d-flex flex-row align-items-start justify-content-start">
									<div>Thursday:</div>
									<div class="ml-auto">8:00am - 9:00pm</div>
								</li>
								<li class="d-flex flex-row align-items-start justify-content-start">
									<div>Friday:</div>
									<div class="ml-auto">8:00am - 7:00pm</div>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="footer_bar">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="footer_bar_content  d-flex flex-md-row flex-column align-items-md-center justify-content-start">
	
							{/* <nav class="footer_nav ml-md-auto">
								<ul class="d-flex flex-row align-items-center justify-content-start">
									<li><NavLink to = "/home">Home</NavLink></li>
									<li><NavLink to = "/about">About us</NavLink></li>
									<li><NavLink to = "/home">Home</NavLink></li>
									<li><NavLink to = "/home">Home</NavLink></li>
									<li><NavLink to = "/home">Home</NavLink></li>
								</ul> */}
							{/* </nav> */}
						</div>
					</div>
				</div>
			</div>			
		</div>
	</footer>
            </div>
        )
    }
}

export default Footer