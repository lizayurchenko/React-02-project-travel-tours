import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, remove }) => {
  const [isInfo, setIsInfo] = useState(false);

  return (
    <article className="single-tour">
      <img className="img" src={image} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isInfo ? info : `${info.substring(0, 200)}... `}
          <button className="info-btn" onClick={() => setIsInfo(!isInfo)}>
            {isInfo ? "Read less" : "Read more"}
          </button>
        </p>

        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => remove(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
