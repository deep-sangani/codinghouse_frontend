import React, { useState } from "react";
import { StepAvatar } from "../Steps/StepAvatar/StepAvatar";
import { StepMobileEmail } from "../Steps/StepMobileEmail/StepMobileEmail";
import { StepName } from "../Steps/StepName/StepName";
import { StepOtp } from "../Steps/StepOtp/StepOtp";
import { StepUserName } from "../Steps/StepUserName/StepUserName";
const STEP = {
  1: StepMobileEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUserName,
};
export const Register = () => {
  const [step, setStep] = useState(1);
  const Step = STEP[step];
  const onNext = () => {
    setStep(step + 1);
  };
  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};
