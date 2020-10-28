import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("rgb(139, 1, 1)")
    const [email, setEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const history = useHistory();
    var validator = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    function handleChange(e) {
        if (e.target.name === "name"){
            setName(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
            if (e.target.value !== "") {
                if(!validator.test(e.target.value)) {
                    setMessageColor("rgb(255, 0, 0)");
                    setMessage("Kérjük adj meg valós e-mail címet!")
                    setEmailIsValid(false);
                } else {
                    setMessageColor("rgb(0, 255, 0)");
                    setMessage("E-mail cím helyes!");
                    setEmailIsValid(true);
                }
            } else {
                setMessage("");
                setEmailIsValid(false);
            }
        }
        if (e.target.name === "password"){
            setPassword(e.target.value);
        }
        if (e.target.name === "address"){
            setAddress(e.target.value);
        }
    };

    function handleRegister() {
        if (!name || !email || !password) {
            alert("Kérjük töltsd ki az összes (*)-al jelölt mezőt!");
        } else if (!emailIsValid) {
            alert("Kérjük adj meg valós e-mail címet!");
        } else {
            history.push("/products");
        }
    }

    function goToLogin(){
        history.push("/login");
    }


    return(
        <div className="content-container">
            <div className="backboard">
                <div className="login-message">Regisztráció</div>
                <input name="name" placeholder="*Név" className="input-field" value={name} onChange={handleChange}></input>
                <input name="email" placeholder="*E-mail cím" className="input-field" value={email} onChange={handleChange}></input>
                <div className="validation" style={{color: messageColor}}>{message}</div>
                <input name="password" placeholder="*Jelszó" className="input-field" value={password} onChange={handleChange} type="password"></input>
                <input name="address" placeholder="Cím" className="input-field" value={address} onChange={handleChange}></input>
                <button onClick={handleRegister}>Regisztrálok!</button>
                <button onClick={goToLogin}>Vissza a bejelentkezéshez!</button>
            </div>
        </div>

    )
}