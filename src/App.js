import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from './Components/cover/Cover';
import Navbaruno from './Components/Navbaruno/Navbaruno';
import Nosotros from './Components/Nosotros/Nosotros'
import Ofrecemos from './Components/Slider/Ofrecemos';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';
import Testimonios from './Components/Testimonios/testimonios';
import { LogoutButton } from './Components/Botonauth/Logout';
import { Profile } from './Components/Botonauth/Profile';
import Contact from './Components/Correo/Contact';
import Slider from './Components/Sliderdos/Slider';

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    

    <div className="App">
     {isAuthenticated ? (
          <>
           <LogoutButton/>
           <Profile/>
           </>
          ) :
           ( <Navbaruno/>)}
    
       <Cover />
      <Nosotros/>
      <Ofrecemos />
      <Contact/>
      <Slider/>
      <Info />
      
      <Footer />
    </div>
    
  );
}

export default App;
