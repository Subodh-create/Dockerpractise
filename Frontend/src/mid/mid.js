import { Route, Switch } from "react-router";
import About from "../about/about";
import Home from "../home/home";
import Login from "../login/login";
import Register from "../Register/register";
import Medicine from "../medicine/medicine";
import medicineinsert from "../medicine/medicineinsert";
import profile from "./profile";
import Patientdashboard from "../dashboard/patientdashboard";
import Doctordashboard from "../dashboard/doctordasboard";
import Appointments from "../appointments/appointments";
import Update from "../medicine/update";
import updateapp from "../appointments/updateapp"
import DoctorProfile from "./doctor_profile";
import patmedicine from "../medicine/patmedicine";
import doctorapp from "../appointments/doctorapp";
const { Component } = require("react");


class Mid extends Component{
    render(){
        return(
            <>
            
			<Switch>

				<Route path="/about" component={About}></Route>
                <Route path="/medicineinsert" component={medicineinsert}></Route>
                <Route path="/update/:idd" component={Update}></Route>
                <Route path="/updateapp/:idd" component={updateapp}></Route>
                <Route path="/appointments" component={Appointments}></Route>
                <Route path="/medicine" component={Medicine}></Route>
                <Route path="/doctordashboard" component={Doctordashboard}></Route>
                <Route path="/patientdashboard" component={Patientdashboard}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/profile/:id" component={profile}></Route>
                <Route path="/doctorprofile" component={DoctorProfile}/>
                <Route path="/patmedicine" component={patmedicine}/>
                <Route path="/doctorapp/:idd" component={doctorapp}/>

				<Route path="/" component={Home}></Route>
             

				
			</Switch>
            
	
            </>
        )
    }
}
export default Mid
