import React from 'react'
import "./Nosotros.css"
import imgfisiocinco from "../../Assets/imgfisiocinco.webp";

const Nosotros = () => {
    return (
        <div className='nosotros-container'>
            <div className='nosotros-descrip'>
                <h4>Sobre nosotros</h4>
                <h1>Alta Calidad y Profesionales en Fisioterapia</h1>
                <p>Todo el equipo de fisioterapeutas de FISIO-ROQUE es personal titulado, lo que garantiza que todos los servicios ofrecidos en nuestras clínicas se desarrollen con altos conocimientos, calidad y por supuesto una atención personalizada.

                    El único centro especializado en Terapia física y terapia Cardio-Respiratoria en la Ciudad de Chimbote.</p>
            </div>
            <div className='nosotros-img'>
                <img src={imgfisiocinco} alt="" />

            </div>


        </div>
    )
}

export default Nosotros