import React from 'react';
import s from './Main.module.css';
import main_img from './../../assets/images/main_img.png'

const Main = () => {
  return (
      <div className={s.container}>
        <div className={s.main}>
          <div className={s.main_info}>
            <h1 className={s.title}>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
            <p className={s.text}>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
            <button className={s.btn}>Перейти в меню</button>
          </div>
          <div className={s.main_img}>
            <img src={main_img} alt="Бургер"/>
          </div>
        </div>
      </div>

  );
};

export default Main;
