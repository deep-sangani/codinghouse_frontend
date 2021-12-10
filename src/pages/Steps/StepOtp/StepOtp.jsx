import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../components/Button/Button";
import styles from "./StepOtp.module.css";
import { verifyOtp } from "../../../http";
import { useSelector,useDispatch } from "react-redux";
import {setAuth} from "../../../store/user-slice";
export const StepOtp = ({ onNext }) => {
  const [focus, setFocus] = useState(1);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const [otp, setOtp] = useState(Array(4).fill(null));
  const { phoneno, hash } = useSelector((state) => state.auth.otp);
  const dispatch = useDispatch();
  useEffect(async() => {
    const OTP = otp.join("");
    console.log(OTP);
    if(otp.every((ele)=>ele!== null)){
      await submit();
    }
  }, [otp]);

  const submit = async () => {
    try {
      const { data } = await verifyOtp({ phoneno, otp:otp.join(""), hash });
      console.log(data);
      dispatch(setAuth(data));
      onNext();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.mainWrapper}>
      <div className="card">
        <div className={styles.heading}>
          <img src="/images/lock.png" alt="" />
          <h4>Enter the code we just texted you</h4>
        </div>
        <div className={styles.inputWrapper}>
          <input
            placeholder="1"
            type="tel"
            maxLength={1}
            minLength={1}
            className={focus === 1 && styles.active}
            onFocus={() => setFocus(1)}
            onChange={(e) => {
              let dummy = [...otp];
              dummy[0] = e.target.value;
              setOtp(dummy);
              if (e.target.value) {
                setFocus(2);
                ref2.current.focus();
              }
            }}
            ref={ref1}
          />
          <input
            placeholder="2"
            type="tel"
            maxLength={1}
            minLength={1}
            className={focus === 2 && styles.active}
            onFocus={() => setFocus(2)}
            onChange={(e) => {
              let dummy = [...otp];
              dummy[1] = e.target.value;
              setOtp(dummy);
              if (e.target.value) {
                setFocus(3);
                ref3.current.focus();
              } else {
                setFocus(1);
                ref1.current.focus();
              }
            }}
            ref={ref2}
            onKeyPress={(e) => {
              !e.key && console.log("hii");
            }}
          />
          <input
            placeholder="3"
            type="tel"
            maxLength={1}
            minLength={1}
            className={focus === 3 && styles.active}
            onFocus={() => setFocus(3)}
            onChange={(e) => {
              let dummy = [...otp];
              dummy[2] = e.target.value;
              setOtp(dummy);
              if (e.target.value) {
                setFocus(4);
                ref4.current.focus();
              } else {
                setFocus(2);
                ref2.current.focus();
              }
            }}
            ref={ref3}
          />
          <input
            placeholder="4"
            type="tel"
            maxLength={1}
            minLength={1}
            className={focus === 4 && styles.active}
            onFocus={() => setFocus(4)}
            onChange={(e) => {
              let dummy = [...otp];
              dummy[3] = e.target.value;
              setOtp(dummy);
              if (e.target.value) {
                // setFocus(5);
              } else {
                ref3.current.focus();
              }
            }}
            ref={ref4}
          />
        </div>

        <div className={styles.contentWrapper}>
          <p>Didn’t receive? Tap to resend</p>
        </div>
        <div className={styles.buttonWrapper}>
          <Button content="Next" onNext={submit} />
        </div>
      </div>
    </div>
  );
};
