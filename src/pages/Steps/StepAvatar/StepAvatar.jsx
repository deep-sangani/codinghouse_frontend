import React, { useState } from "react";
import styles from "./StepAvatar.module.css";
import {Button} from "../../../components/Button/Button";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import {setAvatar} from "../../../store/activate-slice";
import {userActivate} from "../../../http";
import {setAuth} from "../../../store/user-slice";

export const StepAvatar = () => {
  const fullname = useSelector(state=>state.activate.name);
  const dispatch = useDispatch();
  const [imgurl,setImgurl] = useState("/images/defaultprofile.png"); 
  const imgChange = (e)=>{
    const imgFile = e.target.files[0];
    const fileReader = new FileReader();
    
    fileReader.onload = function(e){
      console.log(e.target.result);
      setImgurl(e.target.result);
      dispatch(setAvatar(e.target.result));

    };
    fileReader.readAsDataURL(imgFile);
  };
  const submit =async ()=>{

    try {
      const {data} = await userActivate({fullname,avatar:imgurl});
      dispatch(setAuth(data));
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.stepName}>
      <div className={styles.card}>
        <div className={styles.cardWrap}>
          <div className={styles.heading}>
            <img src="/images/monkey.png" alt="/" width={32} />
            <h3>Okey, {fullname} !</h3>
          </div>
          <div className={styles.inputWrap}>
      
            <p>how&apos;s this photo ?</p>
            <img src={imgurl} alt="" />
          </div>
          <div className={styles.content}>
            <input type="file" id="inputPic" hidden onChange={(e)=>imgChange(e)} />
            <label className={styles.imgselect} htmlFor="inputPic">Choose a diffrent photo</label>
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
