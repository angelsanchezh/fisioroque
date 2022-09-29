import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from './Components/cover/Cover';
import Navbaruno from './Components/Navbaruno/Navbaruno';
import Nosotros from './Components/Nosotros/Nosotros'
import Slider from './Components/Slider/Slider';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';
import Testimonios from './Components/Testimonios/testimonios';


function App() {

  

  return (
    <div className="App">
     <Navbaruno/>
      <Cover />
      <Nosotros/>
      <Slider />
      <Testimonios/>
      <Info />
      <Footer />
     
    </div>
  );
}

export default App;
