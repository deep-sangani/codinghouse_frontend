import React from "react";
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
export const Navigation = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeigth: "800",
    fontSize: "20px",
  };
  return (
    <Link to="/" style={linkStyle}>
      <nav className={`${style.navBar} container`}>
        <img
          src="/images/logo.png"
          alt="logo"
          width="42px"
          style={{ paddingRight: "12px" }}
        />
        <h2>Codinghouse</h2>
      </nav>
    </Link>
  );
};
