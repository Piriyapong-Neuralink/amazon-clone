import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_OnSite_Concepts_R3_DesktopStripe_1500x120_v1.png"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* BasketItem */}
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
