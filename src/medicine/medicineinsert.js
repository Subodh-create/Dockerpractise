import axios from "axios";
import { Component } from "react";
import Swal from "sweetalert2";
import { Redirect } from "react-router";


class medicineinsert extends Component{
    state = {
        medicinename : "",
        price : "",
        expdate : "",
        quantity : "",
        // filename: null,

        // con : {
        //     headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        // }

    }
    textChangeHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    changeFileHandler=(e)=>{
        this.setState({
            filename : e.target.files[0]
        })
    }

    sendData = (e)=>{
        e.preventDefault();
        const data =  new FormData();

        data.append('price', this.state.price)
      //  data.append('title', this.state.title)
        data.append('medicine_img', this.state.filename)
        axios.post("http://localhost:90/Medicine/insert", data)
        .then((result)=>{
            console.log(result)
        })
        .catch()
    }

    insertData = (e)=>{
        e.preventDefault();
        
const data={
    medicinename : this.state.medicinename,
    price : this.state.price,
    expdate : this.state.expdate,
    quantity : this.state.quantity,
   // filename: this.state.filename,
    }
      
        axios.post("http://localhost:90/Medicine/insert", data)
        .then((result)=>{
            Swal.fire({ title: 'Inserted', text: "Inserted Sucessfully Send", icon: 'success', showCancelButton: false, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'OK' })
			.then((result) => { if (result.isConfirmed) 
				{ Swal.fire('Your Medicine Sucessfully Inserted', 'Go to the medicine') }
				window.location.href = "/medicine"
			 })

        })
        .catch((e)=>{
            
            alert("unauthorized")
            window.location.href="/Home"
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
       
            <h2><center>Insert Your Product</center></h2>
            <p><center></center></p>
            <p></p>
            
        </header>
            <center> <div class="col-lg-6 intro_col">
            <div class="intro_form_container">
                <div class="intro_form_title">Insert Product</div>
            
                <form action="#" class="intro_form" id="intro_form">
                    <div class="d-flex flex-row align-items-start justify-content-between flex-wrap">
                        <input type="text" class="intro_input" name = "medicinename" placeholder ="Medicinename"
                        value={this.state.medicinename}
                        onChange={this.textChangeHandler} 
                       >

                        </input>
                        <input type="number" class="intro_input"name = "price" placeholder ="Price"
                        value={this.state.price}
                        onChange={this.textChangeHandler} ></input>


                        <input type="number" class="intro_input"name = "quantity" placeholder ="Quantity"
                        value={this.state.quantity}
                        onChange={this.textChangeHandler} ></input>

                       <input type="text" class="intro_input"name = "expdate" placeholder ="exp date"
                        value={this.state.expdate}
                        onChange={this.textChangeHandler} ></input>

                        
                        {/* <input type="file" name = "medicine_img"
                      
                        onChange={this.changeFileHandler} ></input>
                     */}
                    </div>
                    <button class="button button_1 intro_button trans_200" onClick={this.insertData}>Insert</button>
                </form>
            </div>
        </div></center>
</>

        )
    }


}

export default medicineinsert