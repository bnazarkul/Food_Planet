import React from 'react';
import styles from './Footer.module.css';
import footer_logo from '../../assets/icons/LogoHeader.png';
import logo_contact from '../../assets/icons/phone.svg';
import {Link} from "react-router-dom";


const Footer = () => {
  return (
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <img className={styles.header_logo} src={footer_logo} alt="Лого"/>

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
                </ul>
              </nav>
            </div>
        </div>
      </div>
  );
};

export default Footer;