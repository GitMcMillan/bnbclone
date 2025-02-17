import React from "react";
import "./styles.css";
import hotel from "../../assets/hotels/hotel-1.jpeg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Card = () => {
  return (
    <div className="cards-box">
      <img src={hotel} alt={"hotel"} className="card-img" />
      <div className="card-info-flex">
        <h3 className="card-title">Place</h3>
        <div className="card-rating">
          <StarRoundedIcon />
          <p>4.88</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>
        Beach and Seas Views
      </p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>15-18 Feb</p>
    </div>
  );
};

export default Card;
