import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("rgb(139, 1, 1)")
    const [email, setEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [password, setPassword] = useState("");
    const history = useHistory();
    var validator = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    function handleChange(e) {
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
    };

    function handleLogin(){
        if(emailIsValid && password !== "") {
            history.push("/products");
        } else if (password === "") {
            alert("Kérjük add meg a jelszavad!");
        } else {
            alert("Kérjük adj meg egy valós e-mail címet!");
        }
    }

    function goToRegister(){
        history.push("/register");
    }

    return(
        <div className="content-container">
            <div className="backboard">
                <div className="login-message">Kérjük jelentkezz be!</div>
                <input name="email" placeholder="E-mail cím" className="input-field" value={email} onChange={handleChange}></input>
                <div className="validation" style={{color: messageColor}}>{message}</div>
                <input name="password" placeholder="Jelszó" className="input-field" value={password} onChange={handleChange} type="password"></input>
                <button onClick={handleLogin}>Bejelntkezek!</button>
                <button onClick={goToRegister}>Regisztrálok!</button>
            </div>
        </div>
    )
}