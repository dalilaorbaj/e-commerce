import React,{useState} from "react";
import './Carrousel.css';
import Card from './Card.js';
import productos from '../data' // simula datos
import { propTypes } from "react-bootstrap/esm/Image";


const Slider = () => {
    return (
        <>
            <div className="ml-5 sl mt-1 mb-5">
                <div className="row slider mb-4 ml-4 ml-5">
                    {productos.map((prod) => {
                        return (
                            <Card prod={prod} key={prod.id}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Slider;