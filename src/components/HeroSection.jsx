import React from "react";
import { Link } from "react-router-dom";

import classes from "./HeroSection.module.css";
import heroImage from "../assets/hero-image2.jpeg";
import mjm12 from "../assets/mjm12.jpg";
import mjm18 from "../assets/MJM18.jpg";
import certificate1 from "../assets/certificate1.png";
import lubelskieLogo from "../assets/wojewodztwo-lubelskie.jpeg";
import cemex from "../assets/cemex.png";

const HeroSection = () => {
  return (
    <main>
      <div className={`${classes.hero} section`}>
        <div className={classes.info}>
          <h1>MJM</h1>
          <h2>Sp. z o. o. Chełm</h2>
          <h3>
            Zbudujmy przyszłość razem
            <span className={classes["info-dot"]}>.</span>
          </h3>
          <div className={classes["call-to-action"]}>
            <Link className={classes["button-hero"]} to="/kontakt">
              <button className="button">Kontakt</button>
            </Link>
          </div>
        </div>
        <div className={classes["image-container"]}>
          <img src={mjm12} className={classes["image-hero"]} />
        </div>
      </div>
      <div className={`${classes.bio} section`}>
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
            <img src={lubelskieLogo} alt="logo-lubelskie" />
          </div>
          <div>
            <img src={cemex} alt="logo-cemex" />
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
