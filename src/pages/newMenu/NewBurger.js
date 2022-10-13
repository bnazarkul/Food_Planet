import React from 'react';
import s from './NewBurger.module.css';

const NewBurger = (props) => {
  return (
        <div className={s.card}>
          <img src={props.img} alt="ТофуБургер"/>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
            <h6 className={s.price}>{props.price}</h6>
            <button>{props.btn}</button>
        </div>
  );
};

export default NewBurger;
