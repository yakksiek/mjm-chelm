import React from "react";
import PhotoGallery from "../components/PhotoGallery";

import classes from './Gallery.module.css'

const Gallery = () => {
  return (
    <section className={`${classes['page-gallery']}`}>
      <div className="page-container">
        <h2>Galeria</h2>
        <PhotoGallery />
      </div>
    </section>
  );
};

export default Gallery;
