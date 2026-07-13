import React, { useContext, useRef, useState } from "react";
import logo from "../Assets/fruits/logo.jpg";
import cart from "../Assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import nav_dropdown from "../Assets/nav-dropdown.png";

function Navbar() {
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
        <li onClick={() => setMenu("Extras")}>
          <Link to="/Extras">اضافات</Link> {menu === "Extras" ? <hr /> : <></>}
        </li>
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
          <img src={cart} alt="" />
        </Link>
        <div className="nav-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
