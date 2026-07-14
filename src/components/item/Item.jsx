import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link
        to={`/prodcut/${props.id}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src={props.image} alt={props.name} />
      </Link>

      <p>{props.name}</p>

      <div className="items-prices">
        <div dir="rtl" className="price-new">
         {props.new_price} جنيه {props.unit}
        </div>

      </div>
    </div>
  );
};

export default Item;