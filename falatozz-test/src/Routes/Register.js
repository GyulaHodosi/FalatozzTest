import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const history = useHistory();

    function handleChange(e) {
        if (e.target.name === "name"){
            setName(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "password"){
            setPassword(e.target.value);
        }
        if (e.target.name === "address"){
            setAddress(e.target.value);
        }
    };

    function handleRegister() {
        history.push("/products");
    }

    function goToLogin(){
        history.push("/login");
    }


    return(
        <div className="content-container">
            <div className="backboard">
                <div className="login-message">Regisztráció</div>
                <input name="name" placeholder="Név" className="input-field" value={name} onChange={handleChange}></input>
                <input name="email" placeholder="E-mail cím" className="input-field" value={email} onChange={handleChange}></input>
                <input name="password" placeholder="Jelszó" className="input-field" value={password} onChange={handleChange} type="password"></input>
                <input name="address" placeholder="Cím" className="input-field" value={address} onChange={handleChange}></input>
                <button onClick={handleRegister}>Regisztrálok!</button>
                <button onClick={goToLogin}>Vissza a bejelentkezéshez!</button>
            </div>
        </div>

    )
}