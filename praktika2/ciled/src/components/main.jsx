import React from "react";
import "./main.scss";
function Main (){
  return (
    <>
      <div className="site-main">
        <div className="hero-banner1">
          <div className="img-fluid">
            <img
              src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp"
              alt="zdd"
            />
          </div>
        </div>
        <div className="hero-banner2">
          <div className="text_all">
            <div className="text_head">Shop is fun</div>
            <h1 className="text_center">BROWSE OUR PREMIUM PRODUCT</h1>
            <div className="text_bottom">
              Us which over of signs divide dominion deep fill bring they're
              meat beho upon own earth without morning over third. Their male
              dry. They are great appear whose land fly grass.
            </div>
            <button className="browse-now">
             
              <b>Browse Now</b>
            </button>
          </div>
        </div>
      </div>
      <div className="stage">
        <div className="stage-img">
         
          <img
            src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png.webp"
            alt=""
          />
        </div>
        <div className="stage-img">
          <img
            src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png.webp"
            alt=""
          />
        </div>
        <div className="stage-img">
          <img
            src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png.webp"
            alt=""
          />
        </div>
      </div>
      <div className="contanier">
      <div className="best-sellers"> 
       </div>
      </div>
    </>
  );
};
export default Main;