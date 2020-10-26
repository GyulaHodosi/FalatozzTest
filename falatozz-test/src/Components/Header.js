import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

export default function Header(){
    const history = useHistory();

    function handleSelectOption(e) {
        history.push(`/${e.target.getAttribute("name")}`);
    }
    
    return(
        <div className="header">
            <div className="header-title">Falatozz.hu</div>
            <div name="cart" className="header-option" onClick={handleSelectOption}>Cart</div>
            <div name="products" className="header-option" onClick={handleSelectOption}>Products</div>
            <div name="register" className="header-option" onClick={handleSelectOption}>Register</div>
            <div name="login" className="header-option" onClick={handleSelectOption}>Login</div>
        </div>
    )
}