import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div style={{ margin: "auto" }} className="descriptionBox-nav-box">
          المزيد
        </div>
      </div>
    <div className="arrow-container">
  <i className="fa-solid fa-arrow-down arrow-icon"></i>
</div>
    </div>
  );
};

export default DescriptionBox;
