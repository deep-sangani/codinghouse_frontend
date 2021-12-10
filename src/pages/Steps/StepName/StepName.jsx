import React from "react";

export const StepName = ({ onNext }) => {
  return (
    <div>
      <p>this is stepName</p>
      <button onClick={onNext}>next</button>
    </div>
  );
};
