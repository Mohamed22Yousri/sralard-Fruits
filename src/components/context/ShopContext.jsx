import React, { createContext, useState } from "react";
import all_prodcut from "../Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 0; i <= all_prodcut.length; i++) {
    cart[i] = 0;
  }

  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, SetCartItems] = useState(getDefaultCart());

  // إضافة منتج
  const addToCart = (itemId) => {
    SetCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // تقليل الكمية
  const removeFromCart = (itemId) => {
    SetCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  // حذف المنتج بالكامل
  const deleteFromCart = (itemId) => {
    SetCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));
  };

  // إجمالي السعر
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_prodcut.find(
          (product) => product.id === Number(item)
        );

        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }

    return totalAmount;
  };

  // عدد المنتجات
  const getTotalCartItems = () => {
    let totalItems = 0;

    for (const item in cartItems) {
      totalItems += cartItems[item];
    }

    return totalItems;
  };

  const ShopValue = {
    all_prodcut,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={ShopValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;