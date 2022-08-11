
import Home from './Pages/Home'
/*import Carrito from './Pages/Carrito'
import Detalles from './Pages/Detalles'*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import React from 'react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>          
      <Route path="/" element={<Home />} />
          {/*<Route path="/carrito" element={<Carrito />} />
          <Route path="/detalles" element={<Detalles />} />*/}
          </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;

