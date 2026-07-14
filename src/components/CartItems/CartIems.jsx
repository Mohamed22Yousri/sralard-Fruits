import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ModalOrder from "../item/ModalOrder";

const CartIems = () => {
  const {
    getTotalCartAmount,
    all_prodcut,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
  } = useContext(ShopContext);

  const [showModal, setShowModal] = useState(false);

  const shipping = 15;
  const total = getTotalCartAmount() + shipping;

  const orderItems = all_prodcut
    .filter((item) => cartItems[item.id] > 0)
    .map((item) => ({
      id: item.id,
      name: item.name,
      price: item.new_price,
      quantity: cartItems[item.id],
      total: item.new_price * cartItems[item.id],
    }));

  return (
    <div className="cartiems">
      <div className="Cartitems-format-main">
        <p>المنتج</p>
        <p>الوصف</p>
        <p>السعر</p>
        <p>الكمية</p>
        <p>الإجمالي</p>
        <p>حذف</p>
      </div>

      <hr />

      {all_prodcut.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="Cartitems-format Cartitems-format-main">
                <img
                  src={e.image}
                  alt=""
                  className="carticon-prodcut-icon"
                />

                <p>{e.name}, 500 جرام</p>

                <p>{e.new_price} ج.م</p>

                <div className="cart-quantity">

                  <button
                    className="qty-btn"
                    onClick={() => removeFromCart(e.id)}
                  >
                    -
                  </button>

                  <span className="qty-number">
                    {cartItems[e.id]}
                  </span>

                  <button
                    className="qty-btn"
                    onClick={() => addToCart(e.id)}
                  >
                    +
                  </button>

                </div>

                <p>{e.new_price * cartItems[e.id]} ج.م</p>

                <img
                  className="carticon-remove"
                  src={remove_icon}
                  alt=""
                  onClick={() => deleteFromCart(e.id)}
                />
              </div>

              <hr />
            </div>
          );
        }

        return null;
      })}

      <div className="cartitems-down">
        <div className="cartiems-total">

          <h1 style={{ textAlign: "center" }}>
            إجمالي السلة
          </h1>

          <div>

            <div className="cartiems-total-item">
              <p>الحساب</p>
              <p>{getTotalCartAmount()} ج.م</p>
            </div>

            <hr />

            <div className="cartiems-total-item">
              <p>التوصيل</p>
              <p>{shipping} ج.م</p>
            </div>

            <hr />

            <div className="cartiems-total-item">
              <h3>الإجمالي</h3>
              <h3>{total} ج.م</h3>
            </div>

          </div>

          <button onClick={() => setShowModal(true)}>
            اطلب الآن
          </button>

        </div>

        <ModalOrder
          show={showModal}
          onClose={() => setShowModal(false)}
          cartItems={orderItems}
        />

      </div>
    </div>
  );
};

export default CartIems;