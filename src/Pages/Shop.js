import ShopHero from '../Components/ShopHero';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AllProducts from '../Components/AllProducts';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Shop = () => {
    return (  
    <div className='App'>
        <Navbar />
        <ShopHero />
        <AllProducts />
        <Footer />
    </div>  
    )
}

export default Shop;