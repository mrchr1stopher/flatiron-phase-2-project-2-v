import React, { useState, useEffect } from "react";
import ComboCounter from "./ComboCounter";
import SpanishCharacters from "./SpanishCharacters";
import Health from "./Health";

const Quiz = () => {
  const [word, setWord] = useState();
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [comboCount, setComboCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [hearts, setHearts] = useState(3);

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

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const checkAnswer = () => {
    setShowAnswer(true);

    if (userAnswer.toLowerCase() === word?.spanish.toLowerCase()) {
      setScore((prevScore) => prevScore + 1);
      setComboCount((prevComboCount) => prevComboCount + 1);
    } else {
      setComboCount(0);

      setHearts((prevHearts) => prevHearts - 1);

      if (hearts <= 1) {
        setQuizCompleted(true);
      }
    }

    if (score >= 9) {
      setQuizCompleted(true);
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && !showAnswer) {
      checkAnswer();
    }
  };

  const getNextWord = () => {
    setUserAnswer("");
    setShowAnswer(false);
    fetchRandomWord();
  };

  return (
    <div>
      <h1>English to Spanish Quiz</h1>
      <div>
        <p>Translate the English word to Spanish:</p>
        <p>Score: {score}</p>
        <ComboCounter comboCount={comboCount} />
        <Health hearts={hearts} />
        {word && (
          <div className="image-container">
            <img
              src={word.image}
              alt={word.english}
              className="catalog-image"
            />
          </div>
        )}
        {word && <p>{word.english}</p>}
        <input
          type="text"
          placeholder="Your answer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyPress={handleInputKeyPress}
          disabled={quizCompleted}
        />
        <button onClick={checkAnswer} disabled={quizCompleted}>
          Check Answer
        </button>
        <SpanishCharacters />
        {showAnswer && <p>Correct Answer: {word.spanish}</p>}
        {showAnswer && !quizCompleted && (
          <div>
            <button onClick={getNextWord}>Next Word</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
