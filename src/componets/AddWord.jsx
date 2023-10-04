import React, { useState } from "react";

const AddWord = () => {
  const [newWord, setNewWord] = useState({
    english: "",
    spanish: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWord({ ...newWord, [name]: value });
  };

  const handleAddWord = () => {
    fetch("http://localhost:3000/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    })
      .then((response) => response.json())
      .then(() => {
        setNewWord({ english: "", spanish: "", image: "" });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div>
      <h2>New Word</h2>
      <form>
        <div>
          <label htmlFor="english">English:</label>
          <input
            type="text"
            id="english"
            name="english"
            value={newWord.english}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="spanish">Spanish:</label>
          <input
            type="text"
            id="spanish"
            name="spanish"
            value={newWord.spanish}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={newWord.image}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleAddWord}>
          Add Word
        </button>
      </form>
    </div>
  );
};

export default AddWord;
