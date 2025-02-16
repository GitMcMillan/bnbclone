import React from "react";
import "./style.css";
import { links } from "../../assets/images-links";

const Filter = () => {
  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <img key={i} src={item} alt={"props"} />
      ))}
    </div>
  );
};

export default Filter;
