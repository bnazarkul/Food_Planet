import React, {useEffect, useState} from 'react';
import s from "./Comments.module.css";
import {useParams} from "react-router-dom";
import api from "../../constants/api";
import Comments from "./Comment";


const BlogComments = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = (comments) => {
    fetch(api.comments)
        .then(response => response.json())
        .then(data => setProducts(data))
  }
  useEffect(() => {
    getProducts(params.comments)
  }, [])

  const elements =  products.map((item, index ) => {
    return (
        <Comments
            key={index}
            img_pen={item.img_pen}
            img_user={item.img_user}
            title={item.title}
            img_penUser={item.img_penUser}
            desc={item.desc}
            data={item.data}

        />
    )})

  return (
      <>
        <div className={s.container}>
        <div className={s.comments}>
          <h5>Отзывы</h5>
          <div className={s.cards}>
            {elements}
          </div>
          </div>
          </div>
      </>
  )
}


export default BlogComments;
