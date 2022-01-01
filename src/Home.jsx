import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <img className="home_image" src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg" alt="ddd" />
      </div>

      <div className="home_row">
        <Product
          id="12321341"
          title="the lean startup"
          price={11.97}
          rating={5}
          image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuide/Fuji_Dash_GGquad_1X._SY116_CB654300275_.jpg"
        />
        <Product
          id="12321341"
          title="the lean startup"
          price={112.97}
          rating={5}
          image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuide/Fuji_Dash_GGquad2_1X._SY116_CB654300275_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="12321341"
          title="the lean startuplo"
          price={11.97}
          rating={5}
          image = "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SY200_.jpg"
        />
        <Product
          id="12321341"
          title="the lean startup"
          price={11.97}
          rating={5}
          image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg"
        />
        <Product
          id="12321341"
          title="the lean startup"
          price={11.97}
          rating={5}
          image = "https://m.media-amazon.com/images/I/81rTYNStzzL._AC_SY200_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321341"
          title="the lean startup"
          price={11.97}
          rating={5}
          image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
        />
        <Product
          id="12321341"
          title="the lean startup"
          price={11.97}
          rating={5}
          image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
        />
        <Product
          id="12321341"
          title="the lean startup"
          price={11.97}
          rating={5}
          image = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="12321341"
          title="the lean startup"
          price={11.97}
          rating={5}
          image = "https://m.media-amazon.com/images/I/61klOqD5SLL._AC_UL320_.jpg"
        />
      </div>
    </>
  );
}

export default Home;
