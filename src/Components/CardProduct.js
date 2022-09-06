import React from 'react';
import { Link } from "react-router-dom";


const CardProduct = ({ imagen, titulo, precio }) => {
    return (
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="details">
                <img src={imagen} className="img-fluid product-thumbnail" alt="alt" />
                <h3 className="product-title">{titulo}</h3>
                <strong className="product-price">${precio}</strong>
                {/* <Link to="/details" params={{ producto }}>
                    <span className="icon-cross">
                        <img src={require('../images/cross.svg').default} className="img-fluid" alt="alt" />
                    </span>
                </Link> */}
            </a>
        </div>
    )
}

export default CardProduct;