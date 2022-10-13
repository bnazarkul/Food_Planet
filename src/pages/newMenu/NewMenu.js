import React from 'react';
import s from './NewMenu.module.css';

const NewMenu = () => {
  return (
      <div  className={s.new_header}>
        <p className={s.title}>Новинки</p>
          <nav>
            <ul>
              <li>
                <a href="#">Пицца</a>
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

export default NewMenu;
