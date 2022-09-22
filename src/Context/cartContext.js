import React, { createContext, useEffect, useState } from 'react'
import App from '../App'
import productos from '../data';


/*aca en realidad habria que usar los productos del productsContext*/

export const CartContext = createContext()


export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const getProductoByID = (id) => {
        return productos.find((item) => item.id === id);
    }
    

    const getTotalCarrito = () => {
        let total = 0;
        carrito.map((item) => {
            const precioItem = getProductoByID(item.id).precio 
            total += precioItem * item.cantidad
        })
        return total
    }

    const eliminarProducto = (id) => {
        const nuevoCarrito =  carrito.filter((prod) => prod.id !== id)
        setCarrito(nuevoCarrito)
    }

    const agregarProducto = (id) => {
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
        <CartContext.Provider value={{ eliminarProducto, agregarProducto, restarProducto, carrito, getProductoByID, getTotalCarrito }}>
            {children}
        </CartContext.Provider>
    )
};