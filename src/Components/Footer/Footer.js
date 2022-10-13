import React from 'react';
import './Footer.css';
import logocuatro from '../../Assets/logocuatro.png';



const Footer = () => {
    return (
        <div className="footer">
          <div className="footer-container">
            <div className="footer-info">
                <h1>Reserva tu cita en nuestros locales</h1>
            </div>

            <div className="footer-detalle">
                <div className="logofooter">
                    <div className="logotipo-container">
                        <img src={logocuatro} alt="" width="50" height="50"/>
                    </div>

                    <div className="footer-sns">
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a
                            href="https://goo.gl/maps/gneVKMLaSu7evGUk8"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="bi bi-geo-alt"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-col-detail">
                    <h3 className="footer-col__title">Sucursales</h3>

                    <i class="bi bi-envelope-paper-fill">
                        <a
                            className = "footer-link"
                            href="mailto:elmeroque@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            elmeroque@gmail.com
                        </a>
                    </i>

                    <i class="bi bi-geo-fill">
                        <a
                            className = "footer-link"
                            href="https://goo.gl/maps/gneVKMLaSu7evGUk8"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Av Perú Nro 429 Dos de Mayo - Chimbote
                        </a>
                    </i>

                    <i class="bi bi-phone-vibrate">
                        {" "}
                        <a
                            className = "footer-link"
                            href="tel:942033303"
                            target="_blank"
                            rel="noreferrer"
                        >
                            968 914 073
                        </a>{" "}
                    </i>
                    <i class="bi bi-whatsapp">
                        <a
                            className = "footer-link"
                            href="https://wa.me/511946589821"
                            target="_blank"
                            rel="noreferrer"
                        >
                            +51 968 914 073
                        </a>{" "}
                    </i>
                </div>

                <div className="footer-col-detail">
                    <h3 className="footer-col__title">Principal</h3>

                    <i className="bi bi-envelope-paper-fill">
                        <a
                            className = "footer-link"
                            href="mailto:elmeroque@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            elmeroque@gmail.com
                        </a>
                    </i>

                    <i className="bi bi-geo-fill">
                        <a
                            className = "footer-link"
                            href="https://goo.gl/maps/gneVKMLaSu7evGUk8"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Av Perú Nro 429 Dos de Mayo - Chimbote
                        </a>
                    </i>

                    <i className="bi bi-phone-vibrate">
                        {" "}
                        <a
                            className = "footer-link"
                            href="tel:942033303"
                            target="_blank"
                            rel="noreferrer"
                        >
                            968 914 073
                        </a>{" "}
                    </i>
                    <i className="bi bi-whatsapp">
                        <a
                            className = "footer-link"
                            href="https://wa.me/511946589821"
                            target="_blank"
                            rel="noreferrer"
                        >
                            +51 968 914 073
                        </a>{" "}
                    </i>
                </div>

                <div className="footer-col-detail">
                    <h3 className="footer-col__title">Contacto </h3>

                    <i class="bi bi-envelope-paper-fill">
                        <a
                            className = "footer-link"
                            href="mailto:elmeroque@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            elmeroque@gmail.com
                        </a>
                    </i>

                    <i class="bi bi-geo-fill">
                        <a
                            className = "footer-link"
                            href="https://goo.gl/maps/gneVKMLaSu7evGUk8"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Av Perú Nro 429 Dos de Mayo - Chimbote
                        </a>
                    </i>

                    <i class="bi bi-phone-vibrate">
                        {" "}
                        <a
                            className = "footer-link"
                            href="tel:942033303"
                            target="_blank"
                            rel="noreferrer"
                        >
                            968 914 073
                        </a>{" "}
                    </i>
                    <i class="bi bi-whatsapp">
                        <a
                            className = "footer-link"
                            href="https://wa.me/511946589821"
                            target="_blank"
                            rel="noreferrer"
                        >
                            +51 968 914 073
                        </a>{" "}
                    </i>
                </div>
            </div>

            <div className="desing-by">
                <div className="copyright">&copy; Diseñado por: Grupo 300</div>

                <div className="politicas">
                    <a className="politicas-link" href="#"> Términos y condiciones |</a>
                    <a className="politicas-link" href="#"> Políticas de privacidad |</a>
                    <a className="politicas-link" href="#"> Información de la empresa |</a>
                    <a className="politicas-link" href="#"> Libro de reclamaciones</a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;