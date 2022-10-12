import React, { useState, useEffect } from 'react';
import './Personal.css';
import dataPersonal from './dataPersonal';
import { Card, Row, Col } from 'react-bootstrap';

const Personal = () => {
    const [ofrece] = useState(dataPersonal)


    console.log(ofrece[1].id)


    return (
        <div className='carousel-container'>
            <div className='carousel-title'>
                <h2>Nosotros Ofrecemos</h2>
            </div>
            <div >
                <Row xs={1} sm={2} md={4} className="g-4">
                    {ofrece.length > 0 &&
                        ofrece.map((index) =>
                            <Col>
                                <Card className='cards' border="light">
                                    <Card.Body>
                                        <Card.Img variant="top" src={index.image} />
                                        <Card.Title >
                                            <h4 className='cards-title'>{index.title}</h4>
                                        </Card.Title>
                                        <Card.Title >
                                            <h5 className='cards-title'>{index.profession}</h5>
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

export default Personal;