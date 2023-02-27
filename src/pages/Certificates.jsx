import React from "react";
import PhotoGallery from "../components/PhotoGallery";

import { certificates } from "../data";
import classes from "./Certificates.module.css";

const Certificates = () => {
  return (
    <section className={`${classes["page-certificates"]} page`}>
      <div className="page-container">
        <h2>Certyfikaty i uprawnienia</h2>
        <PhotoGallery images={certificates} />
      </div>
    </section>
  );
};

export default Certificates;
