import React from "react";
import { useState } from "react";
import "./style.css";
import { links } from "../../assets/images-links";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i == selectedFilter && "selected-box"}`}
          onClick={() => {
            console.log("Selecting key", i);
            setSelectedFilter(i);
          }}
        >
          <img src={item.imgSrc} alt={"props"} className="links-img" />
          <p
            className={`links-label ${i == selectedFilter && "selected-label"}`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Filter;
