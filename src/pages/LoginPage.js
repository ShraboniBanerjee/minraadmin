import React from "react";
import "../../assets/css/login.css"
import authLayout from "../../hoc/authLayout";
import {
    Link,
    useNavigate,
  } from 'react-router-dom';
  
class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {username:"",password: "","message":"" };
       
  
    }
    checkToken = () => {
        if(localStorage.getItem("data")){
            // get token and do anything
            console.log(JSON.parse(localStorage.getItem("data")))
            this.setState(JSON.parse(localStorage.getItem("data")))
            this.setState({message:"User already exists"})
          
        }
    }
    componentDidMount(){
        this.checkToken()
    }
    handleSignin = async(e) =>{
        e.preventDefault();
        if(localStorage.getItem("data")){
            // get token and do anything
            console.log(JSON.parse(localStorage.getItem("data")))
            this.setState(JSON.parse(localStorage.getItem("data")))
            this.setState({message:"User already exists"})
            return true;
        }
        // let res = await fetch("http://127.0.0.1:8000/userLogin/",{
            let res = await fetch("https://django.rhgl9cf0lt9s2.ap-south-1.cs.amazonlightsail.com/userLogin/",{
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),headers: {
                'content-type': "application/json"
            },
        })
        let data = await res.json()
        if(data.token){
            this.setState({user:"logged_in",token: data.token.access, refreshToken:data.token.refresh, message: "User Logged in", username:"",password:"" })
            localStorage.setItem("data",JSON.stringify(this.state));
            const navigate = useNavigate();
            navigate('/dashboard')
            return true

        }else{
   
            console.log(data.errors)
            this.setState({user:"not_logged_in", message: data.errors.none_field_errors[0] })
        }
        

    }
    handleUsername = (e) =>{
       this.setState({username:e.target.value})
    }

    handlePassword =(e) =>{
       this.setState({password:e.target.value})
    }
   

    render(){
        return<>
            {this.state.user === "logged_in" && "<h1> user is loggged in</h1>"}
            {this.state.user !== "logged_in"  && <form className="login-form" onSubmit={this.handleSignin}>
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
                    { this.state.message !== '' && <div className="alert alert-info">{this.state.message}</div>}
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" value={this.state.username} onChange={this.handleUsername} />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" value={this.state.password} onChange={this.handlePassword} />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                    </label>
                    </div>
                    <Link to="/reset-password" className="text-body">Forgot password?</Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <input type="submit" defaultValue="Login" ></input>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                        className="link-danger">Register</a></p>
                </div>
            </form>
    }
        </>
    }
}

export default authLayout(LoginPage);