import { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "bootstrap";

class profile extends Component{

    state={
		id: localStorage.getItem("D_id"),
		profile_pic: "",
		username:"",
        usertype:"", 
        phone:"",
        email:"",
        gender:"",
		con: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }

	}

    componentDidMount(){
        axios({method: "get",
        url: "http://localhost:90/doctor/showone/"+this.state.id,
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },})
        .then((res) => {
            console.log(res.data)

     this.setState({
		        profile_pic:res.data.data.profile_pic,
                username: res.data.data.username,
                usertype: res.data.data.usertype,
                phone:res.data.data.phone,
                email: res.data.data.email,
                gender:res.data.data.gender

            })

            console.log(res.data)
        })
        .catch((err) => {
            // error area
        })
}
    

    updateProduct = (e) => {
        // pro_id.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })

    }

	changeFileHandler=(e)=>{
		this.setState({

			profile_pic:e.target.files[0]
		})
	}

	btnInsert=(e)=>{
		e.preventDefault();
		const data=new FormData();
		data.append("myimage",this.state.profile_pic)
		axios.post("http://localhost:90/profile/upload",data)
		.then((res)=>{
			console.log(res)
			alert("success")
		})
		.catch((e)=>{
			alert("no")
		})

	}



    updateMedicine =(e) =>{
      e.preventDefault();
	  const data=new FormData();
      axios.put("http://localhost:90/doctor/update/",this.state)
      .then(res=>{
        Swal.fire({ title: '', text: "Successfully updated", icon: 'success', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'OK' })
        .then((result) => { if (result.isConfirmed) 
            { Swal.fire('Updated!', 'Your file has been updated.', 'success') }
            window.location.href = "/doctorprofile"
         })
         

      })
      .catch(res=>{
        console.log(e)

      })
    }



 render(){
        return(
            <>
<div>
                        
						<li class="nav-item dropdown has-arrow logged-item">
							<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
								<span class="user-img">
									<img class="rounded-circle" img src={`http://localhost:90/medicinePic/${this.state.profile_pic}`} width="31" alt="Darren Elder"></img>

								</span>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
								<div class="user-header">
									<div class="avatar avatar-sm">
										<img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" class="avatar-img rounded-circle"></img>
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

			
			{/* <!-- Breadcrumb --> */} 
			<div class="breadcrumb-bar">
				<div class="container-fluid">
					<div class="row align-items-center">
						<div class="col-md-12 col-12">
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Profile Settings</li>
								</ol>
							</nav>
							<h2 class="breadcrumb-title">Profile Settings</h2>
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
											<img src={`http://localhost:90/medicinePic/${this.state.profile_pic}`} alt="User Image"/>
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
											<li>
												<a href="#">
													<i class="fas fa-columns"></i>
													<span><NavLink to = "/doctordashboard">Dashboard</NavLink></span>
												</a>
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
									
											<li class="active">
												<a href="profile-settings.html">
													<i class="fas fa-user-cog"></i>
                                                    <span><NavLink to = "/profile/:id">Profile Settings</NavLink></span>
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
						</div>
						{/* <!-- /Profile Sidebar --> */}
						
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card">
								<div class="card-body">
									
									{/* <!-- Profile Settings Form --> */}
									<form>
										<div class="row form-row">
											<div class="col-12 col-md-12">
												<div class="form-group">
													<div class="change-avatar">
														<div class="profile-img">
															<img src={`http://localhost:90/medicinePic/${this.state.profile_pic}`} alt="User Image"/>
														</div>
														<div class="upload-img">
															<div class="change-photo-btn">
																<span><i class="fa fa-upload"></i> Upload Photo</span>
																
																<input type="file" class="upload" name="files"onChange={this.changeFileHandler}/>
															</div>

															<button onClick={this.btnInsert}>Insert garni</button>
															<small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>User Name</label>
													<input type="text" class="form-control" name="username"
                                                    value={this.state.username}
                                                    onChange={this.updateProduct}/>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Usertype</label>
													<input type="text" class="form-control" name = "usertype" value={this.state.usertype}
                                                    onChange={this.updateProduct}/>
												</div>
											</div>
										
											
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Email ID</label>
													<input type="email" class="form-control" name = "email" value={this.state.email}
                                                    onChange={this.updateProduct}/>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Mobile</label>
													<input type="text"  class="form-control" name = "gender" value={this.state.gender}
                                                    onChange={this.updateProduct}/>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
												<label>Phone</label>
													<input type="text" class="form-control" name = "phone" value={this.state.phone}
                                                    onChange={this.updateProduct}/>
												</div>
											</div>
																						
																	
										</div>
										<div class="submit-section">
											<button type="submit" class="btn btn-primary submit-btn" onClick = {this.updateMedicine}>Save Changes</button>
										</div>
									</form>
									{/* <!-- /Profile Settings Form --> */}
									
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

export default profile