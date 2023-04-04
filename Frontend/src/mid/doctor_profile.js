import axios from "axios";
import { Component } from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

class DoctorProfile extends Component {
    state = {
        doctors: {},
        id:localStorage.getItem("D_id")
        
        // con : {
        //     headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        // }
    }



    componentDidMount() {
        axios.get("http://localhost:90/doctor/showone/"+this.state.id)
            .then((res) => {

                console.log(res.data.data)
                this.setState({
                    doctors: res.data.data
                })

             
            })
            .catch((err) => {
                console.log(err)
                // error area
            })
    }

    



    render() {
    

      
    
        return (
            <>

                <header class="container">
                    <h2>MY SHOP</h2>
                    <h2>MY SHOP</h2>
                    <h2>MY SHOP</h2>
                
                    <h2><center id="profile">My Profile</center></h2>
                    <p><center id="profile">Manage your profile</center></p>
                    <p></p>
                    <center><p> </p></center>
                </header>
                <center> <div class="col-md-7 col-lg-8 col-xl-9" id="abcde">
                                <div class="appointments">
                                    <div class="appointment-list">
                                        <div class="profile-info-widget">
                                            <a href="patient-profile.html" class="booking-doc-img">
                                                <img src="assets/img/patients/patient.jpg" alt="User Image"></img>
                                            </a>
                                            <div class="profile-det-info">
                                                <h4><a href="patient-profile.html"><b>{this.state.doctors.username}</b></a></h4>
                                                <div class="patient-details">
                                                    <h5><i class=""></i> Usertype: <b>{this.state.doctors.usertype}</b></h5>
                                                    <h5><i class=""></i> Gender :   <b>{this.state.doctors.gender}</b></h5>
                                                    <h5><i class=""></i> Email :   <b>{this.state.doctors.email}</b></h5>
                                                    <h5><i class=""></i> Phone :   <b>{this.state.doctors.phone}</b></h5>
                                                    {/* <h5><i class=""></i> Exp Date: <b>{doctor.expdate}</b></h5> */}
                                                    <h5><i class=""></i>   <b></b></h5>
                                                
                                                    <a>
                                            <button class="btn btn-sm bg-danger-light"> <NavLink to ={"/profile/"+this.state.doctors._id}>Update</NavLink></button> 
                                            </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="appointment-action">
                                            {/* <a>
                                                <button class="btn btn-sm bg-danger-light" onClick={() => this.deleteProduct(doctor._id)}>Delete</button>
                                            </a> */}
                                           
                                          
                                        </div>
                                    </div>
                                </div>
                            </div></center>

                {
                    // this.state.doctors.map(doctor => {
                    //     return (
                           
                    //     )
                    // })
                }

            </>
        )
    }
}

export default DoctorProfile;