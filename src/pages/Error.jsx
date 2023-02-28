import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="page">
      <h2>coś poszło nie tak...</h2>
      <Link to="/" className="btn">
        idź to strony głównej
      </Link>
    </section>
  );
};

export default Error;
