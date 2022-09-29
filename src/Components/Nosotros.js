import React, { useContext } from 'react';
import { ProductoShape } from '../Shapes';
import CardProduct from './CardProduct'
import { arrayOf } from 'prop-types';
import { ProductContext } from '../Context/productsContext';


const Nosotros = () => {
    const {productos} = useContext(ProductContext);

    return (
        <div className="product-section">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                        <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                        <p><a href="shop.html" className="btn">Explore</a></p>
                    </div>

                    {productos.slice(0, 3).map((producto) => {
                        return (
                            <CardProduct producto={producto} key={producto.id} />

                        )

                    })}



                </div>
            </div>
        </div>
    )
}

Nosotros.propTypes = {
    productos: arrayOf(ProductoShape)
}
export default Nosotros;
