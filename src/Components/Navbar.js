import React from 'react';


const Navbar = () => {
    return (

    <>
<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div className="container">
    <a className="navbar-brand" href="index.html">Furni<span>.</span></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
                <a className="nav-link" href="index.html">Casa</a>
            </li>
            <li><a className="nav-link" href="shop.html">Comprar</a></li>
            <li><a className="nav-link" href="about.html">Sobre nosotros</a></li>
            <li><a className="nav-link" href="services.html">Servicios</a></li>
            <li><a className="nav-link" href="blog.html">Blog</a></li>
            <li><a className="nav-link" href="contact.html">Contactanos</a></li>
        </ul>

        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li><p className="nav-link" ><img src={require('../images/user.svg').default}/></p></li>
            <li><p className="nav-link" ><img src={require('../images/cart.svg').default}/></p></li>
        </ul>
    </div>
</div>
    
</nav>

</>
    )

}

export default Navbar;