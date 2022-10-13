import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react'
import { Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com'
import './Style.css'

export const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_sh28tq3', 'template_2nbu6dc', e.target, 'bv50f2e0NaexsD4CR').then(res => {
            console.log(res);
            document.getElementById("create-email-form").reset();
        }).catch(err => console.log(err));

    }

    return (
        <div className="fondo .bg-primary.bg-gradient" >
            <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                <div md={4}>
                    <img
                        src="https://i.postimg.cc/Y0fyWGMf/fondo.png"
                        alt="my fotografia"
                        className='img-fluid'
                    />
                </div>
                <div className='flex-grow-1 border border-white border-2 forms' md={3}>
                    <div className='forms2 p-3 '>
                        <div className=" h4  border-white border-bottom border-top d-flex justify-content-evenly border-2">
                            RESERVE SU CITA
                        </div>
                        <Form className='p-3' onSubmit={sendEmail} id="create-email-form">
                            <Form.Group className="mb-3" >
                                <Form.Label>Nombres y Apellidos</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Juan Perez"
                                    name="name"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="juan@correo.com"
                                    name="user_email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Número telefónico</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="999 999 999"
                                    name="number"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Selecciona el especialista</Form.Label>
                                <Form.Select aria-label="Default select example" name="doctor">
                                    <option>Seleccionar</option>
                                    <option value="Oscar" >Lic. Oscar Gomez</option>
                                    <option value="Maria">Dra. Maria Castillo</option>
                                    <option value="Felipe">Lic. Felipe Chirinos</option>
                                    <option value="Martha">Dra. Martha Perez</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                            >
                                <Form.Label>Ingrese la razón de su cita</Form.Label>
                                <Form.Control as="textarea" rows={3} name="reason" />
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <Button variant="secondary" className='botones'>
                                    CANCELAR
                                </Button>
                                <Button variant="dark" value="Send" type="submit">
                                    ENVIAR RESERVA
                                </Button>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact