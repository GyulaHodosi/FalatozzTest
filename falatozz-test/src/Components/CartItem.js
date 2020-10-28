import React from "react";
import "./CartItem.css";

export default function CartItem(props){
    return(
        <div className="cartitem-container">
            <div className="row">
                <div className="col underline">{props.name}</div>
                <div className="col underline">{props.price} Ft</div>
                <div className="col underline">{props.quantity}</div>
                <div className="col underline">{props.total} Ft</div>
            </div>
        </div>
    )
}