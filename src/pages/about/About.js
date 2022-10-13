import React from 'react';
import s from './About.module.css';
import ellips from './../../assets/images/Ellipse1.png'


const About = (props) => {
  return (
        <div className={s.cards}>
          <div className={s.card}>
            <img src={props.img} alt=""/>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
          </div>
        </div>
  );
};

export default About;
