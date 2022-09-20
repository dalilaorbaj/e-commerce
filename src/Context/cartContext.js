import { React, createContext, useEffect, useState } from 'react'
import App from '../App'
import productosArray from '../data';
 

/*aca en realidad habria que usar los productos del productsContext*/

export const CartContext = createContext()

export const ProductProvider = ({ children }) => {
    
    const [productos, setProductos] = useState(productosArray)

    const agregarProducto = (id) =>{
        setProductos(productos.map(p => {
            if (p.id === id) {
                return {
                    ...p,
                    cantidad: p.cantidad + 1
                }
            } else {
                return p
            }
        }))
    }
    
    const restarProducto =(id) =>{
        setProductos(productos.map(p => {
            if (p.id === id) {
                return {
                    ...p,
                    cantidad: p.cantidad - 1
                }
            } else {
                return p
            }
        }))
    }

    useEffect(() => {
        console.log(productos);
    },[productos])
    
        return (
            <CartContext.Provider value={{agregarProducto, restarProducto}}>
                {children}
            </CartContext.Provider>
        )
    };