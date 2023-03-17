import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home image"
        />

        <div className="home_row">
          <Product
            id="12321341"
            title="Bulova Classic Multi-Function Mens Watch, Stainless Steel"
            price={225}
            image="https://m.media-amazon.com/images/I/71od4iPbBHL._AC_UL480_QL65_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Espresso Machine With Grinder, Professional Espresso Maker With Milk Frother Steam Wand, Barista Espresso Coffee Machine With 92 oz Removable Water Tank for Cappuccinos or Lattes, Gift for Mom or Wife"
            price={599}
            rating={5}
            image="https://m.media-amazon.com/images/I/71GxMrZ6YHL._AC_UL480_FMwebp_QL65_.jpg
"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Laura Davidson Furniture SOHO II Padded Management Chair (Dark Grey)"
            price={349}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61g8CsqGgiL._AC_UL160_SR160,160_.jpg
"
          />
          <Product
            id="23445930"
            title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"
            price={79}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61y4J2vTwFL._AC_UL300_SR300,200_.jpg"
          />
          <Product
            id="3254354345"
            title="Telescope with Carry Bag, Phone Adapter and Wireless Remote"
            price={99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71k61KBLufL._AC_UL600_SR600,400_.jpg"
          />

          <Product
            id="3254354345"
            title="2021 Flagship Acer Chromebook 15.6FHD 1080p IPS Touchscreen Light Computer Laptop

"
            price={379}
            rating={5}
            image="https://m.media-amazon.com/images/I/81D2Ra5UAeL._AC_UL480_FMwebp_QL65_.jpg
"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="SAMSUNG 49 inch Gaming Monitor, Ultrawide Curved Monitor, 240hz 1ms, Quantum Mini LED, G-Sync, Monitor Adjustable Height, HDR 2000, Odyssey Neo G9, G95NA (LS49AG952NNXZA) (Renewed)"
            price={1450}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/810DQPbeGOL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
