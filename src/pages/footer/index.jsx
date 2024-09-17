import React from "react";

import "./style.scss";

const Index = () => {
  return (
    <div className="footer container">
      <div className="footer__left">
        <div className="footer__box">
          <h1 className="footer__title">396mi</h1>
          <p className="footer__desc">Range (EPA est.)</p>
        </div>
        <div className="footer__box">
          <h1 className="footer__title">1.99s</h1>
          <p className="footer__desc">0-60 mph*</p>
        </div>
        <div className="footer__box">
          <h1 className="footer__title">200mph</h1>
          <p className="footer__desc">Top Speed†</p>
        </div>
        <div className="footer__box">
          <h1 className="footer__title">1,020hp</h1>
          <p className="footer__desc">Peak Power</p>
        </div>
      </div>
      <div className="footer__right">
        <button className="footer__btn">
             Order Now 
        </button>
      </div>
    </div>
  );
};

export default Index;
