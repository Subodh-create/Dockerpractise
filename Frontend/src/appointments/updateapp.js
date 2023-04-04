import { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

class updateapp extends Component{
    state={
		id: this.props.match.params.idd,
        name: "",
        purpose: "",
        phone: "",
        speciality: "",
        doctor: "",
        date: "",
        
        config : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }

		
	}

    componentDidMount(){
        axios({method: "get",
        url: "http://localhost:90/appointment/showone/"+this.state.id,
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },})
        .then((res) => {
            console.log(res.data)
            

     this.setState({
                name: res.data.data.name,
                purpose: res.data.data.purpose,
                phone:res.data.data.phone,
                speciality:res.data.data.speciality,
                doctor:res.data.data.doctor,
                date:res.data.data.date
            })

            console.log(res.data.data)
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

    onselectHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    btnupdateProduct =(e) =>{
      e.preventDefault();
      axios.put("http://localhost:90/appointment/update/",this.state,this.state.config)
      .then(res=>{
          console.log(res)
        Swal.fire({ title: '', text: "Successfully updated", icon: 'success', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'OK' })
        .then((result) => { if (result.isConfirmed) 
            { Swal.fire('Updated!', 'Your file has been updated.', 'success') }
            window.location.href = "/patientdashboard"
         })
         

      })
      .catch(res=>{
        console.log(e)

      })
    }





    render(){
        return(
            <>
            <header class="container">
                    <h2>MY SHOP</h2>
                    <h2>MY SHOP</h2>
                    <h2>MY SHOP</h2>
               
                    <h2><center>Update Your Appointment</center></h2>
                    <p><center></center></p>
                    <p></p>
                    
                </header>
<center> <div class="col-lg-6 intro_col">
                                <div class="intro_form_container">
                                    <div class="intro_form_title">Make an Appointment</div>
                                    <form action="#" class="intro_form" id="intro_form">
                                        <div class="d-flex flex-row align-items-start justify-content-between flex-wrap">
                                            <input type="text" class="intro_input" name="name" required="required"
                                                value={this.state.name}
                                                onChange={this.updateProduct}>
                                            </input>
                                            <input type="text" class="intro_input"  name="purpose" required="required" value={this.state.purpose} onChange={this.updateProduct}></input>
                                            <input type="text" class="intro_input" name="phone" required="required" value={this.state.phone} onChange={this.updateProduct}></input>
                                            <select class="intro_select intro_input" name="speciality" value={this.state.speciality} onChange={this.updateProduct}>
                                                <option>Speciality</option>
                                                <option value="Cardiology">Cardiology</option>
                                                <option value="Neurology">Neurology</option>
                                                <option value="orthopedics">orthopedics</option>
                                                <option value="Gastrology">Gastrology</option>

                                            </select>

                                            <select class="intro_select intro_input" name="doctor" value={this.state.doctor} onChange={this.updateProduct}>
                                                <option>Doctor</option>
                                                <option value="DR. Pawan Singh">Dr. pawan Singh</option>
                                                <option value="DR. Rajiv Karki">DR. Rajiv Karki</option>
                                                <option value="DR. Subodh Shah">DR. Subodh Shah</option>
                                                <option value="DR. Roshan Tamang">DR. Roshan Tamang</option>

                                            </select>
                                            <input type="text" id="datepicker" class="intro_input datepicker"  name="date" value={this.state.date} onChange={this.updateProduct}></input>
                                        </div>
                    
                    <button class="button button_1 intro_button trans_200" onClick={this.btnupdateProduct}>Update</button>
                </form>
            </div>
        </div></center>



            </>
            )
            
            }
                }
            
                export default updateapp;