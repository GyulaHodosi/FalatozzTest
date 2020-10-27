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
            <img alt="logo" className="logo" src="https://png2.cleanpng.com/sh/268b45b48074a5bd6378895ff6193905/L0KzQYm3VsA6N6t7e5H0aYP2gLBuTfxidaEyhNtwaISwdb3sgCRzcZRujOs2b3LkfbK0jP9od153h9H2LXTyfbP5gb02amJnfNhtZHS1c4HtUb46OGIATqgCN0G4Qom8VcM1O2g9TqU8LoDxd1==/kisspng-lamp-light-electricity-obama-logo-room-dombra-5b1bdfddd2c0f1.9019667715285534378633.png"></img>
            <div className="header-title">lampify.</div>
            <div name="cart" className="header-option" onClick={handleSelectOption}>Kosár</div>
            <div name="products" className="header-option" onClick={handleSelectOption}>Termékek</div>
            <div name="register" className="header-option" onClick={handleSelectOption}>Regisztráció</div>
            <div name="login" className="header-option" onClick={handleSelectOption}>Bejelntkezés</div>
        </div>
    )
}