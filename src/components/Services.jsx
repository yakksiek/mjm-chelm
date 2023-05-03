import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Services.module.css";
import { landingPageServices } from "../data";

const Products = () => {
  const [mainServices, setMainServices] = useState(landingPageServices);
  return (
    <section className={` ${classes["section-services"]} section`}>
      {/* <h3>Czym się zajmujemy</h3> */}
      <div className={`${classes["container-services"]}`}>
        {mainServices.map((element) => {
          const { id, title, img, services } = element;
          return (
            <div key={id} className={classes.service}>
              <h4>{title}</h4>
              {/* <img src={img} alt={title} /> */}
              <ul>
                {services.map((singleOffer, index) => {
                  return <li key={index}>{singleOffer}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <Link to="/oferta">
        <button className={`button ${classes["button-view-offer"]}`}>
          Zobacz pełną ofertę
        </button>
      </Link>
    </section>
  );
};

export default Products;
