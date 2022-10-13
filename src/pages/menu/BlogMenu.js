import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import style from './Menu.module.css';
import api from './../../constants/api'
import Menu from "./Menu";




const BlogMenu = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);


  const getProducts = (menu) => {
    fetch(api.menu)
        .then(response => response.json())
        .then(data => setProducts(data))
  }
  useEffect(() => {
    getProducts(params.menu)
  }, [])

  const elements = products.map((item, index ) => {
    return <Menu
        key={index}
        id={item.id}
        img={item.img}
        title={item.title}
        desc={item.desc}
        price={item.price}
        btn={item.btn}
    />
  })


  return (

        <div className={style.container}>
          <div className={style.cards}>
            {elements}
          </div>
        </div>
        );
};

export default BlogMenu;

