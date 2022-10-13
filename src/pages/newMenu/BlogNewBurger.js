import React, {useEffect, useState} from 'react';
import NewBurger from "./NewBurger";
import s from "./NewBurger.module.css";
import {useParams} from "react-router-dom";
import api from "../../constants/api";

const BlogNewBurger = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = (newMenu) => {
    fetch(api.newMenu)
        .then(response => response.json())
        .then(data => setProducts(data))
  }
  useEffect(() => {
    getProducts(params.newMenu)
  }, [])


  const elements =  products.map((item, index ) => {
    return (
        <NewBurger
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            btn={item.btn}

        />
    )})

return (
    <>
      <div className={s.cards}>
        {elements}
      </div>
    </>
)
}

export default BlogNewBurger;
