import React from "react";
import "./Product.css";

export default function Product(props) {
    return (
        <div onClick={() => props.handleSelect(props.product)} className="product-container">
            <img src={props.product.image} className="product-image"></img>
            <div className="product-name">{props.product.name}</div>
            <div className="product-price">{props.product.price} Ft</div>
        </div>
    )
}