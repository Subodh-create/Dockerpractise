import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { Redirect } from "react-router";


class Patientdashboard extends Component {

	state = {
		myappointment: [],
		myproducts: [],
		config: {
			headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
		}
	}

	
	logOut = (e) => {
		localStorage.clear();
		window.location.href="/home"
	}



	componentDidMount() {
		axios({
			method: "get",
			url: "http://localhost:90/appointments",
			headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
		})
			.then((response) => {
				this.setState({
					myappointment: response.data.data,
				});
			})
			.catch((err) => {
				console.log(err.response);
			});
	}



	deleteProduct = (id) => {
		//id.preventDefault();
		axios.delete("http://localhost:90/appointment/delete/" + id)
			.then((res) => {
				Swal.fire({ title: 'Are you sure?', text: "You won't be able to revert this!", icon: 'warning', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' })
					.then((result) => {
						if (result.isConfirmed) { Swal.fire('Deleted!', 'Your file has been deleted.', 'success') 
						window.location.reload()

					}
					
					})
				

			})
			.catch((e) => {
				console.log(e)
			})

	}

	// componentDidMount() {
	//     axios.get("http://localhost:90/appointments"+this.state.config)
	//         .then((res) => {

	//             console.log(res)
	//             this.setState({
	//                 myappointment: res.data

	//             })
	// 			alert("dd")
	//             // console.log(res.data)
	//         })
	//         .catch((err) => {
	// 				alert("Not authorized")
	// 			// error area
	//         })


	// }
	render() {
		if(!localStorage.getItem('token')){
			return<Redirect to ='/login'/>
	   }
		return (
			<>

				{/* <!-- /Header -->
			
			<!-- Breadcrumb --> */}
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

							{/* <!-- Profile Sidebar --> */}
							<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<div class="profile-sidebar">
									<div class="widget-profile pro-widget-content">
										<div class="profile-info-widget">
											<a href="#" class="booking-doc-img">
												<img src="assets/img/patients/patient.jpg" alt="User Image"></img>
											</a>
											<div class="profile-det-info">
												<h3>{localStorage.getItem('username')}</h3>
												<div class="patient-details">
													<h5><i class="fas fa-birthday-cake"></i> {localStorage.getItem('usertype')}</h5>
													<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</h5>
												</div>
											</div>
										</div>
									</div>
									<div class="dashboard-widget">
										<nav class="dashboard-menu">
											<ul>
												<li class="active">
													<NavLink to="/patientdashboard">
														<i class="fas fa-columns"></i>
														<span>Dashboard</span>
													</NavLink>
												</li>

												<li>
													<a href="profile-settings.html">
														<i class="fas fa-user-cog"></i>
														<NavLink to="/doctor_profile">
															<span>Profile Settings</span></NavLink>
													</a>
												</li>
												
												<li>
													<a href="index-2.html">
														<i class="fas fa-sign-out-alt" onClick={this.logOut}></i>
														<span>Logout</span>
													</a>
												</li>
											</ul>
										</nav>
									</div>

								</div>
							</div>
							{/* <!-- / Profile Sidebar --> */}

							<div class="col-md-7 col-lg-8 col-xl-9">
								<div class="card">
									<div class="card-body pt-0">

										{/* <!-- Tab Menu --> */}
										<nav class="user-tabs mb-4">
											<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
												<li class="nav-item">
													<a class="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
												</li>
												{/* <li class="nav-item">
												<a class="nav-link" href="#pat_prescriptions" data-toggle="tab">Prescriptions</a>
											</li> */}
												<li class="nav-item">
													<a class="nav-link" href="#pat_medical_records" data-toggle="tab"><span class="med-records">Medicine Records</span></a>
												</li>
												{/* <li class="nav-item">
												<a class="nav-link" href="#pat_billing" data-toggle="tab">Billing</a>
											</li> */}
											</ul>
										</nav>
										{/* <!-- /Tab Menu -->
									
									<!-- Tab Content --> */}
										<div class="tab-content pt-0">

											{/* <!-- Appointment Tab --> */}

											<div id="pat_appointments" class="tab-pane fade show active">
												<div class="card card-table mb-0" id="table">
													<div class="card-body">
														<div class="table-responsive" >
															<table class="table table-hover table-center mb-0" >
																<thead>
																	<tr>
																		<th>Doctor</th>
																		<th>Appt Date</th>
																		<th>Purpose</th>
																		<th>Date</th>
																		<th>Speciality</th>
																		<th>Status</th>
																		<th></th>
																	</tr>
																</thead>
																{
																	this.state.myappointment.map(app => {
																		return (

																			<tbody>
																				<tr>
																					<td>
																						<h2 class="table-avatar">
																							<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																								<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image"></img>
																							</a>
																							<a href="doctor-profile.html">{app.doctor} <span>{app.speciality}</span></a>
																						</h2>
																					</td>
																					<td>{app.date} <span class="d-block text-info">10.00 AM</span></td>
																					<td>{app.purpose}</td>
																					<td>{app.date}</td>
																					<td>{app.speciality}</td>
																					<td><span class="badge badge-pill bg-success-light">{app.status}</span></td>
																					<td class="text-right">
																						<div class="table-action">
																							<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																								<i class="fas fa-print"></i><NavLink to={"/updateapp/" + app._id}> Update </NavLink>
																							</a>

																							<a href="javascript:void(0);" class="btn btn-sm bg-danger-light" onClick={() => this.deleteProduct(app._id)}>
																								<i class="fas fa-print" >Delete</i></a>
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
											{/* <!-- /Appointment Tab -->
										
							
											
										<!-- Medical Records Tab --> */}
											<div id="pat_medical_records" class="tab-pane fade">
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>ID</th>
																		<th>Date </th>
																		<th>Description</th>
																		<th>Attachment</th>
																		<th>Created</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>


																	<tr>
																		<td><a href="javascript:void(0);">#MR-0009</a></td>
																		<td>13 Nov 2019</td>
																		<td>Teeth Cleaning</td>
																		<td><a href="#">dental-test.pdf</a></td>
																		<td>
																			<h2 class="table-avatar">
																				<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"></img>
																				</a>
																				<a href="doctor-profile.html">Dr. Darren Elder <span>Dental</span></a>
																			</h2>
																		</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
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
											{/* <!-- /Medical Records Tab -->
										
										<!-- Billing Tab --> */}
											<div id="pat_billing" class="tab-pane fade">
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Invoice No</th>
																		<th>Doctor</th>
																		<th>Amount</th>
																		<th>Paid On</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<a href="invoice-view.html">#INV-0010</a>
																		</td>
																		<td>
																			<h2 class="table-avatar">
																				<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image"></img>
																				</a>
																				<a href="doctor-profile.html">Ruby Perrin <span>Dental</span></a>
																			</h2>
																		</td>
																		<td>$450</td>
																		<td>14 Nov 2019</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="invoice-view.html" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<a href="invoice-view.html">#INV-0009</a>
																		</td>
																		<td>
																			<h2 class="table-avatar">
																				<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"></img>
																				</a>
																				<a href="doctor-profile.html">Dr. Darren Elder <span>Dental</span></a>
																			</h2>
																		</td>
																		<td>$300</td>
																		<td>13 Nov 2019</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="invoice-view.html" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<a href="invoice-view.html">#INV-0008</a>
																		</td>
																		<td>
																			<h2 class="table-avatar">
																				<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image"></img>
																				</a>
																				<a href="doctor-profile.html">Dr. Deborah Angel <span>Cardiology</span></a>
																			</h2>
																		</td>
																		<td>$150</td>
																		<td>12 Nov 2019</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="invoice-view.html" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<a href="invoice-view.html">#INV-0007</a>
																		</td>
																		<td>
																			<h2 class="table-avatar">
																				<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image"></img>
																				</a>
																				<a href="doctor-profile.html">Dr. Sofia Brient <span>Urology</span></a>
																			</h2>
																		</td>
																		<td>$50</td>
																		<td>11 Nov 2019</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="invoice-view.html" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<a href="invoice-view.html">#INV-0006</a>
																		</td>
																		<td>
																			<h2 class="table-avatar">
																				<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image"></img>
																				</a>
																				<a href="doctor-profile.html">Dr. Marvin Campbell <span>Ophthalmology</span></a>
																			</h2>
																		</td>
																		<td>$600</td>
																		<td>10 Nov 2019</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="invoice-view.html" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<a href="invoice-view.html">#INV-0005</a>
																		</td>
																		<td>
																			<h2 class="table-avatar">
																				<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-06.jpg" alt="User Image"></img>
																				</a>
																				<a href="doctor-profile.html">Dr. Katharine Berthold <span>Orthopaedics</span></a>
																			</h2>
																		</td>
																		<td>$200</td>
																		<td>9 Nov 2019</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="invoice-view.html" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<a href="invoice-view.html">#INV-0004</a>
																		</td>
																		<td>
																			<h2 class="table-avatar">
																				<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-07.jpg" alt="User Image"></img>
																				</a>
																				<a href="doctor-profile.html">Dr. Linda Tobin <span>Neurology</span></a>
																			</h2>
																		</td>
																		<td>$100</td>
																		<td>8 Nov 2019</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="invoice-view.html" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<a href="invoice-view.html">#INV-0003</a>
																		</td>
																		<td>
																			<h2 class="table-avatar">
																				<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image"></img>
																				</a>
																				<a href="doctor-profile.html">Dr. Paul Richard <span>Dermatology</span></a>
																			</h2>
																		</td>
																		<td>$250</td>
																		<td>7 Nov 2019</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="invoice-view.html" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<a href="invoice-view.html">#INV-0002</a>
																		</td>
																		<td>
																			<h2 class="table-avatar">
																				<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-09.jpg" alt="User Image"></img>
																				</a>
																				<a href="doctor-profile.html">Dr. John Gibbs <span>Dental</span></a>
																			</h2>
																		</td>
																		<td>$175</td>
																		<td>6 Nov 2019</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="invoice-view.html" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<a href="invoice-view.html">#INV-0001</a>
																		</td>
																		<td>
																			<h2 class="table-avatar">
																				<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-10.jpg" alt="User Image"></img>
																				</a>
																				<a href="doctor-profile.html">Dr. Olga Barlow <span>#0010</span></a>
																			</h2>
																		</td>
																		<td>$550</td>
																		<td>5 Nov 2019</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="invoice-view.html" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
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


										</div>

									</div>
								</div>
							</div>
						</div>

					</div>

				</div>

			</>
		)

	}
}

export default Patientdashboard;