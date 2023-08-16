import { useState } from "react";
import "./style.css"
import axios from "axios";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Login = () =>{
    const location = useLocation();
    const [Signup, setSignUp] = useState({
        fName:"",
        lName:"",
        email:"",
        password:"",
        phoneNo:"",
        repassword:""
    })
    const [form, setForm] = useState({
        username:"",
        password:""
    });
    const [isSignUp, setIsSignUp] = useState(false);

    const handleChange = (e) =>{
        let temp = {
            [e.target.name] : e.target.value 
        }
        // console.log(e, e.target)
        setForm({
            ...form, ...temp
        })
    }

    const handleSignupChange = (e) =>{
        let temp = {
            [e.target.name] : e.target.value 
        }
        // console.log(e, e.target)
        setSignUp({
            ...Signup, ...temp
        })
    }

    useEffect(()=>{
        if(location.pathname.includes("signup")){
            setIsSignUp(true)
        }else(setIsSignUp(false))
    },[location])

    const handleSubmit = async() => {
        try{
            const res = await axios.post("https://poochku-prod.azurewebsites.net/auth/login", form);
            console.log(res, "response")
        }catch(err){
            console.log(err)
        }
    }

    const handleSellerSignupSubmit = async() => {
        try{
            const res = await axios.post("https://poochku-prod.azurewebsites.net/user", {...Signup, role:"seller"});
            console.log(res, "response")
        }catch(err){
            console.log(err)
        }
    }

    const handleSignupSubmit = async() => {
        try{
            const res = await axios.post("https://poochku-prod.azurewebsites.net/user", {...Signup, role:"user"});
            console.log(res, "response")
        }catch(err){
            console.log(err)
        }
    }

  return(
    <div className="loginWrapper">
        <div className="loginBg"></div>
        {!isSignUp && <div className="loginActions">
            <h1>Woof woof, hooman!</h1>
            <form className="loginForm">
                <div><label>Phone Number</label>
                <input type="number" onChange={(e)=>handleChange(e)} placeholder="Enter your Phone Number" name="username" value={form.username}/></div>
                <div><label>Password</label>
                <input type="password" onChange={(e)=>handleChange(e)} placeholder="Enter Password" name="password" value={form.password} /></div>
            </form>
            <button onClick={handleSubmit} className="LoginButton">Login</button>
            <Link to="/signup">Sign Up</Link>
        </div>}
        {isSignUp && <div className="loginActions">
            <h1>Sign up on Poochku!</h1>
            <form className="loginForm signup">
                <div className="formWrapper">
                    <div>
                        <label>First Name</label>
                        <input type="text" onChange={(e)=>handleSignupChange(e)} placeholder="Enter First Name" name="fName" value={Signup.fname} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" onChange={(e)=>handleSignupChange(e)} placeholder="Enter Last Name" name="lName" value={Signup.lname} />
                    </div>
                </div>
                <div className="formWrapper">
                    <div>
                        <label>Email</label>
                        <input type="email" onChange={(e)=>handleSignupChange(e)} placeholder="Enter email" name="email" value={Signup.email} />
                    </div>
                    <div>
                        <label>Whatsapp Number</label>
                        <input type="number" onChange={(e)=>handleSignupChange(e)} placeholder="Enter Whatsapp Number" name="phoneNo" value={Signup.phoneNo} />
                    </div>
                </div>
                <div className="formWrapper">
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={(e)=>handleSignupChange(e)} placeholder="Enter Password" name="password" value={Signup.password} />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" onChange={(e)=>handleSignupChange(e)} placeholder="Renter your password" name="repassword" value={Signup.repassword} />
                    </div>
                </div>
            </form>
            <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"start"}}>
                <button onClick={()=>handleSignupSubmit()} className="LoginButton">Sign up</button>
                <button onClick={()=>handleSellerSignupSubmit()} className="LoginButton">Seller Sign up</button>
            </div>
        </div>}
    </div>
  );
}

export default Login;
