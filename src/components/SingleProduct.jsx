import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import classes from "./SingleProduct.module.css";

const SingleProduct = ({ title, services }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={classes.service} onClick={() => setShowInfo(!showInfo)}>
      <header>
        <h4>{title}</h4>
        <button
          className={classes["btn-toggle"]}
          // onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && (
        <ul>
          {services.map((service, i) => {
            return <li key={i}>{service}</li>;
          })}
        </ul>
      )}
    </article>
  );
};

export default SingleProduct;
