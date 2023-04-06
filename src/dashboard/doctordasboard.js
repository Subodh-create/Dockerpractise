import { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router";


class Doctordashboard extends Component{
	state = {
        myappointment: [],
        config : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`},
		
        }
    }
	logOut = (e) => {
		localStorage.clear();
		window.location.href="/home"
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
		if(!localStorage.getItem('token')){
             return<Redirect to ='/login'/>
		}
        return(
            <>

 		{/* <!-- User Menu --> */}
                         <div>
                        
						<li class="nav-item dropdown has-arrow logged-item">
							<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
								<span class="user-img">
									<img class="rounded-circle" src="assets/img/doctors/doctor-12.jpg" width="31" alt="Darren Elder"></img>
								</span>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
								<div class="user-header">
									<div class="avatar avatar-sm">
										<img src="assets/img/doctors/doctor-12.jpg" alt="User Image" class="avatar-img rounded-circle"></img>
									</div>
									<div class="user-text">
										<h6>Darren Elder</h6>
										<p class="text-muted mb-0">Doctor</p>
									</div>
								</div>
								<a class="dropdown-item" href="doctor-dashboard.html">Dashboard</a>
								<a class="dropdown-item" href="doctor-profile-settings.html">Profile Settings</a>
								<a class="dropdown-item" href="login.html">Logout</a>
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
									<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Dashboard</li>
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
							<div class="profile-sidebar" id="sidebar">
								<div class="widget-profile pro-widget-content">
									<div class="profile-info-widget">
										<a href="#" class="booking-doc-img">
											<img src="assets/img/doctors/doctor-12.jpg" alt="User Image"></img>
										</a>
										<div class="profile-det-info">
											<h3>{localStorage.getItem('username')}</h3>
											<h3>{localStorage.getItem('usertype')}</h3>
											
											<div class="patient-details">
												<h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
											</div>
										</div>
									</div>
								</div>
								<div class="dashboard-widget">
									<nav class="dashboard-menu">
										<ul>
											<li class="active">
												<NavLink to ="/doctordashboard">
													<i class="fas fa-columns"></i>
													
													<span>Dashboard</span>
												</NavLink>
											</li>
											<li>
												<NavLink to ="/appointments">
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
											
											
											<li>
												<a href="doctor-profile-settings.html">
													<i class="fas fa-user-cog"></i>
													<span><NavLink to ="/doctorprofile">Profile Settings</NavLink></span>
												</a>
											</li>
											
											
											<li>
												<a href="index-2.html">
													<i class="fas fa-sign-out-alt"></i>
													<span onClick={this.logOut}>Logout</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
							{/* <!-- /Profile Sidebar --> */}
							
						</div>
						
						<div class="col-md-7 col-lg-8 col-xl-9">

							<div class="row" id="pat">
								<div class="col-md-12">
									<div class="card dash-card">
										<div class="card-body">
											<div class="row">
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget dct-border-rht">
														<div class="circle-bar circle-bar1">
															<div class="circle-graph1" data-percent="75">
																<img src="assets/img/icon-01.png" class="img-fluid" alt="patient"></img>
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Total Patient</h6>
															<h3>1500</h3>
															<p class="text-muted">Till Today</p>
														</div>
													</div>
												</div>
												
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget dct-border-rht">
														<div class="circle-bar circle-bar2">
															<div class="circle-graph2" data-percent="65">
																<img src="assets/img/icon-02.png" class="img-fluid" alt="Patient"></img>
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Today Patient</h6>
															<h3>160</h3>
															<p class="text-muted">06, Nov 2022</p>
														</div>
													</div>
												</div>
												
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget">
														<div class="circle-bar circle-bar3">
															<div class="circle-graph3" data-percent="50">
																<img src="assets/img/icon-03.png" class="img-fluid" alt="Patient"></img>
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Appoinments</h6>
															<h3>85</h3>
															<p class="text-muted">06, Apr 2022</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-12">
									<h4 class="mb-4" id="talajhar">Patient Appoinment</h4>
									<div class="appointment-tab">
									
										{/* <!-- Appointment Tab --> */}
										<ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
											<li class="nav-item">
												<a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
											</li>
											{/* <li class="nav-item">
												<a class="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
											</li>  */}
										</ul>
										{/* <!-- /Appointment Tab --> */}
										
										<div class="tab-content">
										
											{/* <!-- Upcoming Appointment Tab --> */}
											<div class="tab-pane show active" id="upcoming-appointments">
												<div class="card card-table mb-0" id="table">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Purpose</th>
																		<th>Speciality</th>
																		<th class="text-center">Phone</th>
																		<th class="text-center">Status</th>
																		<th class="text-center">Manage</th>
																		
																		
																		<th></th>
																	</tr>
																</thead>
																
																{
																	this.state.myappointment.map(app=>{
																		return(
																								
																<tbody>

																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient.jpg" alt="User Image"></img></a>
																				<a href="patient-profile.html">{app.name} <span>#PT0016</span></a>
																			</h2>
																		</td>
																		<td>{app.date}<span class="d-block text-info">10.00 AM</span></td>
																		<td>{app.purpose}</td>
																		<td>{app.speciality}</td>
																		<td class="text-center">{app.phone}</td>
																		<td> <span class="badge badge-pill bg-success-light">{app.status}</span></td>
																		<td class="text-right">
																			<div class="table-action">
																															
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light"><NavLink to={"/doctorapp/"+app._id}>
																					<i class="fas fa-times"></i> Manage </NavLink>
																				</a>
																			</div>
																		</td>
																	</tr>
																	
																		
																</tbody>
																	)
																})
															}
															</table>		
														</div>
													</div>
												</div>
											</div>
											{/* <!-- /Upcoming Appointment Tab -->
									   
											<!-- Today Appointment Tab --> */}
											<div class="tab-pane" id="today-appointments">
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Purpose</th>
																		<th>Type</th>
																		<th class="text-center">Paid Amount</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient6.jpg" alt="User Image"></img></a>
																				<a href="patient-profile.html">Elsie Gilley <span>#PT0006</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">6.00 PM</span></td>
																		<td>Fever</td>
																		<td>Old Patient</td>
																		<td class="text-center">$300</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="User Image"></img></a>
																				<a href="patient-profile.html">Joan Gardner <span>#PT0006</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">5.00 PM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td class="text-center">$100</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient8.jpg" alt="User Image"></img></a>
																				<a href="patient-profile.html">Daniel Griffing <span>#PT0007</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">3.00 PM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td class="text-center">$75</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient9.jpg" alt="User Image"></img></a>
																				<a href="patient-profile.html">Walter Roberson <span>#PT0008</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">1.00 PM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td class="text-center">$350</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient10.jpg" alt="User Image"></img></a>
																				<a href="patient-profile.html">Robert Rhodes <span>#PT0010</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td class="text-center">$175</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient11.jpg" alt="User Image"></img></a>
																				<a href="patient-profile.html">Harry Williams <span>#PT0011</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td class="text-center">$450</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>		
														</div>	
													</div>	
												</div>	
											</div>
											{/* <!-- /Today Appointment Tab --> */}
											
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>

			</div>		
            </div>
			{/* <!-- /Page Content -->
   
			<!-- Footer --> */}
			</>
)

}
    }

    export default Doctordashboard;