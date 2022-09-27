import React, { useState } from "react";
import data from "./data";
import { GrNext, GrPrevious } from "react-icons/gr";

function Review() {
  const [index, setIndex] = useState(0);

  const { image, name, title, quote } = data[index];

  function movePrevious() {
    setIndex((index) => {
      let newIndex = index - 1;
      return newIndex;
    });
  }
  function moveNext() {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex;
    });
  }
  return (
    <div className="review">
      <img src={image} alt={name} width="200" />
      <div>
        <h3>{name}</h3>
        <h6>{title}</h6>
      </div>
      <p>{quote}</p>
      <button className="previous-btn" onClick={movePrevious}>
        <GrPrevious />
      </button>
      <button className="next-btn" onClick={moveNext}>
        <GrNext />
      </button>
    </div>
  );
}

export default Review;
