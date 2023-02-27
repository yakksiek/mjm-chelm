import React from "react";
import { Link } from "react-router-dom";

import classes from "./Services.module.css";

const Products = () => {
  return (
    <section className={` ${classes["section-services"]} section`}>
      <h3>Czym się zajmujemy</h3>

      <div className={`${classes["container-services"]}`}>
        <div className={classes.service}>
          <h4>TUTAJ MOŻE TYTUŁ PODSUMOWUJĄCY TĘ GRUPĘ</h4>
          <ul>
            <li>Wykonawstwo i montaż konstrukcji stalowych</li>
            <li>
              Wykonawstwo urządzeń wg dokumentacji zleceniodawcy lub własnych
              projektów oraz części zamiennych do maszyn i urządzeń
            </li>
            <li>
              Remonty i modernizacja ciągów technologicznych, maszyn i urządzeń
              przemysłowych
            </li>
          </ul>
        </div>
        <div className={classes.service}>
          <h4>TUTAJ MOŻE TYTUŁ PODSUMOWUJĄCY TĘ GRUPĘ</h4>
          <ul>
            <li>Obróbka skrawaniem i obróbka plastyczna na zimno lub gorąco</li>
            <li>
              Montaż, naprawa, modernizacja i konserwacja dźwignic (suwnice,
              wciągniki, wciągarki, podesty ruchome, żurawie, dźwigniki, wózki
              jezdniowe)
            </li>
            <li>Wykonawstwo prac spawalniczych</li>
          </ul>
        </div>
        <div className={classes.service}>
          <h4>Spółka "MJM" posiada następujące certyfikaty i uprawnienia:</h4>
          <ul>
            <li>Certyfikat ISO 9001 - System zarządzania jakością</li>
            <li>Certyfikat ISO 3834-2 – System jakości w spawalnictwie</li>
            <li>
              Certyfikat zgodności Zakładowej Kontroli Produkcji wg PN-EN 1090-1
            </li>
            <li>Certyfikat PN ISO 26000 - Społeczna odpowiedzialność</li>
            <li>
              Uprawnienia nadane przez Urząd Dozoru Technicznego do naprawy i
              modernizacji urządzeń dźwignicowych podlegających UDT
            </li>
            <li>
              Uprawnienia do prowadzenia działalności szkoleniowej – wpis do
              ewidencji szkół i placówek niepublicznych
            </li>
          </ul>
        </div>
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
