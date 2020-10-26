import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function handleChange(e) {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "password"){
            setPassword(e.target.value);
        }
    };

    function handleLogin(){
        history.push("/products");
    }

    function goToRegister(){
        history.push("/register");
    }

    return(
        <div className="content-container">
            <div className="login-container">
                <div className="login-message">Please log in!</div>
                <input name="email" placeholder="Email address" className="input-field" value={email} onChange={handleChange}></input>
                <input name="password" placeholder="Password" className="input-field" value={password} onChange={handleChange} type="password"></input>
                <button onClick={handleLogin}>Login</button>
                <button onClick={goToRegister}>Register</button>
            </div>
        </div>
    )
}