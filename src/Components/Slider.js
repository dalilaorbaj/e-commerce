import React,{useState} from "react";
import './Carrousel.css';
import Card from './Card.js';

const Slider = () => {

    const productos = [
        {
            cosa: "carlos", 
            precio: "$300"
        }, 

        {
            cosa: "Dali", 
            precio: "43000"
        }, 

        {
            cosa: "Dali", 
            precio: "43000"
        }, 
        {
            cosa: "Dali", 
            precio: "43000"
        }
    ]

    return (
        <>
            <div className="ml-5 sl mt-1 mb-5">
                <div className="row slider mb-4 ml-4 ml-5">
                    {productos.map((prod) => {
                        return (
                            <Card prod={prod} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Slider;