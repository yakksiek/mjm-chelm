import React from "react";

import classes from "./Services.module.css";

const Products = () => {
  return (
    <section className={`${classes["section-services"]} section`}>
      <div className="container">
        <h3>Czym się zajmujemy</h3>
      </div>
      <div className={`${classes["container-services"]} container`}>
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
          <h4>Remonty i modernizacja ciągów technologicznych, maszyn i urządzeń przemysłowych</h4>
          <ul>
            <li>piece obrotowe, chłodniki planetarne i rusztowe</li>
            <li>młyny cementu, surowca, węgla, wapna</li>
            <li>suszarnie</li>
          </ul>
        </div>
      </div>
      <button className="button">Zobacz pełną ofertę</button>
    </section>
  );
};

export default Products;
