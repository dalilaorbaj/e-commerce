import React, { createContext, useState } from 'react'
import productos from '../data';


/*aca en realidad habria que usar los productos del productsContext*/

export const CartContext = createContext()


export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    
    const [cantidadTot, setCantidadTot] = useState(0)

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
        const cantProductosAEliminar =  carrito.filter((prod) => prod.id === id)
        const nuevoCarrito =  carrito.filter((prod) => prod.id !== id)
        setCarrito(nuevoCarrito)
        console.log(cantidadTot, cantProductosAEliminar);
        setCantidadTot(cantidadTot - cantProductosAEliminar[0].cantidad)
    }

    const agregarProducto = (id) => {
        const myProducto = carrito.find((item) => item.id === id)
        if (myProducto !== undefined) {
            myProducto.cantidad += 1;
            setCantidadTot(cantidadTot + 1)
            const carritoAnterior = carrito.filter(producto => producto.id !== id)
            carritoAnterior.push(myProducto)
            setCarrito([...carritoAnterior])
        } else {
            setCarrito([...carrito, { id: id, cantidad: 1 }])
            setCantidadTot(cantidadTot + 1)
        }
    }

    const restarProducto = (id) => {
        const carritoAnterior = carrito;
        if (carritoAnterior.find(producto => producto.id === id)) {
            const producto = carritoAnterior.find(producto => producto.id === id)
            producto.cantidad -= 1;
            setCarrito([...carritoAnterior])
            setCantidadTot(cantidadTot - 1)
        } else {
            setCarrito([...carritoAnterior, { id: id, cantidad: 1 }])
            setCantidadTot(cantidadTot - 1)
        }
    }




    return (
        <CartContext.Provider value={{ eliminarProducto, agregarProducto, restarProducto, carrito, getProductoByID, getTotalCarrito, cantidadTot }}>
            {children}
        </CartContext.Provider>
    )
};