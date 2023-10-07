import React from "react";

const ComboCounter = ({ comboCount }) => {
  let comboWord = "";

  if (comboCount >= 10) {
    comboWord = "PERFECTO";
  } else if (comboCount >= 7) {
    comboWord = "EXCELENTE";
  } else if (comboCount >= 4) {
    comboWord = "MUY BIEN";
  } else if (comboCount >= 2) {
    comboWord = "BIEN";
  }

  return <div>{comboWord}</div>;
};

export default ComboCounter;
