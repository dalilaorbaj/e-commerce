import React, {createContext, useState} from 'react'
import App from '../App'
import productosArray from '../data';


export const ProductContext = createContext(productosArray)

export const ProductProvider = ({ children }) => {
    const [productos, setProductos] = useState(productosArray)

    return (
        <ProductContext.Provider value={{productos}}>
            {children}
        </ProductContext.Provider>
    )
};
