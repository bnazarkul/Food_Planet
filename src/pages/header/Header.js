import React from 'react';
import styles from './Header.module.css';
import Header_logo from '../../assets/icons/LOgo.png';
import logo_contact from '../../assets/icons/phone.svg';
import buy from '../../assets/icons/buy.svg';
import {Link} from "react-router-dom";




const Header = () => {
  return (
        <div className={styles.container}>
          <div className={styles.menu}>
            <Link to="/">
              <img className={styles.header_logo} src={Header_logo} alt="Лого"/>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link to ="/about">Главная</Link>
                </li>
                <li>
                  <Link to="/menu">Меню</Link>
                </li>
                <li>
                  <Link to="#">Доставка</Link>
                </li>
                <li>
                  <Link to="#">Контакты</Link>
                </li>
                <li>
                  <img src={logo_contact} alt="Контакты"/>
                  <a href="#">+996500405988</a>
                </li>
                <li>
                  <Link to="/shopping_cart">
                    <img src={buy} alt="Корзина"/>
                    <a href="#">1</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
  );
};

export default Header;

//<Link to="catalog"> Каталог </Link>
