import React from "react";
import { Link } from "react-router-dom";

import classes from "./HeroSection.module.css";
import mjm12 from "../assets/mjm12.jpg";
import certificate1 from "../assets/certificate1.png";
import hardox from "../assets/hardox.png";
import cemex from "../assets/cemex.png";

const HeroSection = () => {
  return (
    <main>
      <div className={`${classes.hero}`}>
        <div className={classes.info}>
          <h1>"MJM"</h1>
          <h2>Sp. z o. o. Chełm</h2>

          <div className={classes["call-to-action"]}>
            <h3>
              Zbudujmy przyszłość razem.
            </h3>
            <Link className={classes["button-hero"]} to="/kontakt">
              <button className="button">Kontakt</button>
            </Link>
          </div>
        </div>
        <div className={classes["image-container"]}>
          <img src={mjm12} className={classes["image-hero"]} />
        </div>
      </div>
      <div className={`${classes.bio}`}>
        <p>
          „MJM” Sp. z o.o. rozpoczęła działalność dnia 08.03.1994 roku. Powstała
          w wyniku przekształceń własnościowych w Cementowni „Chełm” na bazie
          jej Wydziału Mechanicznego. Podstawowy zakres działalności Spółki to
          wykonawstwo i montaż konstrukcji stalowych, obróbka skrawaniem,
          remonty mechaniczne maszyn i urządzeń przemysłowych, wykonawstwo
          części zamiennych i ich regeneracja, naprawa, modernizacja i
          konserwacja urządzeń podlegających UDT. Usługi świadczymy głównie na
          rzecz zakładów przemysłowych. Realizujemy również kompleksowe zadania
          inwestycyjne.
        </p>
      </div>
      <div className={classes.partners}>
        <h3>Nasi partnerzy i certifikaty</h3>
        <div className={classes["logo-partners-container"]}>
          <div>
            <img src={hardox} alt="hardox logo" />
          </div>
          <div>
            <img src={cemex} alt="cemex logo" />
          </div>
          <div className={classes.certificate1}>
            <img src={certificate1} alt="certificate" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
