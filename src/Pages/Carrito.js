import CarritoHero from '../Components/CarritoHero';
import Navbar from '../Components/Navbar';
import FooterWOSofa from '../Components/FooterWOSofa';
import Cart from '../Components/Cart';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Carrito = () => {
    return (  
    <div className='App'>
        <Navbar />
        <CarritoHero />
        <Cart />
        <FooterWOSofa />
    </div>  
    )
}

export default Carrito;