import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="11"
            title="Life of a Klansman: A Family History in White Supremacy"
            price={22.97}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/414olQ4QuZL._SX329_BO1,204,203,200_.jpg"
          />
          <Product
            id="12"
            title="Slaves in the Family"
            price={12.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51xBSnUxk-L._AC_SX184_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="21"
            title="the lean startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />

          <Product
            id="22"
            title="Live Free Or Die: America (and the World) on the Brink Hardcover – August 4, 2020"
            price={22.97}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51OAEdQ7b9L._SX330_BO1,204,203,200_.jpg"
          />
          <Product
            id="23"
            title="Life of a Klansman: A Family History in White Supremacy"
            price={22.97}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/414olQ4QuZL._SX329_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="31"
            title="Samsung Electronics UN32N5300AFXZA 32\
            1080p Smart LED TV (2018), Black"
            price={22.97}
            rating={4}
            image="https://m.media-amazon.com/images/I/91UsHjAPTlL.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
