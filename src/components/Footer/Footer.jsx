import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/fruits/logo.jpg";
import instagram from "../Assets/instagram_icon.png";
import pintester from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
      </div>
      <ul className="footer-link">
        <li>
          <Link to="/vegetables" onClick={() => window.scrollTo(0, 0)}>
            خضروات
          </Link>
        </li>

        <li>
          <Link to="/fruits" onClick={() => window.scrollTo(0, 0)}>
            فواكهه
          </Link>
        </li>

        <li>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            الرئيسية
          </Link>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2026 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
