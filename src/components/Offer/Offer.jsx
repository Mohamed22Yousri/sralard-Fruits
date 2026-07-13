import React from "react";
import "./Offer.css";
import fruits from "../Assets/photo/11.jpeg";
import fruits1 from "../Assets/photo/WhatsApp Image 2026-07-12 at 6.34.14 PM (2).jpeg";
import fruits2 from "../Assets/photo/WhatsApp Image 2026-07-12 at 6.34.15 PM (3).jpeg";
import fruits3 from "../Assets/photo/WhatsApp Image 2026-07-12 at 6.34.15 PM.jpeg";
import fruits4 from "../Assets/photo/WhatsApp Image 2026-07-12 at 6.34.19 PM (1).jpeg";
import fruits5 from "../Assets/photo/WhatsApp Image 2026-07-12 at 6.34.14 PM (1).jpeg";

const Offer = () => {
  return (
    <div classNameName="offer">
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <h1>الصور علي الطبيعه</h1>
        <hr />
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={fruits}
                className="d-block w-100 slider-img"
                alt="Fruit 1"
              />
            </div>

            <div className="carousel-item">
              <img
                src={fruits1}
                className="d-block w-100 slider-img"
                alt="Fruit 2"
              />
            </div>

            <div className="carousel-item">
              <img
                src={fruits2}
                className="d-block w-100 slider-img"
                alt="Fruit 3"
              />
            </div>

            <div className="carousel-item">
              <img
                src={fruits3}
                className="d-block w-100 slider-img"
                alt="Fruit 4"
              />
            </div>

            <div className="carousel-item">
              <img
                src={fruits4}
                className="d-block w-100 slider-img"
                alt="Fruit 5"
              />
            </div>

            <div className="carousel-item">
              <img
                src={fruits5}
                className="d-block w-100 slider-img"
                alt="Fruit 6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
