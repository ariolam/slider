import React, { useState } from "react";
import data from "./data";

function Review() {
  const [index] = useState(0);

  const { image, name, title, quote } = data[index];
  return (
    <div className="review">
      <img src={image} alt={name} width="200" />
      <div>
        <h3>{name}</h3>
        <h6>{title}</h6>
      </div>
      <p>{quote}</p>
    </div>
  );
}

export default Review;
