import React from 'react';
import { BrowserRouter,Routes,Route,  } from 'react-router-dom';
import App from '../App';
import Paginalogout from '../Pages/Paginalogout';
import Nosotros from '../Components/Nosotros/Nosotros';


const Rutas = () => {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Logout" element={<Paginalogout />} />
        <Route  path="/QuienesSomos" element={< Nosotros/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas;