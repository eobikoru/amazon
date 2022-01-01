
import React from "react";
import "./Product.css";
import { useStateValue } from './StateProvider';



function Product({ id, title, image,   price }) {

    const [, dispatch] = useStateValue(null);

    const addToBasket = () => {
        //add items to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price:  price,
            }
        })
    }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div> 

      <img src={image} alt="flower" />
      <button onClick={addToBasket}>ADD TO BASKET</button>
    </div>
  );
}

export default Product;
