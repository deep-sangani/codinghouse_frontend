import React, { useState } from "react";
import { StepMobileEmail } from "../Steps/StepMobileEmail/StepMobileEmail";
import { StepOtp } from "../Steps/StepOtp/StepOtp";

const STEP = {
  1: StepMobileEmail,
  2: StepOtp,
};
export const Login = () => {
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
