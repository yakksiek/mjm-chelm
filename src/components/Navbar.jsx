import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";

import { links } from "../data";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect();
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight.height}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className={classes["nav-center"]}>
        <div className={classes["nav-header"]}>
          <Link to="/">
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
          <button
            className={`${showLinks ? classes["nav-toggle-clicked"] : ""} ${
              classes["nav-toggle"]
            } `}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          ref={linksContainerRef}
          className={`${showLinks ? classes["show-container"] : ""} ${
            classes["links-container"]
          } `}
        >
          <ul className={classes.links} ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <NavLink key={id} to={url} className={classes.link}>
                  <li onClick={() => setShowLinks(!showLinks)}>{text}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
