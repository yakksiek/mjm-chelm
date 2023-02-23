import React from "react";

import classes from "./Contact.module.css";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="section">
      <div className={classes["contact-container"]}>
        <div className={classes["contact-info"]}>
          <div>
            <HiLocationMarker
              className={`${classes["icon-address"]} ${classes["contact-icon"]}`}
            />
            <p>"MJM" Sp. z o. o.</p>
            <p>ul. Fabryczna 6</p>
            <p>22-100 Chełm</p>
            <p>województwo lubelskie</p>
          </div>
          <div>
            <BsTelephone
              className={`${classes["icon-phone"]} ${classes["contact-icon"]}`}
            />
            <p>tel. 82 563 26 52</p>
            <p>tel. 82 564 65 41</p>
          </div>
          <div>
            <HiOutlineMail
              className={`${classes["icon-email"]} ${classes["contact-icon"]}`}
            />
            <p>
              <a href="mailto:mjm@mjm.chelm.pl">mjm@mjm.chelm.pl</a>
            </p>
          </div>
        </div>

        <div className={classes["company-details-container"]}>
          <div className={classes["company-details"]}>
            <div>
              <h4>Zarząd:</h4>
              <p>Jerzy Jonak - Prezes Zarządu</p>
              <p>Marian Kociuba - Wiceprezes Zarządu</p>
            </div>

            <div>
              <p>KRS 0000092052</p>
              <p>NIP 563-001-55-37</p>
              <p>REGON 110086692</p>
            </div>
          </div>

          <div className={classes["map-container"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5265729167672!2d23.53785311630435!3d51.13564007957579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47239ab91931b959%3A0xa1e0e9518298a35a!2s%22MJM%22%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1672087981649!5m2!1spl!2spl"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
