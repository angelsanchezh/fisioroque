import React from 'react';
import "./Cover.css";
import videodefisioterapia from "../../Assets/videodefisioterapia.mp4";
import audiohtml from '../../Assets/audiohtml.mp3';

const Cover = () => {
  return (
    <div className='cover-container'>

      <video className='video' src={videodefisioterapia} autoPlay loop muted />

      <div className="container-portada">

        <h1>Fisio-Roque</h1>
       
        <p>Terapia Fisica | Terapia Respiratoria | Terapia de Rehabilitacion </p>
       
        <a class="btn btn-success" href="#" role="button">Reservar Cita </a>
      
      </div>




    </div>
  )
}

export default Cover