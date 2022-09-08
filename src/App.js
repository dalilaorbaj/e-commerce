
import Home from './Pages/Home'
import Carrito from './Pages/Carrito'
import Detalles from './Pages/Detalles'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import React from 'react'

function App() {
  return (
      <BrowserRouter>
      <Routes>          
        <Route index path="/" element={<Home />} />
          <Route path="/cart" element={<Carrito />} />
          <Route path="/details/:id" element={<Detalles />} />
          </Routes>
      </BrowserRouter>    
  );
}

export default App;

