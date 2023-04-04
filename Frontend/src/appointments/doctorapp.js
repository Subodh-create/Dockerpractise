import { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

class doctorapp extends Component{
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
                date:res.data.data.date,
                status:res.data.data.status
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
            [e.target.name]: e.target.value0
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
            window.location.href = "/doctordashboard"
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
               
                    <h2><center>Manage your Appointment</center></h2>
                    <p><center></center></p>
                    <p></p>
                    
                </header>
<center> <div class="col-lg-6 intro_col">
                                <div class="intro_form_container">
                                    <div class="intro_form_title">Manage your Appointment</div>
                                    <form action="#" class="intro_form" id="intro_form">
                                        <div class="d-flex flex-row align-items-start justify-content-between flex-wrap">
                                           

                                            <select class="intro_select intro_input" name="status" value={this.state.status} onChange={this.updateProduct}>
                                               
                                                <option value="Confirm">Confirm</option>
                                                <option value="Cancel">Cancel</option>
                                                
                                              

                                            </select>
                                            
                                        </div>
                    
                    <button class="button button_1 intro_button trans_200" onClick={this.btnupdateProduct}>Update</button>
                </form>
            </div>
        </div></center>



            </>
            )
            
            }
                }
            
                export default doctorapp;