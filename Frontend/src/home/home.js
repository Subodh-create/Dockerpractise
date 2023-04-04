import { NavLink } from "react-router-dom";
import axios from "axios";
import { Component } from "react";
import Swal from "sweetalert2";
import { Redirect } from "react-router";



class Home extends Component {
    state = {
        name: "",
        purpose: "",
        phone: "",
        speciality: "",
        doctor: "",
        date: "",

        con: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }



    }
    textChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeFileHandler = (e) => {
        this.setState({
            doctor: e.target.value
        });

    }

    selectChange = (e) => {
        this.setState({
            speciality: e.target.value
        })
    }

    sendData = (e) => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            purpose: this.state.purpose,
            phone: this.state.phone,
            speciality: this.state.speciality,
            doctor: this.state.doctor,
            date: this.state.date
        }

        axios.post("http://localhost:90/appointment/insert", data, this.state.con)
            .then((result) => {
                console.log(result)
                Swal.fire({ title: 'Appointment', text: "Your appointment Sucessfully Send", icon: 'success', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'OK' })
                    .then((result) => {
                        if (result.isConfirmed) { Swal.fire('Your appointment Sucessfully Send', 'Go to the dashboard') }
                        window.location.href = "/Home"
                    })

            })
            .catch((e) => {
                alert("Login first")
                window.location.href = "/Home"
            })
    }
    render() {
        if(localStorage.getItem('token') && localStorage.getItem('usertype') === 'Doctor'){
			return<Redirect to ='/doctordashboard'/>
	   }
        return (
            <>

                <div class="intro">
                    <div class="container">
                        <div class="row" id="form-down">

                        <div class="col-lg-6 intro_col" >
                                <div class="intro_form_container">
                                    <div class="intro_form_title" id="appointment1">Make an Appointment</div>
                                    <form action="#" class="intro_form" id="intro_form">
                                        <div class="d-flex flex-row align-items-start justify-content-between flex-wrap">
                                            <input type="text" class="intro_input" placeholder="Your Name" name="name" required="required"
                                                value={this.state.name}
                                                onChange={this.textChangeHandler}>
                                            </input>
                                            <input type="text" class="intro_input" placeholder="Purpose" name="purpose" required="required" value={this.state.purpose} onChange={this.textChangeHandler}></input>
                                            <input type="text" class="intro_input" placeholder="Your Phone" name="phone" required="required" value={this.state.phone} onChange={this.textChangeHandler}></input>
                                            <select class="intro_select intro_input" value={this.state.speciality} onChange={this.selectChange}>
                                                <option>Speciality</option>
                                                <option value="Cardiology">Cardiology</option>
                                                <option value="Neurology">Neurology</option>
                                                <option value="orthopedics">orthopedics</option>
                                                <option value="Gastrology">Gastrology</option>

                                            </select>
                                            <select class="intro_select intro_input" value={this.state.doctor} onChange={this.changeFileHandler}>
                                                <option>Doctor</option>
                                                <option value="DR. Pawan Singh">Dr. pawan Singh</option>
                                                <option value="DR. Rajiv Karki">DR. Rajiv Karki</option>
                                                <option value="DR. Subodh Shah">DR. Subodh Shah</option>
                                                <option value="DR. Roshan Tamang">DR. Roshan Khadka</option>

                                            </select>
                                            <input type="text" id="datepicker" class="intro_input datepicker" placeholder="Date" name="date" value={this.state.date} onChange={this.textChangeHandler}></input>
                                        </div>
                                        <button class="button button_1 intro_button trans_200" id="appointment2" onClick={this.sendData}>make an appointment</button>
                                    </form>
                                </div>
                            </div>

                            {/* <!-- Intro Content --> */}
                            <div class="col-lg-6 intro_col">
                                <div class="intro_content">
                                    <div class="section_title_container">
                                        <div class="section_subtitle">This is Digital Medical</div>
                                        <div class="section_title"><h2>Welcome to the E-health</h2></div>
                                    </div>
                                    <div class="intro_text">
                                        <p>We provide HOME DELIVERY SERVICE with up to 12% discount (*conditions apply) for our patients. No extra charges or taxes. We are attentive when prescribing drugs.
                                            A registered pharmacist scrutinizes the prescription and dispenses the drugs after explaining doses to the patient or a family member.
                                            A wide selection of medicines is available at our pharmacy.</p>
                                    </div>
                                    <div class="milestones">
                                        <div class="row milestones_row">

                                            {/* <!-- Milestone --> */}
                                            <div class="col-md-4 milestone_col">
                                                <div class="milestone">
                                                    <div class="milestone_counter" data-end-value="5000" data-sign-before="+">0</div>
                                                    <div class="milestone_text">Satisfied Patients</div>
                                                </div>
                                            </div>

                                            {/* <!-- Milestone --> */}
                                            <div class="col-md-4 milestone_col">
                                                <div class="milestone">
                                                    <div class="milestone_counter" data-end-value="352">0</div>
                                                    <div class="milestone_text">Face Liftings</div>
                                                </div>
                                            </div>

                                            {/* <!-- Milestone --> */}
                                            <div class="col-md-4 milestone_col">
                                                <div class="milestone">
                                                    <div class="milestone_counter" data-end-value="718">0</div>
                                                    <div class="milestone_text">Injectibles</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Intro Form --> */}
                           

                        </div>
                    </div>
                </div>

                {/* <!-- Why Choose Us --> */}

                <div class="why">
                    <div class="background_image"></div>
                    <div class="container">
                        <div class="row row-eq-height">

                            {/* <!-- Why Choose Us Image --> */}
                            <div class="col-lg-6 order-lg-1 order-2">
                                <div class="why_image_container">
                                    <div class="why_image"><img src="images/why_1.jpg" alt=""></img></div>
                                </div>
                            </div>

                            {/* <!-- Why Choose Us Content --> */}
                            <div class="col-lg-6 order-lg-2 order-1">
                                <div class="why_content">
                                    <div class="section_title_container">
                                        <div class="section_subtitle">This is Dr Pro</div>
                                        <div class="section_title"><h2>Why choose us?</h2></div>
                                    </div>
                                    <div class="why_text">
                                        <p>The Pharmacy department offers a wide range of Nepal Government approved medicines to our patients including home medicine delivery services around Biratnagar. After proving your prescription, you can place your order online, by email, phone call, Viber.</p>
                                    </div>
                                    <div class="why_list">
                                        <ul>

                                            {/* <!-- Why List Item --> */}
                                            <li class="d-flex flex-row align-items-center justify-content-start">
                                                <div class="icon_container d-flex flex-column align-items-center justify-content-center">
                                                    <div class="icon"><img src="images/icon_1.svg" alt="https://www.flaticon.com/authors/prosymbols"></img></div>
                                                </div>
                                                <div class="why_list_content">
                                                    <div class="why_list_title">Only Top Products</div>
                                                    <div class="why_list_text">We have a 24 hours Emergency managed by Doctors and staffs to provide advice and assistance to those in need.</div>
                                                </div>

                                            </li>

                                            {/* <!-- Why List Item --> */}
                                            <li class="d-flex flex-row align-items-center justify-content-start">
                                                <div class="icon_container d-flex flex-column align-items-center justify-content-center">
                                                    <div class="icon"><img src="images/icon_2.svg" alt="https://www.flaticon.com/authors/prosymbols"></img></div>
                                                </div>
                                                <div class="why_list_content">
                                                    <div class="why_list_title">The best Doctors</div>
                                                    <div class="why_list_text">We have a 24 hours Emergency managed by Doctors and staffs to provide advice and assistance to those in need.</div>
                                                </div>
                                            </li>

                                            {/* <!-- Why List Item --> */}
                                            <li class="d-flex flex-row align-items-center justify-content-start">
                                                <div class="icon_container d-flex flex-column align-items-center justify-content-center">
                                                    <div class="icon"><img src="images/icon_3.svg" alt="https://www.flaticon.com/authors/prosymbols"></img></div>
                                                </div>
                                                <div class="why_list_content">
                                                    <div class="why_list_title">Great Feedback</div>
                                                    <div class="why_list_text">We have a 24 hours Emergency managed by Doctors and staffs to provide advice and assistance to those in need.</div>
                                                </div>
                                            </li>

                                        </ul>
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
                                        <div class="cta_text">We provide doctors with highly qualified and well-experienced</div>
                                    </div>
                                    <div class="cta_phone ml-lg-auto">+34 586 778 8892</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Services --> */}

                <div class="services">
                    <div class="container">
                        <div class="row">
                            <div class="col text-center">
                                <div class="section_title_container">
                                    <div class="section_subtitle">This is Dr Pro</div>
                                    <div class="section_title"><h2>Our Services</h2></div>
                                </div>
                            </div>
                        </div>
                        <div class="row services_row">

                            {/* <!-- Service --> */}
                            <div class="col-xl-4 col-md-6 service_col">
                                <div class="service text-center">
                                    <div class="service">
                                        <div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
                                            <div class="icon"><img src="images/icon_4.svg" alt="https://www.flaticon.com/authors/prosymbols"></img></div>
                                        </div>
                                        <div class="service_title">Breast Augmentation</div>
                                        <div class="service_text">
                                            <p>Inform the patients about the complete duration of medicine intake per their diagnosis and doctor’s prescription.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Service --> */}
                            <div class="col-xl-4 col-md-6 service_col">
                                <div class="service text-center">
                                    <div class="service">
                                        <div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
                                            <div class="icon"><img src="images/icon_5.svg" alt="https://www.flaticon.com/authors/prosymbols"></img></div>
                                        </div>
                                        <div class="service_title">Breast Augmentation</div>
                                        <div class="service_text">
                                            <p>Inform the patients about the complete duration of medicine intake per their diagnosis and doctor’s prescription.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Service --> */}
                            <div class="col-xl-4 col-md-6 service_col">
                                <div class="service text-center">
                                    <div class="service">
                                        <div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
                                            <div class="icon"><img src="images/icon_6.svg" alt="https://www.flaticon.com/authors/prosymbols"></img></div>
                                        </div>
                                        <div class="service_title">Breast Augmentation</div>
                                        <div class="service_text">
                                            <p>Inform the patients about the complete duration of medicine intake per their diagnosis and doctor’s prescription.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Service --> */}
                            <div class="col-xl-4 col-md-6 service_col">
                                <div class="service text-center">
                                    <div class="service">
                                        <div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
                                            <div class="icon"><img src="images/icon_7.svg" alt="https://www.flaticon.com/authors/prosymbols"></img></div>
                                        </div>
                                        <div class="service_title">Breast Augmentation</div>
                                        <div class="service_text">
                                            <p>Inform the patients about the complete duration of medicine intake per their diagnosis and doctor’s prescription.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Service --> */}
                            <div class="col-xl-4 col-md-6 service_col">
                                <div class="service text-center">
                                    <div class="service">
                                        <div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
                                            <div class="icon"><img src="images/icon_8.svg" alt="https://www.flaticon.com/authors/prosymbols"></img></div>
                                        </div>
                                        <div class="service_title">Breast Augmentation</div>
                                        <div class="service_text">
                                            <p>Inform the patients about the complete duration of medicine intake per their diagnosis and doctor’s prescription.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Service --> */}
                            <div class="col-xl-4 col-md-6 service_col">
                                <div class="service text-center">
                                    <div class="service">
                                        <div class="icon_container d-flex flex-column align-items-center justify-content-center ml-auto mr-auto">
                                            <div class="icon"><img src="images/icon_3.svg" alt="https://www.flaticon.com/authors/prosymbols"></img></div>
                                        </div>
                                        <div class="service_title">Breast Augmentation</div>
                                        <div class="service_text">
                                            <p>Inform the patients about the complete duration of medicine intake per their diagnosis and doctor’s prescription.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- Extra --> */}

                <div class="extra">
                    <div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/extra.jpg" data-speed="0.8"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="extra_container d-flex flex-row align-items-start justify-content-end">
                                    <div class="extra_content">
                                        <div class="extra_disc d-flex flex-row align-items-end justify-content-start">
                                            <div>30<span>%</span></div>
                                            <div>Discount</div>
                                        </div>
                                        <div class="extra_title">Only in August</div>
                                        <div class="extra_text">
                                            <p>NInform the patients about the complete duration of medicine intake per their diagnosis and doctor’s prescription.</p>
                                        </div>
                                        <div class="button button_1 extra_link trans_200"><a href="#">read more</a></div>
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
export default Home
