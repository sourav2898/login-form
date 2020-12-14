import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Reg = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");

    const create = () => {
        if(name=="" || email=="" || password=="" ||confirm==""){
            alert("please fill in all the fields.");
        }
        else if(password != confirm){
            alert("enter the same password in password and confirm password");
        }
        else{
            alert("account created! Thank You.");
            setName("");
            setEmail("");
            setPassword("");
            setConfirm("");
        }
    }

    return (
        <>
            <div className="box" onsubmit="return validateForm()">
                <div className="header">
                    <h3>Create an account</h3>
                </div>
                <div className="input">
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input">
                    <input type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
                </div>
                <div className="check">
                    <input type="checkbox" inline="true"/>
                    <span> I accept the term and condition</span>
                </div>
                <div className="login">
                    <a onClick={create}>Create Account </a>
                </div>
                <div className="other">
                    <a href="">Forgot Password?</a>
                    <NavLink className="log" exact to="/" >Have an account? Login now</NavLink>
                </div>
            </div>
        </>
    )
}

export default Reg;
