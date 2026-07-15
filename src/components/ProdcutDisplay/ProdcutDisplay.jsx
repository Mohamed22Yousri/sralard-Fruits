import React, { useContext, useRef } from "react";
import "./ProdcutDisplay.css";
import Star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const ProdcutDisplay = (props) => {
  const { prodcut } = props;
  const { addToCart } = useContext(ShopContext);

  const imageRef = useRef();

  const flyToCart = () => {
    const cart = document.getElementById("cart-icon");
    const img = imageRef.current;

    if (!cart || !img) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

const clone = img.cloneNode(true);
clone.classList.add("flying-product");

    clone.style.position = "fixed";
    clone.style.left = imgRect.left + "px";
    clone.style.top = imgRect.top + "px";
    clone.style.width = imgRect.width + "px";
    clone.style.height = imgRect.height + "px";
    clone.style.zIndex = "9999";
    clone.style.transition = "all 0.8s ease-in-out";
    clone.style.pointerEvents = "none";

    document.body.appendChild(clone);

    requestAnimationFrame(() => {
      clone.style.left = cartRect.left + "px";
      clone.style.top = cartRect.top + "px";
      clone.style.width = "30px";
      clone.style.height = "30px";
      clone.style.opacity = "0.3";
      clone.style.transform = "scale(.3)";
    });

   setTimeout(() => {
  clone.remove();

  addToCart(prodcut.id);

  toast.success("✅ تم إضافة المنتج إلى السلة", {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  cart.classList.add("cart-bounce");

  setTimeout(() => {
    cart.classList.remove("cart-bounce");
  }, 500);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, 800);
  };

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
          <img
            ref={imageRef}
            className="prodcutDisplay-main-img"
            src={prodcut.image}
            alt=""
          />
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
            <span dir="rtl">
              {prodcut.new_price} جنيه / {prodcut.unit}
            </span>
          </div>
        </div>

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
            onClick={flyToCart}
          >
            أضف إلى السلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdcutDisplay;