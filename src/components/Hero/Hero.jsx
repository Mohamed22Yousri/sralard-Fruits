import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/Hero.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <div className="hero-hand-icon">
            <h2 style={{ textAlign: "center", fontSize: "54px" }}>اهلا بكم</h2>
          </div>
          <p style={{ textAlign: "center", fontSize: "32px" }}>في</p>{" "}
          <p style={{ textAlign: "center", fontSize: "54px" }}>محل</p>
          <p style={{ textAlign: "center", fontSize: "54px", color:"green" }}> <span style={{color:"red", fontWeight:"bold"}}>سر</span> الارض</p>
        </div>
        <div
          style={{ textAlign: "center", fontSize: "24px", color: "#171717" }}
        >
          للفاكهه و{" "}
          <span style={{ fontWeight: "bold", color: "green" }}>
            الخضر<i class="fa-brands fa-pagelines"></i>ات{" "}
          </span>
        </div>
      </div>
      <div className="hero-right">
        <img style={{borderRadius:"20%"}} src={hero_image} alt="" />
        
        
      </div>
    </div>
  );
};

export default Hero;
