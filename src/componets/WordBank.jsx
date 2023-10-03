import React, { useState, useEffect } from "react";

const WordBank = () => {
  const [word, setWord] = useState();
  const [wordId, setCurrentId] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/words/${wordId}`)
      .then((response) => response.json())
      .then((data) => {
        setWord(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [wordId]);

  return (
    <div>
      <h1>Word Bank</h1>
      {word && (
        <div>
          <p>English: {word.english}</p>
          <img
            src={word.image}
            alt={`${word.english}`}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
          <p>Spanish: {word.spanish}</p>
          <button onClick={() => setCurrentId(wordId - 1)}>
            Previous Word
          </button>
          <button onClick={() => setCurrentId(wordId + 1)}>Next Word</button>
        </div>
      )}
    </div>
  );
};

export default WordBank;
