import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.card}>
        <div className={styles.heading}>
          <img src="/images/logo.png" alt="/" width={32} />
          <h3>Welcome to Code House</h3>
        </div>
        <div className={styles.content}>
          <p>
            We’re working hard to get Codershouse ready for everyone! While we
            wrap up the finishing youches, we’re adding people gradually to make
            sure nothing breaks
          </p>
        </div>
        <Button
          content="Get Your Username"
          link="/register"
          style={{ margin: "10px auto", marginTop: "40px" }}
        />
        <Link className={styles.linksignin} to="/authenticate">
          <p>Have invite Text?</p>
          <span>Sign in</span>
        </Link>
      </div>
    </div>
  );
};
