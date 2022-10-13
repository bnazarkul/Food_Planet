
import React, {useContext} from 'react';
import style from './Menu.module.css';
import s from "../newMenu/NewBurger.module.css";



const Menu = (props) => {


  return (
        <div  className={style.card}>
          <img src={props.img} alt="Пицца"/>
          <h5>{props.title}</h5>
          <p>{props.desc}</p>
          <h6 className={style.price}>{props.price}</h6>
          <button type="submit">Купить</button>
      </div>
  );
};

export default Menu;
