import { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Redirect } from "react-router";

class Update extends Component{
    state={
		id: this.props.match.params.idd,
		medicinename:"",
        price:"", 
        quantity:"",
	}

    componentDidMount(){
        axios.get("http://localhost:90/Medicine/showone/" +this.state.id)
        .then((res) => {
            console.log(res.data)

     this.setState({
                medicinename: res.data.data.medicinename,
                price: res.data.data.price,
                quantity:res.data.data.quantity
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

    updateMedicine =(e) =>{
      e.preventDefault();
      axios.put("http://localhost:90/Medicine/update/",this.state)
      .then(res=>{
        Swal.fire({ title: '', text: "Successfully updated", icon: 'success', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'OK' })
        .then((result) => { if (result.isConfirmed) 
            { Swal.fire('Updated!', 'Your file has been updated.', 'success') }
            window.location.href = "/medicine"
         })
         

      })
      .catch(res=>{
        console.log(e)

      })
    }





    render(){
        if(!localStorage.getItem('token')){
            return<Redirect to ='/login'/>
       }
        return(
            <>
            <header class="container">
                    <h2>MY SHOP</h2>
                    <h2>MY SHOP</h2>
                    <h2>MY SHOP</h2>
               
                    <h2><center>Update Your Medicine</center></h2>
                    <p><center></center></p>
                    <p></p>
                    
                </header>
<center> <div class="col-lg-6 intro_col">
            <div class="intro_form_container">
                <div class="intro_form_title">Update Your medicine</div>
            
                <form action="#" class="intro_form" id="intro_form">
                    <div class="d-flex flex-row align-items-start justify-content-between flex-wrap">
                        <input type="text" class="intro_input" name = "medicinename" 
                        value={this.state.medicinename}
                        onChange={this.updateProduct} 
                       >

                        </input>
                        <input type="purpose" class="intro_input"name = "price" 
                        value={this.state.price}
                        onChange={this.updateProduct} ></input>


                        <input type="tel" class="intro_input"name = "quantity"
                        value={this.state.quantity}
                        onChange={this.updateProduct} ></input>
                    
                    </div>
                    <button class="button button_1 intro_button trans_200" onClick={this.updateMedicine}>Update</button>
                </form>
            </div>
        </div></center>



            </>
            )
            
            }
                }
            
                export default Update;