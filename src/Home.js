import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/GW/SMP_Desktop_1x_2._CB665936948_.jpg"
        alt=""
      />
      {/* product id,title,price,rating,image */}
      <div className="home__row">
        <Product
          id="12335441"
          title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 128GB) - Space Grey (3rd Generation)"
          price={83390.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81a-rN2A3DS._SL1500_.jpg"
        />
        <Product
          id="9546365"
          title="New Apple iPhone 12 Pro (512GB) - Graphite"
          price={143900}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71YlH-4MUQL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="5964656"
          title="New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band"
          price={31400}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71rhrO49SmL._SL1500_.jpg"
        />

        <Product
          id="85646564"
          title="GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p"
          price={37300}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61Iyd3w%2BbKL._SL1500_.jpg"
        />

        <Product
          id="125878964"
          title="HP Pavilion Gaming 15.6-inch(39.62 cms) FHD Gaming Laptop "
          price={59490}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71FeUtw%2BTPL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="44946466"
          title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
          price={159900}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
        />
      </div>
      {/* product */}
    </div>
  );
}

export default Home;
