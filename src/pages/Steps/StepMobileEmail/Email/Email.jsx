import React from "react";
import { Button } from "../../../../components/Button/Button";
import styles from "./Email.module.css";
export const Email = () => {
  return (
    <div className="card">
      <div className={styles.heading}>
        <img src="/images/email_fill.png" alt="" />
        <h4>Enter your email id</h4>
      </div>
      <div className={styles.inputWrapper}>
        <input placeholder="deep@example.co" type="email" />
      </div>
      <div className={styles.buttonWrapper}>
        <Button content="Next" />
      </div>
      <div className={styles.contentWrapper}>
        <p>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </div>
  );
};
