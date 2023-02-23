import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../data";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes["footer-section"]}>
      <div className={`page-container ${classes["footer-content"]}`}>
        <div className={classes["footer-address-container"]}>
          <div className={classes["footer-address"]}>
            <p>"MJM" Sp. z o.o.</p>
            <p>22-100 Chełm ul. Fabryczna 6</p>
          </div>
          <div>
            <p>tel. 82 564 65 41</p>
            <p>tel./fax 82 563 26 52</p>
            <p>
              <a href="mailto:mjm@mjm.chelm.pl">mjm@mjm.chelm.pl</a>
            </p>
          </div>
        </div>
        <div>
          <ul className={classes["footer-links"]}>
            {footerLinks.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <Link to={url} className={`${classes["footer-link"]}`}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
