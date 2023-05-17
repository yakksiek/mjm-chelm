import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PhotoGallery from "../components/PhotoGallery";
import { heroPhotos, partnersHero } from "../data";

import classes from "./HeroSection.module.css";

const HeroSection = () => {
  const [heroGallery, setHeroGallery] = useState(heroPhotos);
  const [heroGalleryMobile, setHeroGalleryMobile] = useState(
    heroPhotos.slice(0, 3)
  );
  const [isDesktop, setDesktop] = useState(window.innerWidth > 760);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 759);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [isDesktop]);

  return (
    <main>
      <div className={`${classes.hero}`}>
        <div className={classes.info}>
          <h1>"MJM"</h1>
          <h2>Sp. z o. o. Chełm</h2>
          <div className={`${classes.bio}`}>
            <p>
              "MJM” Sp. z o.o. rozpoczęła działalność dnia 08.03.1994 roku.
              Podstawowy zakres działalności Spółki to wykonawstwo i montaż
              konstrukcji stalowych, obróbka skrawaniem, remonty mechaniczne
              maszyn i urządzeń przemysłowych, wykonawstwo części zamiennych i
              ich regeneracja, naprawa, modernizacja i konserwacja urządzeń
              podlegających UDT.
            </p>
            <p>
              Od 2018 r. ”MJM” Sp. z o. o. dołączyła do grona Hardox Wearparts -
              sieci czołowego światowego producenta części eksploatacyjnych i
              usługodawcy w zakresie blach trudnościeralnych grupy SSAB,
              producenta blach trudnościeralnych Hardox.
            </p>
          </div>
        </div>

        <div className={classes["image-container"]}>
          <div className={classes["hero-gallery"]}>
            {isDesktop ? (
              <PhotoGallery images={heroGallery} />
            ) : (
              <PhotoGallery images={heroGalleryMobile} />
            )}
          </div>
        </div>
      </div>

      <div className={classes.partners}>
        <h3>Nasi partnerzy i certyfikaty</h3>
        <div className={classes["logo-partners-container"]}>
          {partnersHero.map((partner) => {
            const { id, url, img, name } = partner;

            return (
              <div key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img src={img} alt={name} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
