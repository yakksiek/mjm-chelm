import React from "react";
import PhotoGallery from "../components/PhotoGallery";

import { certificates } from "../data";

const Certificates = () => {
  return (
    <section className=" page page-container">
      <h2>Certyfikaty i uprawnienia</h2>
      <PhotoGallery images={certificates} />
    </section>
  );
};

export default Certificates;
