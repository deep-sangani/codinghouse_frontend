import React, { useState } from "react";
import { Button } from "../../../../components/Button/Button";
import styles from "./Phone.module.css";
import { sendOtp } from "../../../../http";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../../store/user-slice";
export const Phone = ({ onNext }) => {
  const [phone, setPhone] = useState();
  const dispatch = useDispatch();

  const submit = async (phone) => {
    const phoneno = "+91" + phone;
    const { data } = await sendOtp({ phoneno });
    console.log(data);
    dispatch(setOtp({ hash: data.hash, phoneno: data.phoneno }));
    onNext();
  };
  return (
    <div className="card">
      <div className={styles.heading}>
        <img src="/images/telephone.png" alt="" />
        <h4>Enter you phone number</h4>
      </div>
      <div className={styles.inputWrapper}>
        <img src="/images/flag.png" alt="" />
        <input
          placeholder="97271 64672"
          type="tel"
          maxLength={10}
          minLength={10}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button content="Next" onNext={() => submit(phone)} />
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
