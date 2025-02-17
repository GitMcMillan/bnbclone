import React from "react";
import "./styles.css";
import hotel from "../../assets/hotels/hotel-1.jpeg";

const Card = () => {
  return (
    <div>
      <img src={hotel} alt={"hotel"} className="card-img" />
    </div>
  );
};

export default Card;
