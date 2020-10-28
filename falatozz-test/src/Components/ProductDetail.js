import React from "react";
import "./ProductDetail.css";

export default function ProductDetail(props) {
    return (
        <div className="detail-container">
            <div className="detail-name">{props.product.name}</div>
            <img alt="product" className="detail-image" src={props.product.image}></img>
            <div className="detail-price">Egységár: {props.product.price} Ft</div>
        </div>
    )
}