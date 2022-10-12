import React, { useState, useEffect } from 'react';
import './Ofrecemos.css';
import dataOfrecemos from './dataOfrecemos';
import { Card, Row, Col } from 'react-bootstrap';

const Ofrecemos = () => {
    const [ofrece] = useState(dataOfrecemos)


    console.log(ofrece[1].id)


    return (
        <div className='carousel-container2'>
            <div className='carousel-title'>
                <h2>Nosotros Ofrecemos</h2>
            </div>
            <div >
                <Row xs={1} md={3} className="g-4">
                    {ofrece.length > 0 &&
                        ofrece.map((index) =>
                            <Col>
                                <Card className='cards' border="light">
                                    <Card.Body>
                                        <div className='d-flex justify-content-center'>
                                            <img className='img-fluid images' src={index.image} alt="" />
                                        </div>
                                        <Card.Title >
                                            <h5 className='cards-title'>{index.title}</h5>
                                        </Card.Title>
                                        <Card.Text className='cards-text'>
                                        <h5 className='cards-text'>{index.quote}</h5>
                                        
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                </Row>
            </div>
        </div>

    );
}

export default Ofrecemos;