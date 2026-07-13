import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ModalOrder from "../item/ModalOrder";

const CartIems = () => {
  const { getTotalCartAmount, all_prodcut, cartItems, removeFromCart } =
    useContext(ShopContext);

  const [showModal, setShowModal] = useState(false);

  const shipping = 15;
  const total = getTotalCartAmount() + shipping;

  // المنتجات التي سيتم إرسالها إلى Supabase
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
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
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

                <p>{e.name}</p>
                <p>{e.new_price} EGP</p>

                <button className="carticon-quantity">
                  {cartItems[e.id]}
                </button>

                <p>{e.new_price * cartItems[e.id]} EGP</p>

                <img
                  className="carticon-remove"
                  src={remove_icon}
                  alt=""
                  onClick={() => removeFromCart(e.id)}
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
          <h1 style={{ textAlign: "center" }}>اجمالي السله</h1>

          <div>
            <div className="cartiems-total-item">
              <p>الحساب</p>
              <p>{getTotalCartAmount()} EGP</p>
            </div>

            <hr />

            <div className="cartiems-total-item">
              <p>التوصيل</p>
              <p>{shipping} EGP</p>
            </div>

            <hr />

            <div className="cartiems-total-item">
              <h3>الإجمالي</h3>
              <h3>{total} EGP</h3>
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