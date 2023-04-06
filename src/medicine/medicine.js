import axios from "axios";
import { Component } from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

class Medicine extends Component {
    state = {
        myproducts: []
        // con : {
        //     headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        // }
    }



    componentDidMount() {
        axios.get("http://localhost:90/Medicine/show")
            .then((res) => {

                console.log(res)
                this.setState({
                    myproducts: res.data.data
                })

                console.log(res.data)
            })
            .catch((err) => {
                // error area
            })
    }

    // delete product funtion
    deleteProduct = (id) => {
        // pro_id.preventDefault();
        axios.delete("http://localhost:90/Medicine/delete/" + id)
            .then((res) => {
                Swal.fire({ title: 'Are you sure?', text: "You won't be able to revert this!", icon: 'warning', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' })
                .then((result) => { if (result.isConfirmed) 
                    { Swal.fire('Deleted!', 'Your file has been deleted.', 'success') }
                    window.location.href = "/medicine"
                 })

                
            })
            .catch((e) => {
                console.log(e)
            })

    }



    render() {
        // if(localStorage.getItem('token') && localStorage.getItem('usertype') === 'Doctor'){
        //     var menu =
            
  
        //   }
        //   else if(localStorage.getItem('token') && localStorage.getItem('usertype') === 'Patient') {
  
        //       var menu = 
              
                
  
        //   }
        //   else{
  
        //       var menu = 
              
  
        //   }
      
    
        return (
            <>

                <header class="container">
                    <h2>MY SHOP</h2>
                    <h2>MY SHOP</h2>
                    <h2>MY SHOP</h2>
                
                    <h2><center id="abcdef">My Pharmacy</center></h2>
                    <p id="abcdef"><center>Get what you want in a single click!</center></p>
                    <p></p>
                    <center><h3><button class="btn btn-sm bg-success-light" id="product-insert"><NavLink to ="/medicineinsert">
							Product Insert
                            </NavLink></button> </h3></center>
                </header>

                {
                    this.state.myproducts.map(product => {
                        return (
                            <center> <div class="col-md-7 col-lg-8 col-xl-9" id="abcde">
                                <div class="appointments">
                                    <div class="appointment-list">
                                        <div class="profile-info-widget">
                                            <a href="patient-profile.html" class="booking-doc-img">
                                                <img src="assets/img/patients/patient.jpg" alt="User Image"></img>
                                            </a>
                                            <div class="profile-det-info">
                                                <h4><a href="patient-profile.html"><b>{product.medicinename}</b></a></h4>
                                                <div class="patient-details">
                                                    <h5><i class=""></i> Quantity: <b>{product.quantity}</b></h5>
                                                    <h5><i class=""></i> Price :   <b>{product.price}</b></h5>
                                                    <h5><i class=""></i> Exp Date: <b>{product.expdate}</b></h5>
                                                    {/* <h5 class="mb-0"><i class="fas fa-phone"></i>{product.pname}</h5> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="appointment-action">
                                            <a>
                                                <button class="btn btn-sm bg-danger-light" onClick={() => this.deleteProduct(product._id)}>Delete</button>
                                            </a>
                                            <a>
                                            <button class="btn btn-sm bg-danger-light"> <NavLink to ={"/update/"+product._id}>Update</NavLink></button> 
                                            </a>
                                            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                <i class="fas fa-times"></i> Cancel
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div></center>
                        )
                    })
                }

            </>
        )
    }
}

export default Medicine;