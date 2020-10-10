import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg"
        // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt=""
      />

      {/* Products id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id="11"
          title="AmazonBasics Wireless Computer Mouse with USB Nano Receiver - Black"
          price={12.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="12"
          title="AmazonBasics Aluminum USB 3.1 Type-C Docking with HDMI, VGA, Ethernet, 2 USB-A, SD/TF Card Reader, Type-C data port (5Gbps)"
          price={79.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61IORxTQJkL._AC_UL480_QL65_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="21"
          title="AmazonBasics Slim Carry On Travel Backpack"
          price={45.37}
          rating={5}
          image="https://m.media-amazon.com/images/I/A166C71eR-L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="123"
          title="AmazonBasics Laptop Computer Backpack - Fits Up To 17 Inch Laptops"
          price={33.49}
          rating={4}
          image="https://m.media-amazon.com/images/I/81vfzNUAXEL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="23"
          title="AmazonBasics Hardside Carry-On Spinner Suitcase Luggage - Expandable with Wheels - 21 Inch, Black"
          price={54.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71s7HbyqzEL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12"
          title="AmazonBasics Full-Size Ergonomic Wireless PC Mouse with Fast Scrolling"
          price={32.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/611MVODMR0L._AC_UL480_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
