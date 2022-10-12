import React, { useState, useEffect } from 'react';
import './Personal.css';
import dataPersonal from './dataPersonal';
import { Card, Row, Col } from 'react-bootstrap';

const Personal = () => {
    const [ofrece] = useState(dataPersonal)


    console.log(ofrece[1].id)


    return (
        <div className='personal-container'>
            <div className='personal-title'>
                <h2>Nuestro Personal</h2>
            </div>
            <div style={{marginTop:20}}>
                <Row xs={1} sm={2} md={4} className="g-5">
                    {ofrece.length > 0 &&
                        ofrece.map((index) =>
                            <Col>
                                <Card className='personal-cards' border="light">
                                    <Card.Body>
                                        <Card.Img variant="top" src={index.image} />
                                        <Card.Title >
                                            <h3 className='personal-cards-title'>{index.title}</h3>
                                        </Card.Title>
                                        <Card.Title >
                                            <h4 className='personal-cards-text'>{index.profession}</h4>
                                        </Card.Title>
                                        <Card.Text className='personal-cards-text'>
                                            <h5 className='personal-cards-text'>{index.quote}</h5>
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