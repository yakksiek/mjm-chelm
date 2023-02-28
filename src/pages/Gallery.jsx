import React from "react";
import PhotoGallery from "../components/PhotoGallery";

import classes from './Gallery.module.css'
import { photos } from "../data";

const Gallery = () => {
  return (
    <section className={`${classes['page-gallery']} page`}>
      <div className="page-container">
        <h2>Galeria</h2>
        <PhotoGallery images={photos}/>
      </div>
    </section>
  );
};

export default Gallery;
