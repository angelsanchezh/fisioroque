import React from 'react';
import "./BurguerButton.css";
import {CgMenuRound} from 'react-icons/cg';
import {CgCloseO} from 'react-icons/cg';
import {useState} from 'react';

const BurguerButton = () => {

  const [open, setOpen] = useState(false);

  const hamburgerIcon = <CgMenuRound className='burguerboton' onClick={()=> setOpen(!open)}/>

  const closeIcon = <CgCloseO className='burguerbotonclose' onClick={()=> setOpen(!open)}/>                    

  return (
   
    <div className="container-button">

{open ? closeIcon : hamburgerIcon} 
{open &&
    <div className="botones-burguer">
      
    <a href="#">Inicio </a>
    <a href="#">  Servicios</a>
    <a href="#"> Nosotros</a>
    <a href="#">    Contactanos</a>
    <a href="#">  Testimonios </a>

</div>
}
</div>
    
  )
}
export default BurguerButton;
