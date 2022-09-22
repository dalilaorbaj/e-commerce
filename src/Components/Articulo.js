
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../Context/cartContext';
import { ProductoShape } from '../Shapes';


const Articulo = ({prod}) => {
  const {carrito, agregarProducto, restarProducto} = useContext(CartContext);
  return (
    <>



      <tr>
        <td className="product-thumbnail">
          <Link to="/details">
            <img src='images/product-1.png' alt="Image" className="img-fluid" />
          </Link>
        </td>

        <td className="product-name">
          <h2 className="h5 text-black">Nordic chair</h2>
        </td>
        <td>$49.00</td>
        <td>
          <div className="input-group mb-3 d-flex align-items-center quantity-container">
            <div className="input-group-prepend">
              <button className="btn btn-outline-black decrease" onClick={() => restarProducto(prod.id)} type="button">&minus;</button>
            </div>
            <input type="text" className="form-control text-center quantity-amount" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <div className="input-group-append">
              <button className="btn btn-outline-black increase" onClick={() => agregarProducto(prod.id)} type="button">+</button>
            </div>
          </div>
        </td>
        {/* <td>${49.00 * value}.00</td> */}
        <td><a href="#" className="btn btn-black btn-sm">X</a></td>
      </tr>

    </>
  );

}

Articulo.propTypes = {
  prod: ProductoShape
}

export default Articulo;