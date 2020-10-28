import React, { useState } from "react";
import CartItem from "../Components/CartItem";
import "./Cart.css";
import { cart, totalPrice } from "../Util/CartData";

export default function Cart() {
    const [currentCart, setCurrentCart] = useState(cart);

    function handleChange() {
        console.log(cart);
        setCurrentCart(cart);
        console.log(cart);
    }

    return(
        <div className="content-container">
            <div className="backboard">
                <div className="login-message">Bevásárló kosár</div>
                <div className="cartitem-container">
                    <div className="row">
                        <div className="col">Termék</div>
                        <div className="col">Egység ár</div>
                        <div className="col">Mennyiség</div>
                        <div className="col">Összeg</div>
                    </div>
                </div>
                {currentCart.map(i => {
                    return <CartItem key={i.id} {...i} handleChange={handleChange}/>
                })}
                <div className="total">Végösszeg: {totalPrice} Ft</div>
                <button onClick={() => alert("Sikeres vásárlás! Köszönjük!")}>Megveszem!</button>
            </div>
        </div>
    )
}