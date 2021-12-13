import React, { useState } from "react";
import styles from "./StepName.module.css";
import {Button} from "../../../components/Button/Button";
import {useDispatch} from "react-redux";
import {setName} from "../../../store/activate-slice";
export const StepName = ({onNext}) => {
  const [fullname,setfullName] = useState("");
  const dispatch = useDispatch();
  const submit = ()=>{
    if(fullname!==""){
      dispatch(setName(fullname));
      onNext();
    }
    
  };
  return (
    <div className={styles.stepName}>
      <div className={styles.card}>
        <div className={styles.cardWrap}>
          <div className={styles.heading}>
            <img src="/images/welcomemoji.png" alt="/" width={32} />
            <h3>What’s your full name?</h3>
          </div>
          <div className={styles.inputWrap}>
            <input type="text" placeholder="Your name" onChange={(e)=>setfullName(e.target.value)} value={fullname}/>
          </div>
          <div className={styles.content}>
            <p>
           People use real names at codershouse :) 
            </p>
          </div>
          <Button
            content="Next"
            link="/register"
            style={{ margin: "10px auto", marginTop: "40px" }}
            onNext={()=>submit()}
          />
        
        </div>
      </div>
    </div>
  );};
