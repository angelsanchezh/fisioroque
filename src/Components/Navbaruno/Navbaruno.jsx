import React, { useState } from 'react';
import BurguerButton from './BurguerButton.jsx';
import './Navbaruno.css';
import { useAuth0 } from '@auth0/auth0-react';



function Navbaruno() {

  const{loginWithRedirect} = useAuth0();


  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    
      <nav className='NavContainer'>

<div className="logotipo">
        <i class="bi bi-fire"></i>
        <a href="#">Fisio-Roque</a>
        </div>
        
        <div className="botones">
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#">Tienda</a>
          <a onClick={handleClick} href="#">Servicios</a>
          <a onClick={handleClick} href="#">Nosotros</a>
          <a onClick={handleClick} href="#">Contactanos</a>
          <a onClick={handleClick} href="#">Testimonios</a>
        </div>
        </div>
        
        
      
        <div className="sesion">
        <button className='loginauth' onClick={()=>loginWithRedirect()}> <i class="bi bi-door-open"></i> Hola, Iniciar Sesion</button>
        <a href=""><i class="bi bi-bag-fill"></i>Carrito</a>
          
 

        <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-3" type="search" placeholder="Busqueda" aria-label="Search"/>
      <button className="btn btn-outline-light" type="submit">Search</button>
    </form>
  </div>
  
       
        </div>


        <div className='burguer'>
          <div  clicked={clicked} handleClick={handleClick}>
          </div>
        </div>
        <div className={`initial ${clicked ? ' active' : ''}`}></div>
      </nav>
   
  )
}

export default Navbaruno;


 