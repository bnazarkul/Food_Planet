import React from 'react';
import style from "./Select.module.css";

const Select = () => {
  return (
        <div className={style.select}>
        <p>Сортировать  по:</p>
        <select name="select_menu" required="required">
          <option value="">По умолчанию</option>
          <option value="1">По возрастанию</option>
          <option value="2">По убыванию</option>
          <option value="3">По популярности</option>
        </select>
      </div>
  );
};

export default Select;
