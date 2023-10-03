import React, { useState, useEffect } from "react";

const WordBank = () => {
  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((response) => {
        if (!response.ok) {
          console.error("Fetch request failed with status:", response.status);
        } else {
          return response.json().then((data) => {
            console.log("Data fetched successfully:", data);
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Word Bank</h1>
    </div>
  );
};

export default WordBank;
