import React, { createContext, useState, useEffect } from 'react'
import productos from '../data';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])    

    const [cantidadTot, setCantidadTot] = useState(0)

    useEffect(() => {
        let x = localStorage.getItem("carrito")
        setCarrito(JSON.parse(x))
        let y = localStorage.getItem("cantidadTot")
        setCantidadTot(JSON.parse(y))

    }, []);

      useEffect(() => {
          localStorage.setItem("carrito", JSON.stringify(carrito));
          localStorage.setItem("cantidadTot", JSON.stringify(cantidadTot))
      }, [carrito]);



    const getProductoByID = (id) => {
        return productos.find((item) => item.id === id);
    }
    

    const getTotalCarrito = () => {
        let total = 0;
        carrito.map((item) => {
            const precioItem = getProductoByID(item.id).precio 
            total += precioItem * item.cantidad
            return total
        })
        return total
    }

    const eliminarProducto = (id) => {
        const cantProductosAEliminar =  carrito.filter((prod) => prod.id === id)
        const nuevoCarrito =  carrito.filter((prod) => prod.id !== id)
        setCarrito(nuevoCarrito)
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