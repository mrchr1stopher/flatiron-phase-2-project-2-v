import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [word, setWord] = useState();
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchRandomWord = async () => {
      try {
        const response = await fetch("http://localhost:3000/words");
        if (!response.ok) {
          throw Error("Error Loading Random Words");
        }
        const data = await response.json();

        const randomList = Math.floor(Math.random() * data.length);
        const randomWord = data[randomList];
        setWord(randomWord);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRandomWord();
  }, []);

  const checkAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      <h1>English to Spanish Quiz</h1>
      <div>
        <p>Translate the English word to Spanish:</p>
        {word && <p>{word.english}</p>}
        <input
          type="text"
          placeholder="Your answer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button onClick={checkAnswer}>Check Answer</button>
        {showAnswer && <p>Correct Answer: {word.spanish}</p>}
      </div>
    </div>
  );
};

export default Quiz;
