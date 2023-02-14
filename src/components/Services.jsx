import React from "react";
import { Link } from "react-router-dom";

import classes from "./Services.module.css";

const Products = () => {
  return (
    <section className={` ${classes["section-services"]} section`}>
      <h3>Czym się zajmujemy</h3>

      <div className={`${classes["container-services"]}`}>
        <div className={classes.service}>
          <h4>Wykonastwo i montaż konstrukcji stalowych</h4>
          <ul>
            <li>estakady pod taśmociągi, podpory, słupy, schody, pomosty</li>
            <li>podtorza suwnic i wciągników, belki podsuwnicowe</li>
            <li>kratownice</li>
          </ul>
        </div>
        <div className={classes.service}>
          <h4>Montaż, naprawa, modernizacja i konserwacja dźwignic</h4>
          <ul>
            <li>suwnice i wciągniki, wciągarki</li>
            <li>podesty ruchome</li>
            <li>żurawie stałe i samojezdne</li>
          </ul>
        </div>
        <div className={classes.service}>
          <h4>
            Spółka „MJM” posiada następujące certyfi- katy, uprawnienia i
            pozwolenia:
          </h4>
          <ul>
            <li>
              Certyfikat ISO 9001 - System zarządzania jakością zgodny z normą
              PN-EN ISO 9001:2009 wydany 28.12.2010 r.
            </li>
            <li>
              Certyfikat ISO 3834-2 – System jakości w spawalnictwie zgodny z
              normą PN-EN ISO 3834-2:2007 – wydany 28.12.2010 r.
            </li>
            <li>
              uprawnienia do montażu suwnic i cięgników - decyzja Urzędu Dozoru
              Technicznego NR-UD-13-39-M/1-97
            </li>
            <li>
              uprawnienia do naprawy suwnic - decyzja Urzędu Dozoru Technicznego
              Nr-UD-13-39-N/1-97
            </li>
            <li>
              uprawnienia do modernizacji podestów ruchomych, suw- nic, żurawi
              samojezdnych i stałych, wciągarek, dźwigników, wózków jezdniowych
              – decyzja Urzędu Dozoru Technicznego NR-UD-13-39-P/1-04
            </li>
            <li>
              uprawnienia do prowadzenia działalności szkoleniowej – wpis do
              ewidencji szkół i placówek niepublicznych prowa- dzonej przez
              Urząd Miasta Chełma pod nr 9
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
