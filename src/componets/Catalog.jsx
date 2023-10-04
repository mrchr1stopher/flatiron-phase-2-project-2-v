import React, { useState, useEffect } from "react";

const Catalog = () => {
  const [catalogItems, setCatalogItems] = useState([]);
  const [catalogIndex, setCatalogIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchCatalogItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/words");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const maxIndex = data.length - 1;
        setMaxIndex(maxIndex);

        // Fetch Items
        const responseCatalogItems = await fetch(
          `http://localhost:3000/words?_start=${catalogIndex}&_limit=10`
        );
        if (!responseCatalogItems.ok) {
          throw new Error("Network response was not ok");
        }
        let dataCatalogItems = await responseCatalogItems.json();

        if (selectedCategory !== "All") {
          dataCatalogItems = dataCatalogItems.filter(
            (item) => item.category === selectedCategory
          );
        }

        setCatalogItems(dataCatalogItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCatalogItems();
  }, [catalogIndex, selectedCategory]);

  const handleNextCatalogItems = () => {
    if (catalogIndex + 10 <= maxIndex) {
      setCatalogIndex((prevIndex) => prevIndex + 10);
    }
  };

  // Back Button
  const handlePreviousCatalogItems = () => {
    if (catalogIndex >= 10) {
      setCatalogIndex((prevIndex) => prevIndex - 10);
    }
  };

  // Delete Button
  const handleDeleteCatalogItem = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3000/words/${itemId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("error network response");
      }

      setCatalogItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div>
      <h1>Catalog</h1>
      <label htmlFor="category">Filter by Category: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Animals">Animals</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>
      <div className="catalog-container">
        {catalogItems.length > 0 && (
          <div className="catalog-items">
            {catalogItems.map((item) => (
              <div key={item.id} className="catalog-item">
                <p>
                  English: {item.english} <br></br>Spanish: {item.spanish}
                </p>
                <div className="image-container">
                  <img
                    src={item.image}
                    alt={`${item.english}`}
                    className="catalog-image"
                  />
                </div>
                <button onClick={() => handleDeleteCatalogItem(item.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="catalogbuttons">
          <button onClick={handlePreviousCatalogItems}>Previous</button>
          <button onClick={handleNextCatalogItems}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
