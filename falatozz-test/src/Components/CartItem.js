import React from "react";
import { removeFromCart } from "../Util/CartData";
import "./CartItem.css";

export default function CartItem(props){

    function handleRemove() {
        removeFromCart(props.id);
        props.handleChange();
    }

    return(
        <div className="cartitem-container">
            <div className="row">
                <div className="col underline">{props.name}</div>
                <div className="col underline">{props.price} Ft</div>
                <div className="col underline">{props.quantity}</div>
                <div className="col underline">{props.total} Ft <div className="delete-cartitem" onClick={handleRemove}>x</div></div>
            </div>
        </div>
    )
}