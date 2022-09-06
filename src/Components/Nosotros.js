import React from 'react';
import { Link } from "react-router-dom";
import { ProductoShape } from '../Shapes';
import CardProduct from './CardProduct'



const productos = [
    { imagen: "'../images/product-1.png'", titulo: "Nordic chair", descripcion: "Como base, lleva una estructura metálica muy resistente, con acabado en negro. La silla está tapizada en poliéster suave y se puede adquirir en varios colores alegres, que aportarán un toque desenfadado y único a tu salón.", precio: 15499 },
    { imagen: "'../images/product-2.png'", titulo: "Kruzo Aero Chair", descripcion: "Como base, lleva una estructura metálica muy resistente, con acabado en negro. La silla está tapizada en poliéster suave y se puede adquirir en varios colores alegres, que aportarán un toque desenfadado y único a tu salón.", precio: 11299 },
    { imagen: "'../images/product-3.png'", titulo: "Ergonomic Chair", descripcion: "Como base, lleva una estructura metálica muy resistente, con acabado en negro. La silla está tapizada en poliéster suave y se puede adquirir en varios colores alegres, que aportarán un toque desenfadado y único a tu salón.", precio: 18599 },

]


const Nosotros = () => {
    return (
        <div className="product-section">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                        <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                        <p><a href="shop.html" className="btn">Explore</a></p>
                    </div>

                    {productos.map((producto) => {
                        return (
                            <CardProduct imagen={producto.imagen} titulo={producto.titulo} precio={producto.precio} />
                        )
                        
                    })}

                </div>
            </div>
        </div>
    )
}

Nosotros.propTypes = {
    producto: ProductoShape
}
export default Nosotros;
