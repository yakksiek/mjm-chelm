import React from "react";

import classes from "./Contact.module.css";
import mjm18 from "../assets/MJM18.jpg";

const Contact = () => {
  return (
    <section className="section page">
      <div className={classes["contact-container"]}>
        <div className={classes["contact-img"]}>
          <img src={mjm18} alt="welding process close up" />
        </div>
        <div>
          <div className={classes["contact-info-container"]}>
            <div className={classes["contact-info"]}>
              <h2>"MJM" Sp. z o. o.</h2>
              <p>ul. Fabryczna 6</p>
              <p>22-110 Chełm</p>
              <p>województwo lubelskie</p>
            </div>

            <div
              className={`${classes["contact-details"]} ${classes["contact-info"]}`}
            >
              <div>
                <p>tel./fax 82 563 26 52</p>
                <p>tel. 82 564 65 41</p>
                <p>tel. 82 564 66 91</p>
                <p>tel. 82 564 64 40</p>
                <p>mjm@mjm.chelm.pl</p>
              </div>
              <div>
                <p>KRS 0000092052</p>
                <p>NIP 563-001-55-37</p>
                <p>REGON 110086692</p>
              </div>
            </div>

            <div className={classes["contact-info"]}>
              <h4>Zarząd:</h4>
              <p>Jerzy Jonak - Prezes Zarządu</p>
              <p>Marian Kociuba - Wiceprezes Zarządu</p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5265729167672!2d23.53785311630435!3d51.13564007957579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47239ab91931b959%3A0xa1e0e9518298a35a!2s%22MJM%22%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1672087981649!5m2!1spl!2spl"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
