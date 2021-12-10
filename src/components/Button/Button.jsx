import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";
export const Button = ({ content, link, style, onNext }) => {
  const navigate = useNavigate();
  const onclick = () => {
    link && navigate(link);
    onNext && onNext();
  };
  return (
    <button
      className={styles.button}
      style={style && style}
      onClick={() => onclick()}
    >
      <p>{content}</p>
      <img src="/images/arrow.png" alt="/" />
    </button>
  );
};
