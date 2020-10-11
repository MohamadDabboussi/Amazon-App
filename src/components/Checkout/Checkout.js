import React from "react";
import { useStateValue } from "../../contexts/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import SubTotal from "./../SubTotal/SubTotal";
import "./Checkout.css";

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
          alt=""
        />
        {cart?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty</h2>
            <p>
              You have no items in your cart. To buy one or more click on "Add
              to cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_list">Your Shopping Cart</h2>
            {cart.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout_right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
