import React from 'react';
import s from './Comments.module.css';



const Comments = (props) => {
  return (
          <div className={s.card}>
            <div className={s.ellips}>
              <img className={s.pen} src={props.img_pen} alt=""/>
            </div>
            <img className={s.user} src={props.img_user} alt=""/>
            <p className={s.username}>{props.title}</p>
            <img className={s.pen_user} src={props.img_penUser} alt=""/>
            <p className={s.desc}>{props.desc}</p>
            <p className={s.username}>{props.data}</p>
          </div>

  );
};

export default Comments;
