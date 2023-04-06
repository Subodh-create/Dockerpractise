import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

class Login extends Component {
	state = {
		username: "",
		password: "",
		id:""
	}

	onChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	btnLogin = (e) => {
		e.preventDefault();
		const data = {
			username: this.state.username,
			password: this.state.password
		}
		


		axios.post("http://localhost:90/doctor/login", data)
			.then((res) => {
			

				console.log(res.data.token1)
				console.log(res.data.usertype)
				console.log(res.data.data._id)
				localStorage.setItem('token',res.data.token1)
				localStorage.setItem("usertype",res.data.usertype)
				localStorage.setItem("D_id",res.data.data._id)
				localStorage.setItem("username",res.data.data.username)
				
				Swal.fire({ title: 'Login', text: "You are logged in", icon: 'success', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'OK' })
					.then((res) => {
						if (res.isConfirmed) { Swal.fire('Login, You are logged in', 'success') }
						window.location.href = "/dashboard"
					})



			})
			.catch((e) => {
				alert("invalid credentialllllllll")
				console.log(e)


			})

		// axios.post("http://localhost:90/patient/login", data)
		// 	.then((result) => {
		// 		console.log(result)
		// 		Swal.fire({ title: 'Login', text: "You are logged in", icon: 'success', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'OK' })
		// 			.then((result) => {
		// 				if (result.isConfirmed) { Swal.fire('Login, You are logged in', 'success') }
		// 				window.location.href = "/about"
		// 			})
		// 	})
		// 	.catch((err) => {
		// 		alert("invalid credenttttttial" + err)
		// 		console.log(err)


		// 	})
	}

	render() {
		return (
			<>

				<div class="limiter">
					<div class="container-login100">
						<div class="wrap-login100">
							<div class="login100-pic js-tilt" data-tilt>
								<img src="assets/img/doctors/doctor-01.jpg" alt="IMG" id="abc"></img>
							</div>

							<form class="login100-form validate-form" id="login">
								<span class="login100-form-title" id="text1">
									Member Login
								</span>

								<div class="wrap-input100 validate-input">
									<input class="input100" type="text" name="username" placeholder="username"
										value={this.state.username} onChange={this.onChangeHandler}


									></input>
									<span class="focus-input100"></span>
									<span class="symbol-input100">
										<i class="fa fa-envelope" aria-hidden="true"></i>
									</span>
								</div>

								<div class="wrap-input100 validate-input" data-validate="Password is required">
									<input class="input100" type="password" name="password" placeholder="Password"
										value={this.state.password}
										onChange={this.onChangeHandler}


									></input>
									<span class="focus-input100"></span>
									<span class="symbol-input100">
										<i class="fa fa-lock" aria-hidden="true"></i>
									</span>
								</div>

								<div class="container-login100-form-btn">
									<button class="login100-form-btn"
										onClick={this.btnLogin}

									>
										Login
									</button>
								</div>

								<div class="text-center p-t-12">
									<span class="txt1">
										Forgot
									</span>
									<a class="txt2" href="#">
										Username / Password?
									</a>
									<li><NavLink to="/register">Create account</NavLink></li>
								</div>

								<div class="text-center p-t-136">

									<a class="txt2" href="">

										<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>

			</>
		)

	}
}

export default Login;
