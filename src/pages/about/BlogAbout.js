import React from 'react';
import style from "../menu/Menu.module.css";
import About from "./About";
import AboutElem from "./AboutElem";
import s from "./About.module.css";

const BlogAbout = () => {
  const elems =  AboutElem.map((item, index ) => {
    return (
        <About
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}

        />
    )})

  return (
      <>
        <div className={s.container}>
          <div className={s.about}>
            <h3>Почему выбирают нас:</h3>
            <div className={style.cards}>
              {elems}
            </div>
          </div>
        </div>

      </>
  )
}



export default BlogAbout;
