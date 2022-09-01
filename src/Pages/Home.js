import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React from 'react';
import Nosotros from '../Components/Nosotros'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Slider from '../Components/Slider';


const Home = () => {
    return (  
    <div className='App'>
        <Navbar />
        <Hero />
        <Nosotros />
        <Slider />
        <Footer />
    </div>  
    )
}

export default Home;