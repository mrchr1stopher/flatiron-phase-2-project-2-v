import React from "react";
import "./ComboCounter.css";

const ComboCounter = ({ comboCount }) => {
  let comboWord = "";
  let comboClass = "";

  if (comboCount >= 10) {
    comboWord = "PERFECTO";
    comboClass = "gold";
  } else if (comboCount >= 7) {
    comboWord = "EXCELENTE";
    comboClass = "silver";
  } else if (comboCount >= 4) {
    comboWord = "MUY BIEN";
    comboClass = "bronze";
  } else if (comboCount >= 2) {
    comboWord = "BIEN";
    comboClass = "bronze";
  }

  return <div className={`combocountertext ${comboClass}`}>{comboWord}</div>;
};

export default ComboCounter;
