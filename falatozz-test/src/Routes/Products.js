import React, { useState } from "react";
import Modal from "react-modal";
import Product from "../Components/Product";
import "./Products.css";

export default function Products() {
    Modal.setAppElement("body");
    const [selected, setSelected] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const products = [
        {  
            id: 1,
            image: "https://images-na.ssl-images-amazon.com/images/I/51vT8t%2B8YqL._AC_SX466_.jpg",
            name: "HAITRAL Asztali Lámpa",
            price: 5600,
        },
        {  
            id: 2,
            image: "https://ii1.pepperfry.com/media/catalog/product/s/t/1100x1210/stripped-shade-wooden-table-lamp-by-the-light-house-stripped-shade-wooden-table-lamp-by-the-light-ho-k1jtnv.jpg",
            name: "HAITRAL Asztali Lámpa 2",
            price: 6500,
        },
        {  
            id: 3,
            image: "https://images-na.ssl-images-amazon.com/images/I/51vT8t%2B8YqL._AC_SX466_.jpg",
            name: "HAITRAL Asztali Lámpa",
            price: 5600,
        },
        {  
            id: 4,
            image: "https://images-na.ssl-images-amazon.com/images/I/51vT8t%2B8YqL._AC_SX466_.jpg",
            name: "HAITRAL Asztali Lámpa",
            price: 5600,
        },
        {  
            id: 5,
            image: "https://images-na.ssl-images-amazon.com/images/I/51vT8t%2B8YqL._AC_SX466_.jpg",
            name: "HAITRAL Asztali Lámpa",
            price: 5600,
        },
    ]

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

    function handleChange(e){
        setQuantity(e.target.value);
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
            styles={{ modal: {}, overlay: { backgroundColor: "#ccc" } }}
            className="modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}

            >
            <div className="modal-container">
                <div className="modal-body">
                <Product product={selected} handleSelect={handleSelect} />
                </div>
                <div>Mennyiség:</div>
                <input value={quantity} onChange={handleChange}></input>
                <div className="modal-footer">
                <button className="modal-button-save" onClick={closeModal}>
                    Kosárba tesz!
                </button>
                <button className="modal-button-close" onClick={closeModal}>
                    Close
                </button>
                </div>
            </div>
            </Modal>
        </div>
    )
}