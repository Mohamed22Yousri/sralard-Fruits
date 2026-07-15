import React, { useContext, useRef, useState } from "react";
import logo from "../Assets/fruits/logo.jpg";
import cart from "../Assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import nav_dropdown from "../Assets/nav-dropdown.png";

function Navbar() {
  const cartRef = useRef();
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <img
        className="nav-dropdown open"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu nav-menu-visible">
        <li onClick={() => setMenu("vegetables")}>
          <Link to="/vegetables">خضروات</Link>{" "}
          {menu === "vegetables" ? <hr /> : <></>}
        </li>

        <li onClick={() => setMenu("fruits")}>
          <Link to="/fruits">فواكهه</Link> {menu === "fruits" ? <hr /> : <></>}
        </li>

        <li onClick={() => setMenu("shop")}>
          {" "}
          <Link to="/">الرئيسية</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-logoing-cart">
      <Link to="/cart">
  <img ref={cartRef} src={cart} alt="" id="cart-icon" />
</Link>
        <div className="nav-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
