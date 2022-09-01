import CarritoHero from '../Components/CarritoHero';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Cart from '../Components/Cart';
import React from 'react';
import Nosotros from '../Components/Nosotros'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Carrito = () => {
    return (  
    <div className='App'>
        <Navbar />
        <CarritoHero />
        <Cart />
        <Footer />
    </div>  
    )
}

export default Carrito;