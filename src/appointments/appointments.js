import { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Appointments extends Component{
	state = {
        myappointment: [],
     config : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }

	}



    componentDidMount() {
        axios.get("http://localhost:90/appointment/show")
            .then((res) => {

                console.log(res)
                this.setState({
                    myappointment: res.data.data
                })

                console.log(res.data)
            })
            .catch((err) => {
                // error area
            })
    }
    render(){
        return (
          <>
            <div>
              <li class="nav-item dropdown has-arrow logged-item">
                <a
                  href="#"
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <span class="user-img">
                    <img
                      class="rounded-circle"
                      src="assets/img/doctors/doctor-thumb-02.jpg"
                      width="31"
                      alt="Darren Elder"
                    ></img>
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <div class="user-header">
                    <div class="avatar avatar-sm">
                      <img
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                        class="avatar-img rounded-circle"
                      ></img>
                    </div>
                    <div class="user-text">
                      <h6>Darren Elder</h6>
                      <p class="text-muted mb-0">Doctor</p>
                    </div>
                  </div>
                  <a class="dropdown-item" href="doctor-dashboard.html">
                    Dashboard
                  </a>
                  <a class="dropdown-item" href="doctor-profile-settings.html">
                    Profile Settings
                  </a>
                  <a class="dropdown-item" href="login.html">
                    Logout
                  </a>
                </div>
              </li>
              {/* <!-- /User Menu --> */}

              {/* <!-- /Header -->
               */}
              {/* <!-- Breadcrumb --> */}
              <div class="breadcrumb-bar">
                <div class="container-fluid">
                  <div class="row align-items-center">
                    <div class="col-md-12 col-12">
                      <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item">
                            <a href="index-2.html">Home</a>
                          </li>
                          <li
                            class="breadcrumb-item active"
                            aria-current="page"
                          >
                            Dashboard
                          </li>
                        </ol>
                      </nav>
                      <h2 class="breadcrumb-title">Dashboard</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Breadcrumb -->

<!-- Page Content --> */}
              <div class="content">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                      {/* <!-- Profile Sidebar --> */}
                      <div class="profile-sidebar">
                        <div class="widget-profile pro-widget-content">
                          <div class="profile-info-widget">
                            <a href="#" class="booking-doc-img">
                              <img
                                src="assets/img/doctors/doctor-thumb-02.jpg"
                                alt="User Image"
                              ></img>
                            </a>
                            <div class="profile-det-info">
                              <h3>Dr. {localStorage.getItem("username")}</h3>
                              <h4> {localStorage.getItem("usertype")}</h4>

                              <div class="patient-details">
                                <h5 class="mb-0">
                                  BDS, MDS - Oral & Maxillofacial Surgery
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="dashboard-widget">
                          <nav class="dashboard-menu">
                            <ul>
                              <li>
                                <NavLink to="/doctordashboard">
                                  <i class="fas fa-columns"></i>
                                  <span>Dashboard</span>
                                </NavLink>
                              </li>
                              <li class="active">
                                <NavLink to="/appointments">
                                  <i class="fas fa-calendar-check"></i>
                                  <span>Appointments</span>
                                </NavLink>
                              </li>
                              <li>
                                <a href="my-patients.html">
                                  <i class="fas fa-user-injured"></i>
                                  <span>Orders</span>
                                </a>
                              </li>
                              <li class="active">
                                <a href="profile-settings.html">
                                  <i class="fas fa-user-cog"></i>
                                  <span>
                                    <NavLink to="/profile">
                                      Profile Settings
                                    </NavLink>
                                  </span>
                                </a>
                              </li>

                              <li>
                                <a href="index-2.html">
                                  <i class="fas fa-sign-out-alt"></i>
                                  <span>Logout</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                      {/* <!-- /Profile Sidebar --> */}
                    </div>

                    <div class="col-md-7 col-lg-8 col-xl-9">
                      <div class="appointments">
                        {this.state.myappointment.map((app) => {
                          return (
                            <div class="appointment-list">
                              <div class="profile-info-widget">
                                <a
                                  href="patient-profile.html"
                                  class="booking-doc-img"
                                >
                                  <img
                                    src="assets/img/patients/patient4.jpg"
                                    alt="User Image"
                                  ></img>
                                </a>
                                <div class="profile-det-info">
                                  <h3>
                                    <a href="patient-profile.html">
                                      {app.name}
                                    </a>
                                  </h3>
                                  <div class="patient-details">
                                    <h5>
                                      <i class="far fa-clock"></i>
                                      {app.date}
                                    </h5>
                                    <h5>
                                      <i class="fa fa-user-md"></i>
                                      {app.doctor}
                                    </h5>
                                    <h5>
                                      <i class="fas fa-envelope"></i>
                                      {app.purpose}
                                    </h5>
                                    <h5 class="mb-0">
                                      <i class="fas fa-phone"></i>
                                      {app.phone}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div class="appointment-action">
                                <a
                                  href="#"
                                  class="btn btn-sm bg-info-light"
                                  data-toggle="modal"
                                  data-target="#appt_details"
                                >
                                  <i class="far fa-eye"></i> View
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-success-light"
                                >
                                  <i class="fas fa-check"></i> Accept
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-danger-light"
                                >
                                  <i class="fas fa-times"></i> Cancel
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

}
    }

    export default Appointments;