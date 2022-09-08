import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React from 'react';
import Nosotros from '../Components/Nosotros'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Slider from '../Components/Slider';
import productos from '../data' // simula datos



const Home = () => {
    return (  
    <div className='App'>
        <Navbar />
        <Hero />
        <Nosotros productos={productos}/>
        <Slider />
        <Footer />
    </div>  
    )
}

export default Home;