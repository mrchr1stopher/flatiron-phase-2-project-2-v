import React, { useState, useEffect } from "react";

const WordBank = () => {
  const [word, setWord] = useState(null);
  const [wordId, setCurrentId] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/words/${wordId}`)
      .then((response) => {
        if (!response.ok) {
          console.error("Fetch request failed with status:", response.status);
        } else {
          return response.json().then((data) => {
            setWord(data);
            console.log("Data fetched successfully:", data);
          });
        }
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
          <p>Spanish: {word.spanish}</p>
        </div>
      )}
    </div>
  );
};

export default WordBank;
