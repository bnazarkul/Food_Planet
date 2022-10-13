import React from 'react';
import s from "../newMenu/NewMenu.module.css";

const MenuHeader = () => {
  return (
      <div  className={s.new_header}>
        <p className={s.title}>Меню</p>
        <nav>
          <ul>
            <li>
              <a href="/menu">Пицца</a>
            </li>
            <li>
              <a href="#">Бургер</a>
            </li>
            <li>
              <a href="#">Суши</a>
            </li>
            <li>
              <a href="#">Роллы</a>
            </li>
            <li>
              <a href="#">Салаты</a>
            </li>
            <li>
              <a href="#">Десерты</a>
            </li>
            <li>
              <a href="#">Напитки</a>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default MenuHeader;
