import React, { useState } from "react";
import BurguerButton from "./BurguerButton.jsx";
import "./Navbaruno.css";
import { useAuth0 } from "@auth0/auth0-react";

function Navbaruno() {
  //login Auth0
  const { loginWithRedirect } = useAuth0();
  //Fin login Auth0

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  return (
    <nav className="NavContainer" id="navbar">
      <div className="logotipo">
        <i class="bi bi-fire"></i>
        <a  style={{color:'white'}}  href="#">Fisio-Roque</a>
      </div>

      <div className="botones">
        <div className={`links ${clicked ? "active" : ""}`}>
          <a style={{color:'white'}} onClick={handleClick} href="#">
            Tienda
          </a>
          <a  style={{color:'white'}} onClick={handleClick} href="#">
            Servicios
          </a>
          <a  style={{color:'white'}} onClick={handleClick} href="#">
            Nosotros
          </a>
          <a style={{color:'white'}} onClick={handleClick} href="#">
            Contactanos
          </a>
          <a  style={{color:'white'}} onClick={handleClick} href="#">
            Testimonios
          </a>
        </div>
      </div>

      <div className="sesion">
        <button className="loginauth" onClick={() => loginWithRedirect()}>
          {" "}
          <i class="bi bi-door-open"></i> Hola, Iniciar Sesion
        </button>
      </div>

      <div className="burguer">
        <div clicked={clicked} handleClick={handleClick}></div>
      </div>
      <div className={`initial ${clicked ? " active" : ""}`}></div>
    </nav>
  );
}

export default Navbaruno;
