import React from 'react';
import s from './Shoping_card.module.css';
import Bur3 from './../../assets/images/Bur3.png'

const Shopping_cart = (props) => {
  return (
        <div className={s.container}>
          <div className={s.wrapper}>
          <h3>Корзина</h3>
          <h4>Товары в вашей корзине</h4>
            <div className={s.card}>
              <table border="0">
                <tr>
                  <th>Продукт</th>
                  <th>Количество</th>
                  <th>Комментарий</th>
                  <th>Цена</th>
                  <th>К оплате</th>
                </tr>
                <tr>
                  <td name="img"><img src={props.img} alt="Пицца"/></td>
                  <td name="name">{props.title}</td>
                  <td> <input type="text" value="" data-max="100"/></td>
                  <td><input type="number"  value=""/></td>
                  <td  name="price">{props.price}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Итого</td>
                  <td>750 сом</td>
                </tr>
              </table>
            </div>
            <div className={s.header}>
              <a href="#">Продолжить покупки</a>
              <button>оформить заказ</button>
            </div>

        </div>
      </div>
  );
};

export default Shopping_cart;
