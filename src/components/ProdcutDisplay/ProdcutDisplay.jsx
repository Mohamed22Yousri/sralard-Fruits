import React, { useContext } from "react";
import "./ProdcutDisplay.css";
import Star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../context/ShopContext";
const ProdcutDisplay = (props) => {
  const { prodcut } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="prodcutDisplay">
      <div className="prodcut-left">
        <div className="prodcut-img-list">
          <img src={prodcut.image} alt="" />
          <img src={prodcut.image} alt="" />
          <img src={prodcut.image} alt="" />
          <img src={prodcut.image} alt="" />
        </div>
        <div className="prodcut-img">
          <img className="prodcutDisplay-main-img" src={prodcut.image} alt="" />
        </div>
      </div>
      <div className="prodcut-right">
        <h1>{prodcut.name}</h1>
        <div className="prodcutDisplay-right-star">
          <img src={Star_icon} alt="" />
          <img src={Star_icon} alt="" />
          <img src={Star_icon} alt="" />
          <img src={Star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>
        <div className="prodcutDisplay-right-prices">
          <div className="prodcutDisplay-right-new-price">
            <span dir="rtl">{prodcut.new_price} جنيه /  {prodcut.unit}</span>{" "}
          </div>
        </div>
        <div className="prodcutDisplay-right-size"></div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              width: "100%",
              maxWidth: "500px",
            }}
            onClick={() => {
              addToCart(prodcut.id);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            أضف الي السله
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdcutDisplay;
