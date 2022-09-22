import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import FooterWOSofa from '../Components/FooterWOSofa';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useParams } from 'react-router-dom';
import productos from '../data' // simula datos


const Detalles = () => {
    let { id } = useParams();
    const prodFiltrado = productos.filter(product => product.id === parseInt(id))[0]
    return (  
    <div className='App'>
        <Navbar />
        <Product producto={prodFiltrado}/>
        <FooterWOSofa />
    </div>  
    )
}

export default Detalles;