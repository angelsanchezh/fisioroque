import React from 'react';
import './Footer.css';
import logocuatro from '../../Assets/logocuatro.png';



const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-info'>
        <h1>Reserva tu cita ON-LINE</h1>
      </div>

      <div className="footer-detalle">

        <div className="logofooter">

          <div className="logotipo">
            <img src={logocuatro} alt="" />
          </div>

          <div className="footer-sns">

            <a href="https://twitter.com/" target="_blank" rel='noreferrer'>
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel='noreferrer'>
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel='noreferrer' >
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel='noreferrer' >
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://goo.gl/maps/gneVKMLaSu7evGUk8" target="_blank" rel='noreferrer'>
              <i class="bi bi-geo-alt"></i>
            </a>

          </div>

        </div>

        <div className='footer-contact'>

          <h3>Sucursales</h3>

          <i class="bi bi-envelope-paper-fill"><a href='mailto:elmeroque@gmail.com' target="_blank" rel='noreferrer'>elmeroque@gmail.com</a></i>

<i class="bi bi-geo-fill">
  <a href="https://goo.gl/maps/gneVKMLaSu7evGUk8" target="_blank" rel='noreferrer'>Av Perú Nro 429 Dos de Mayo - Chimbote</a></i>

<i class="bi bi-phone-vibrate"> <a href="tel:942033303" target="_blank" rel='noreferrer'>968 914 073</a> </i>
<i class="bi bi-whatsapp"><a href="https://wa.me/511946589821" target="_blank" rel='noreferrer'>+51 968 914 073</a> </i>

        </div>

        <div className='footer-menu'>

          <h3>Menu</h3>

          <i class="bi bi-envelope-paper-fill"><a href='mailto:elmeroque@gmail.com' target="_blank" rel='noreferrer'>elmeroque@gmail.com</a></i>

<i class="bi bi-geo-fill">
  <a href="https://goo.gl/maps/gneVKMLaSu7evGUk8" target="_blank" rel='noreferrer'>Av Perú Nro 429 Dos de Mayo - Chimbote</a></i>

<i class="bi bi-phone-vibrate"> <a href="tel:942033303" target="_blank" rel='noreferrer'>968 914 073</a> </i>
<i class="bi bi-whatsapp"><a href="https://wa.me/511946589821" target="_blank" rel='noreferrer'>+51 968 914 073</a> </i>



        </div>

        <div className="iconos">
          <h3>Contacto </h3>

          <i class="bi bi-envelope-paper-fill"><a href='mailto:elmeroque@gmail.com' target="_blank" rel='noreferrer'>elmeroque@gmail.com</a></i>

          <i class="bi bi-geo-fill">
            <a href="https://goo.gl/maps/gneVKMLaSu7evGUk8" target="_blank" rel='noreferrer'>Av Perú Nro 429 Dos de Mayo - Chimbote</a></i>

          <i class="bi bi-phone-vibrate"> <a href="tel:942033303" target="_blank" rel='noreferrer'>968 914 073</a> </i>
          <i class="bi bi-whatsapp"><a href="https://wa.me/511946589821" target="_blank" rel='noreferrer'>+51 968 914 073</a> </i>

        </div>

      </div>

      <div className="desing-by">
        
        <div className="copyright">

          &copy; Diseñado by : Grupo 300
        </div>

        <div className="politicas">
           <a href="#">Terminos y condiciones |</a>
            <a href="#">Politicas de privacidad |</a>
            <a href="#"> Informacion de la empresa |</a>
            <a href="#"> Libro de reclamaciones</a>

        </div>
      </div>


    </div>
  )
}

export default Footer;