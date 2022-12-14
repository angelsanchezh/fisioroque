import React from 'react'
import "./Ubicanos.css"

const Ubicanos = () => {
    return (
        <section className="map-section">
            <div className="map-container">
                <h2 className="map-title">Ubícanos</h2>
                <div className='map-responsive'>
                    <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.878455280145!2d-78.58567308565858!3d-9.07483619620904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab813f36150109%3A0x2b9986fc48d45ce3!2sPje.%202%20de%20Mayo%20429%2C%20Chimbote%2002801!5e0!3m2!1ses!2spe!4v1665238163892!5m2!1ses!2spe" width="1024" height="450" style={{border:0}}
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade" frameborder="0"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Ubicanos;