import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import FooterWOSofa from '../Components/FooterWOSofa';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Detalles = () => {
    return (  
    <div className='App'>
        <Navbar />
        <Product />
        <FooterWOSofa />
    </div>  
    )
}

export default Detalles;