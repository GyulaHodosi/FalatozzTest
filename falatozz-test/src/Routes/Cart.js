import React from "react";
import CartItem from "../Components/CartItem";
import "./Cart.css";

export default function Cart() {


    const cart = [
        { id: 1, name: "Lamp1", price: 5600, quantity: 2, total: 11200},
        { id: 2, name: "Lamp2", price: 6000, quantity: 1, total: 12000},
        { id: 3, name: "Lamp3", price: 7000, quantity: 3, total: 14000},
    ]

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
                {cart.map(i => {
                    return <CartItem key={i.id} {...i}/>
                })}
                <div className="total">Végösszeg: 2500 Ft</div>
                <button onClick={() => alert("Sikeres vásárlás! Köszönjük!")}>Megveszem!</button>
            </div>
        </div>
    )
}