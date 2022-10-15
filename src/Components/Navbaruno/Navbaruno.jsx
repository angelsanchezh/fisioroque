import React, { useState } from "react";
import "./Navbaruno.css";
import { useAuth0 } from "@auth0/auth0-react";
import BurguerButton from "./BurguerButton";
import './BurguerButton.css';

function Navbaruno() {
  //login Auth0
  const { loginWithRedirect } = useAuth0();
  //Fin login Auth0

 

  return (
  
<div className="container">
    <div className='container-nav-principal' >
      
      
      <div className="logotipo">
       
        <i class="bi bi-fire"></i>
        <a  href="#">Fisio-Roque</a>
     
      </div>

      <div className="botones">
      
          <a href="#">Inicio </a>
          <a href="#">  Servicios</a>
          <a href="#"> Nosotros</a>
          <a href="#">    Contactanos</a>
          <a href="#">  Testimonios </a>
      
      </div>
      

      <div className="sesion">
       
        <button className="loginauth" onClick={() => loginWithRedirect()}>
          {" "}
          <i class="bi bi-door-open"></i> Hola, Iniciar Sesion
        </button>
      </div>

</div>
<BurguerButton/>

     </div>

  );
}

export default Navbaruno;
