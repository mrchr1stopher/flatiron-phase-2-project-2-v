import React, { useState, useEffect } from "react";

const WordBank = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((response) => response.json())
      .then((data) => setWords(data.words))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Word Bank</h1>
    </div>
  );
};

export default WordBank;
