import React from 'react';
import Main from "./Main";
import NewMenu from "../newMenu/NewMenu";
import BlogNewBurger from "../newMenu/BlogNewBurger";
import MenuHeader from "../menu/MenuHeader";
import Select from "../menu/Select";
import BlogMenu from "../menu/BlogMenu";
import BlogAbout from "../about/BlogAbout";
import BlogComments from "../comments/BlogComment";
import Footer from "../footer/Footer";

const MainPages = () => {
  return (
      <div>
        <div className="container">
          <Main/>
          <NewMenu/>
          <BlogNewBurger/>
          <MenuHeader/>
          <Select/>
          <BlogMenu/>
          <BlogAbout/>
          <BlogComments/>
        </div>
        <Footer/>
      </div>
  );
};

export default MainPages;
