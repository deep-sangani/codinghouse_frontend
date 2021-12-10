import React, { useState } from "react";
import { Email } from "./Email/Email";
import { Phone } from "./Phone/Phone";
import styles from "./StepMobileEmail.module.css";
export const StepMobileEmail = ({ onNext }) => {
  const phoneEmailMap = {
    phone: Phone,
    email: Email,
  };
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.buttonWrap}>
          <button
            onClick={() => setType("phone")}
            className={type === "phone" && styles.buttonActive}
          >
            <img src="/images/phone.png" alt="phone" width={30} />
          </button>
          <button
            onClick={() => setType("email")}
            className={type === "email" ? styles.buttonActive:undefined}
          >
            <img src="/images/email.png" alt="email" width={30} />
          </button>
        </div>
        <Component onNext={onNext} />
      </div>
    </div>
  );
};
