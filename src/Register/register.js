import { Route, NavLink, Switch } from "react-router-dom"
import { Component } from "react";
import axios from "axios"
import Swal from "sweetalert2";
import Select from 'react-select'


class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    gender: "",
    usertype: "",
  };

  RegisterDoctor = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  selectHandler = (e) => {
    this.setState({
      usertype: e.target.value,
    });
  };
  btnRegister = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      gender: this.state.gender,
      usertype: this.state.usertype,
    };

    axios
      .post("http://localhost:90/doctor/register", data)
      .then((dataa) => {
        Swal.fire({
          title: "Custom animation with Animate.css",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        window.location.href = "/login";

        alert("Register sucessfull");
      })
      .catch((da) => {
        console.log(da);
        alert("not register");
      });
  };
  render() {
    return (
      <>
        <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100">
              <div class="login100-pic js-tilt" data-tilt>
                <img
                  src="assets/img/login-banner.png"
                  alt="IMG"
                  id="abcd"
                ></img>
              </div>

              <form class="login100-form validate-form" id="form1">
                <span class="login100-form-title" id="text2">
                  Member Enrollment Form
                </span>
                <span class="login100-form-title"> {this.state.usertype}</span>

                <div
                  class="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.RegisterDoctor}
                  ></input>
                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </span>
                </div>

                <div
                  class="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    class="input100"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.RegisterDoctor}
                  ></input>
                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>

                <div
                  class="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    class="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.RegisterDoctor}
                  ></input>

                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>

                <div
                  class="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    class="input100"
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={this.state.gender}
                    onChange={this.RegisterDoctor}
                  ></input>
                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </span>
                </div>

                <div class="wrap-input100 validate-input">
                  <select
                    class="input100"
                    required="required"
                    value={this.state.usertype}
                    onChange={this.selectHandler}
                  >
                    <option value="Doctor">Doctor</option>
                    {/* <option>Doctor</option> */}
                    <option value="Patient">Patient</option>
                  </select>
                  {/* <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span> */}
                </div>

                <div class="container-login100-form-btn">
                  <button class="login100-form-btn" onClick={this.btnRegister}>
                    Submit
                  </button>
                </div>

                <div class="text-center p-t-12">
                  <span class="txt1">Forgot</span>
                  <a class="txt2" href="#">
                    <b> Username / Password?</b>
                  </a>
                  <li>
                    <NavLink to="/login">
                      Already have an account? <b>login</b>
                    </NavLink>
                  </li>
                </div>

                <div class="text-center p-t-136"></div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;