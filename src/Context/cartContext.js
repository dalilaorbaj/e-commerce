import React, { createContext, useEffect, useState } from 'react'
import App from '../App'


/*aca en realidad habria que usar los productos del productsContext*/

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([{id: 1, cantidad: 3}, {id: 2, cantidad: 1}])

    const agregarProducto = async (id) => {
        const myProducto = carrito.find((item) => item.id === id)
        if (myProducto !== undefined) {
            myProducto.cantidad += 1;
            const carritoAnterior = carrito.filter(producto => producto.id !== id)
            carritoAnterior.push(myProducto)
            setCarrito([...carritoAnterior])
        } else {
            setCarrito([...carrito, { id: id, cantidad: 1 }])
        }
    }

    const restarProducto = (id) => {
        const carritoAnterior = carrito;
        if (carritoAnterior.find(producto => producto.id === id)) {
            const producto = carritoAnterior.find(producto => producto.id === id)
            producto.cantidad -= 1;
            setCarrito([...carritoAnterior])
        } else {
            setCarrito([...carritoAnterior, { id: id, cantidad: 1 }])
        }
    }




    return (
        <CartContext.Provider value={{ agregarProducto, restarProducto, carrito }}>
            {children}
        </CartContext.Provider>
    )
};