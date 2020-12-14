import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const [email,setEmail] = useState("");
    const [passowrd,setPassword] = useState("");

    const login = () => {
        if(email=="" || passowrd==""){
            alert("fill up all the fields");
        }
        else {
            alert("please click on create account to create an account!");
        }
    }

    return (
        <>
            <div className="box">
                <div className="header">
                    <h3>Log In to your account</h3>
                </div>
                <div className="input">
                    <input type="email" placeholder="Email Address" value={email} onChange= {(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" value={passowrd} onChange= {(e) => setPassword(e.target.value)} />
                </div>
                <div className="login">
                    <a onClick={login}>Log In <i class="fa fa-sign-in" aria-hidden="true"></i></a>
                </div>
                <div className="other">
                    <a href="">Forgot Password?</a>
                    <NavLink className="create" exact to="/reg" >Create Account <i class="fa fa-arrow-right"></i></NavLink>
                </div>
            </div>
        </>
    )
}

export default Login;
