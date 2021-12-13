import React, { useState } from "react";
import { StepName } from "../Steps/StepName/StepName";
import { StepAvatar } from "../Steps/StepAvatar/StepAvatar";

const STEP = {
  1: StepName,
  2: StepAvatar,
};
export const Activate = () => {
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