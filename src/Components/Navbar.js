import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { CartContext } from '../Context/cartContext';


const Navbar = () => {
    const location = useLocation()
    const [pathname, setPathname] = useState("")

    useEffect(() => {
        setPathname(location.pathname)
    }, [location])

    const { cantidadTot } = useContext(CartContext);



    return (

        <>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

                <div className="container">
                    <Link to='/' className="navbar-brand">Furni<span>.</span></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <Link to="/">
                                <li><a className={`nav-link ${pathname === "/" ? "active" : ""}`}>Casa</a></li>
                            </Link>
                            <Link to="/shop">                            
                            <li><a className={`nav-link ${pathname === "/shop" ? "active" : ""}`}>Comprar</a></li>
                            </Link>
                            <li><a className={`nav-link ${pathname === "/about" ? "active" : ""}`} href="about.html">Sobre nosotros</a></li>
                            <li><a className={`nav-link ${pathname === "/services" ? "active" : ""}`} href="services.html">Servicios</a></li>
                            <li><a className={`nav-link ${pathname === "/blog" ? "active" : ""}`} href="blog.html">Blog</a></li>
                            <li><a className={`nav-link ${pathname === "/contact" ? "active" : ""}`} href="contact.html">Contactanos</a></li>
                            <Link to="/cart">
                                <li className={`nav-link ${pathname === "/cart" ? "active" : ""}`}> <BsCart size={20} style={{ marginTop: -5 }} /> <a >{cantidadTot}</a></li>
                            </Link>
                        </ul>



                    </div>
                </div>

            </nav>

        </>
    )

}

export default Navbar;