import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import Articulo from "./Articulo";
import { CartContext } from '../Context/cartContext';

const Cart = () => {
  const { carrito, getTotalCarrito } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tot = getTotalCarrito();
    setTotal(tot);
  });

  return (
    <>
      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">

            <form className="col-md-12 readOnly" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
{
  total === 0 ? 
                      <h1>No hay productos aún!</h1>: 


                      <tr>
                        <th className="product-thumbnail">Imagen</th>
                        <th className="product-name">Producto</th>
                        <th className="product-price">Precio</th>
                        <th className="product-quantity">Cantidad</th>
                        <th className="product-total">Total</th>
                        <th className="product-remove">Eliminar</th>
                      </tr>}
                  </thead>
                  <tbody>
                    {carrito.map((item) => (
                      <Articulo
                        key={item.id}
                        prod={item}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6">
                  <Link to="/">
                    <button className="btn btn-outline-black btn-sm btn-block">Continuar comprando</button>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">Cupon</label>
                  <p>Ingrese su cupón si tiene uno.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input type="text" className="form-control py-3" id="coupon" placeholder="Codigo del cupón" />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-black">Aplicar Cupon</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Total del carrito</h3>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">${total}.00</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-black btn-lg py-3 btn-block">Ir a Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  )

}

export default Cart;
