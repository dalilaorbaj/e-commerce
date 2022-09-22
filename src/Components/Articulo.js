import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../Context/cartContext';
import { ProductoShape } from '../Shapes';
import productos from '../data';



const Articulo = ({ prod }) => {
  const { agregarProducto, restarProducto } = useContext(CartContext);
  const productoCompleto = productos.find((item) => item.id === prod.id);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    setTotal(productoCompleto.precio * prod.cantidad);
  },[])

  const handleAgregar = () => {
    agregarProducto(prod.id);
    setTotal(productoCompleto.precio * prod.cantidad);
  }
  const handleRestar = () => {
    restarProducto(prod.id)
    setTotal(productoCompleto.precio * prod.cantidad);
  }

  return (
    <>
      <tr>
        <td className="product-thumbnail">
          <Link to="/details">
            <img src={productoCompleto.imagen} alt="Image" className="img-fluid" />
          </Link>
        </td>

        <td className="product-name">
          <h2 className="h5 text-black">{productoCompleto.titulo}</h2>
        </td>
        <td>${productoCompleto.precio}</td>
        <td>
          <div className="input-group mb-3 d-flex align-items-center quantity-container">
            <div className="input-group-prepend">
              <button className="btn btn-outline-black decrease" onClick={() => handleRestar()} type="button">&minus;</button>
          </div>
          <input type="text" className="form-control text-center quantity-amount disabled" placeholder={prod.cantidad} aria-label="Example text with button addon" aria-describedby="button-addon1" />
          <div className="input-group-append">
            <button className="btn btn-outline-black increase" onClick={() => handleAgregar()} type="button">+</button>
          </div>
        </div>
      </td>
      <td>${total}</td>
      <td><a href="#" className="btn btn-black btn-sm">X</a></td>
    </tr>

    </>
  );

}

Articulo.propTypes = {
  prod: ProductoShape
}

export default Articulo;