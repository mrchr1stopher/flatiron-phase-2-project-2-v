import React, { useState } from "react";
import SpanishCharacters from "./SpanishCharacters";
import "./AddWord.css";

const AddWord = () => {
  const [newWord, setNewWord] = useState({
    english: "",
    spanish: "",
    image: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWord({ ...newWord, [name]: value });
  };

  const handleAddWord = () => {
    if (
      !newWord.english ||
      !newWord.spanish ||
      !newWord.image ||
      !newWord.category
    ) {
      alert("Please fill out all fields.");
      return;
    }

    fetch("http://localhost:3000/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    })
      .then((response) => response.json())
      .then(() => {
        setNewWord({ english: "", spanish: "", image: "", category: "" });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div className="formContainer">
      <h1>Add a new word</h1>
      <p>Please ensure you fill out all forms</p>

      <form>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={newWord.category}
            onChange={handleInputChange}
          >
            <option value="">Select a category</option>
            <option value="Animals">Animals</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>
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
      <SpanishCharacters />
    </div>
  );
};

export default AddWord;
