import React from 'react';
import { Link } from "react-router-dom";
import { ProductoShape } from '../Shapes';
import Cross from '../img/cross.svg'

const CardProduct = ({ producto }) => {
    const {id, imagen, titulo, precio} = producto;
    return (
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 mt-5">
                <Link to={`/details/${id}`} className="product-item">
                <img src={imagen} className="img-fluid product-thumbnail" alt={imagen} />
                <h3 className="product-title">{titulo}</h3>

                <strong className="product-price">${precio}</strong>
                    <span className="icon-cross">
                        <img src={Cross} className="img-fluid" alt="alt" />
                    </span>
                </Link>
                </div>
    )
}

CardProduct.propTypes = {
    producto: ProductoShape
}

export default CardProduct;