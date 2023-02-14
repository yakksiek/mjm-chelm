import React from "react";
import SingleProduct from "../components/SingleProduct";
import { rangeOfServices } from "../data";

import classes from "./Offer.module.css";

const Offer = () => {
  return (
    <section className={`${classes["section-offer"]} page-container`}>
      <h2>Nasza oferta obejmuje</h2>
      <section>
        {rangeOfServices.map((service) => {
          return <SingleProduct key={service.id} {...service} />;
        })}
      </section>
    </section>
  );
};

export default Offer;
