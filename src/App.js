
import Home from './Pages/Home'
import Carrito from './Pages/Carrito'
import Detalles from './Pages/Detalles'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import React from 'react'
import { ProductProvider } from './Context/cartContext';

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
      <Routes>          
        <Route index path="/" element={<Home />} />
          <Route path="/cart" element={<Carrito />} />
          <Route path="/details/:id" element={<Detalles />} />
          </Routes>
      </BrowserRouter>
      </ProductProvider>   
 
  );
}

export default App;

