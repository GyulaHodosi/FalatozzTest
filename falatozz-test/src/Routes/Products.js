import React, { useState } from "react";
import Modal from "react-modal";
import Product from "../Components/Product";
import ProductDetail from "../Components/ProductDetail";
import "./Products.css";
import { products } from "../Util/ProductDB.js";
import { addToCart, cart } from "../Util/CartData";

export default function Products() {
    Modal.setAppElement("body");
    const [selected, setSelected] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
        
    function handleSelect(product) {
        setSelected(product)
        openModal();
    }
    
    function openModal() {
        setModalIsOpen(true);
    }
    
    function closeModal() {
        setModalIsOpen(false);
        setQuantity(0);
    }

    function handleChangeQuantity(e){
        if (e.target.getAttribute("name") === "plus") {
            setQuantity(quantity+1);
        }
        if (e.target.getAttribute("name") === "minus") {
            if(quantity-1 >= 1) {
                setQuantity(quantity-1);
            }
        }
    }

    function handleAddToCart() {
        addToCart(selected, quantity);
        alert(quantity + " elemet a kosárba helyezett!");
        closeModal();
    }

    return(
        <div className="content-container">
            <div className="backboard">
                <div className="login-message">Termékek</div>
                <div className="products-container">
                {products.map(p => {
                    return <Product  key={p.id} product={p} handleSelect={handleSelect} />                
                })}
                </div>
            </div>
            <Modal
            className="modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}

            >
            <div className="modal-container">
                <div className="modal-body">
                    <ProductDetail product={selected}/>
                </div>
                <div className="quantity-title">Mennyiség: </div>
                <div className="quantitycontrol-container">
                    <div name="minus" onClick={handleChangeQuantity} className="quantitycontroler">-</div>
                    <div className="quantity">{quantity}</div>
                    <div name="plus"onClick={handleChangeQuantity} className="quantitycontroler">+</div>
                </div>
                <div className="modal-footer">
                <button className="modal-button-save" onClick={handleAddToCart}>
                    Kosárba tesz!
                </button>
                <button className="modal-button-close" onClick={closeModal}>
                    Vissza!
                </button>
                </div>
            </div>
            </Modal>
        </div>
    )
}