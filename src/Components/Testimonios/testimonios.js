import './TestimoniosStyle.css';
import React from 'react';
import { useState, useEffect } from 'react';
import dataTestimonios from './dataTestimonios';
import { Container } from 'react-bootstrap';

const Testimonios = () => {
  const [people] = useState(dataTestimonios);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <div className="personal-container">
      <div className='personal-title'>
        <h2>Nuestros Testimonios</h2>
      </div>
      <div className="personal-testimonio border border-black border-5">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide"
          }
          if (indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)) {
            position = "lastSlide"
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text" >{quote}</p>
            </article>
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-right" />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-left" />
        </button>
      </div>
    </div>

  );
};

export default Testimonios;