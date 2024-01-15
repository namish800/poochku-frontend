import { useState } from "react";
import "./style.scss"
import axios from "axios";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Login = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false)
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
        setLoading(true)
        try{
            const res = await axios.post("https://poochku-prod.azurewebsites.net/auth/login", form);
            console.log(res, "response")
            if(res.status===200){
                localStorage.setItem('userId', res.data.user.userId);
                localStorage.setItem('email', res.data.user.email);
                localStorage.setItem('fName', res.data.user.fName);
                localStorage.setItem('lName', res.data.user.lName);
                localStorage.setItem('phoneNo', res.data.user.phoneNo);
                localStorage.setItem('role', res.data.user.role);
                navigate("/browse")
            }
        }catch(err){
            console.log(err);
            setLoading(false)
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

    const goToSignup = () => {
        navigate("/signup")
    }

    const enterPressed = (e) => {
        if(e.code === "Enter"){
            // setLoading(true);
            handleSubmit();
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
                <input type="password" onChange={(e)=>handleChange(e)} onKeyDown={enterPressed} placeholder="Enter Password" name="password" value={form.password} /></div>
            </form>
            <div style={{display:"flex", justifyContent:"start", flexDirection:"row", alignItems:"center"}}>
                <button onClick={handleSubmit} className="LoginButton">{loading ? <CircularProgress color="secondary" size={20} sx={{color:"white"}} /> : "Login"}</button>
                <p style={{margin:"0px 10px 0"}}>Or</p>
                <Link style={{marginLeft:"20px"}} to="/signup"><button onClick={()=>goToSignup} className="signup">Signup</button></Link>
            </div>
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
            <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"start", alignItems:"center"}}>
                <button onClick={()=>handleSignupSubmit()} className="LoginButton">Sign up</button>
                <p style={{marginBottom:"0", marginRight:"20px"}}>Or</p>
                <button onClick={()=>handleSellerSignupSubmit()} className="signup">Seller Sign up</button>
            </div>
        </div>}
    </div>
  );
}

export default Login;
