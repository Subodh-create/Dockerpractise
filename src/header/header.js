import { Component } from "react";
import {Route,NavLink,Switch} from "react-router-dom"

class Header extends Component{

	logOut = (e) => {
		localStorage.clear();
		window.location.href="/home"
	}
	
    render(){
        if(localStorage.getItem('token') && localStorage.getItem('usertype') === 'Doctor'){
          var menu =
		  <nav class="main_nav" >
		  <ul class="d-flex flex-row align-items-center justify-content-start">
			  <li><NavLink to="/about">About us</NavLink></li>
			  <li><NavLink to="/home">Dashboard</NavLink></li>
			  <li><NavLink to="/medicine">Medicine</NavLink></li>
			  <li><NavLink to="/doctorprofile">Profile</NavLink></li>

			  <li><NavLink to ='' onClick={this.logOut}>Logout</NavLink></li>
			  <li>{localStorage.getItem('usertype')}</li>
			  {/* <li> {localStorage.getItem('usertype')} </li> */}
			  
		  </ul>
	  </nav>

		}
		else if(localStorage.getItem('token') && localStorage.getItem('usertype') === 'Patient') {

			var menu = 
			
			<nav class="main_nav" >
			<ul class="d-flex flex-row align-items-center justify-content-start">
			<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/about">About us</NavLink></li>
				<li><NavLink to="/patientdashboard">Dashboard</NavLink></li>
				<li><NavLink to="/patmedicine">Medicine</NavLink></li>
				<li><NavLink to="/doctorprofile">Profile</NavLink></li>
				<li><NavLink to ='' onClick={this.logOut}>Logout</NavLink></li>
				<li> <b>{localStorage.getItem('usertype')}</b> </li>
				

				
			</ul>
		</nav>
              

		}
		else{

			var menu = 
			<nav class="main_nav" >
			<ul class="d-flex flex-row align-items-center justify-content-start">
			<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/about">About us</NavLink></li>
				<li><NavLink to="/login">Dashboard</NavLink></li>
				<li><NavLink to="/patmedicine">Medicine</NavLink></li>
				<li><NavLink to ='/login'>Login</NavLink></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				
				<div class="header_phone">+977-9804350751</div>
				<div class="button button_1 header_button" id="header-appointment"><NavLink to ="/login">Make an Appointment</NavLink></div>

				
				
			</ul>
		</nav>
              

		}
	
        return(
            <div >
            <header class="header trans_400" id="header-color">
		<div class="header_content d-flex flex-row align-items-center jusity-content-start trans_400">

			{/* <!-- Logo --> */}
			<div class="logo">
				<a href="#">
					<div>Digital<span>Medical</span></div>
					<div>Health First</div>
				</a>
			</div>

			{/* <!-- Main Navigation --> */}
		
		
		       {menu}




			<div class="header_extra d-flex flex-row align-items-center justify-content-end ml-auto">
				
				{/* <!-- Work Hourse --> */}
				<div class="work_hours">Mo - Sat: 8:00am - 9:00pm</div>

				{/* <!-- Header Phone --> */}
				

				{/* <!-- Appointment Button --> */}
				
			
				<div class="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></div>
			</div>
		</div>
	</header>

	{/* <!-- Menu --> */}

	<div class="menu_overlay trans_400"></div>
	<div class="menu trans_400">
		<div class="menu_close_container"><div class="menu_close"><div></div><div></div></div></div>
		<nav class="menu_nav">
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><NavLink to="/about">About us</NavLink></li>
				<li><NavLink to="/doctordashboard">Dashboard</NavLink></li>
				<li><NavLink to="/medicine">Medicine </NavLink></li>
				<li><NavLink to ='/login'>Login</NavLink></li>
				
				
			</ul>
		</nav>
	
		<div class="social menu_social">
			<ul class="d-flex flex-row align-items-center justify-content-start">
			
				<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
				<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
			</ul>
		</div>
	</div>
            </div>
        )
    }
}
export default Header;