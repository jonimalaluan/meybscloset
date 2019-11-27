import React from "react";
import "./homepage.style.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> Dress </h1>
          <span className="subtitle"> Shop Now </span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> Tops </h1>
          <span className="subtitle"> Shop Now </span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> Blazers </h1>
          <span className="subtitle"> Shop Now </span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> Coats </h1>
          <span className="subtitle"> Shop Now </span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> Jackets</h1>
          <span className="subtitle"> Shop Now </span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
