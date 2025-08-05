import React ,{useState} from "react";
import './App.css';

export default function Signup(){
    const [isLogin,setIsLogin]=useState(false);
    return(
        <div className="container"> 

            <div className="form-container">
                <div className="form-toggle">
                <button className={isLogin ? 'active' : " "} onClick={()=> setIsLogin(true)}> Login </button>
                <button className={isLogin ? '' : " active "} onClick={()=> setIsLogin(false)}> SignUp </button>
                </div>
                {isLogin? <>
                <div className="form">
                    <h2> Login Form</h2>
                    <input type='email' placeholder="Email"/>
                    <input type='password' placeholder="Password"/>
                    <a href='#'> Forgot password?</a>
                    <button> Login </button>
                    <p> Not a member? <a href='#' onClick={()=> setIsLogin(false)}>Signup now</a></p> 
                </div>
                </> : 
                <div className="form">
                    <h2> SignUp Form</h2>
                    <input type='text' placeholder=" First Name"/>
                    <input type='text' placeholder=" Last Name"/>
                    <input type='text' placeholder="Institution"/>
                    <input type='email' placeholder="Email"/>
                    <input type='password' placeholder="Password"/>
                    <input type='password' placeholder=" Confirm Password"/>
                    <button> SignUp </button>
                </div>
                }
            </div>
        </div>
    )
}
