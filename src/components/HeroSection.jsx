import React from "react";
import { Link } from "react-router-dom";

import classes from "./HeroSection.module.css";
import mjm12 from "../assets/mjm12.jpg";
import certificate1 from "../assets/certificate1.png";
import hardox from "../assets/hardox.png";
import rzetelnaFirma from "../assets/rzetelna-firma-logo.png";

const HeroSection = () => {
  return (
    <main>
      <div className={`${classes.hero}`}>
        <div className={classes.info}>
          <h1>"MJM"</h1>
          <h2>Sp. z o. o. Chełm</h2>

          <div className={classes["call-to-action"]}>
            <h3>Zbudujmy przyszłość razem.</h3>
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
          "MJM” Sp. z o.o. rozpoczęła działalność dnia 08.03.1994 roku. Powstała
          w wyniku przekształceń własnościowych w Cementowni „Chełm” na bazie
          jej Wydziału Mechanicznego. Podstawowy zakres działalności Spółki to
          wykonawstwo i montaż konstrukcji stalowych, obróbka skrawaniem,
          remonty mechaniczne maszyn i urządzeń przemysłowych, wykonawstwo
          części zamiennych i ich regeneracja, naprawa, modernizacja i
          konserwacja urządzeń podlegających UDT. Usługi świadczymy głównie na
          rzecz zakładów przemysłowych. Realizujemy również kompleksowe zadania
          inwestycyjne.
        </p>
        <p>
          Od 2018 r. ”MJM” Sp. z o. o. dołączyła do grona Hardox Wearparts -
          sieci czołowego światowego producenta części eksploatacyjnych i
          usługodawcy w zakresie blach trudnościeralnych grupy SSAB, producenta
          blach trudnościeralnych Hardox.
        </p>
      </div>
      <div className={classes.partners}>
        <h3>Nasi partnerzy i certyfikaty</h3>
        <div className={classes["logo-partners-container"]}>
          <div>
            <a
              href="https://www.ssab.com/pl-pl/marki-i-produkty/hardox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={hardox} alt="hardox logo" />
            </a>
          </div>

          <div className={classes.certificate1}>
            <a
              href="https://www.udt.gov.pl/o-udt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={certificate1} alt="certificate" />
            </a>
          </div>
          <div>
            <a
              href="https://wizytowka.rzetelnafirma.pl/r/6314b3c331934bb79837fb6b51f047a2d19e1693617a45ddbfbd7e0d24af2ca3/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={rzetelnaFirma} alt="rzetelna firma logo" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
