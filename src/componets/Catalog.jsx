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

        // Fetch 1000 Items
        const responseCatalogItems = await fetch(
          `http://localhost:3000/words?_start=${catalogIndex}&_limit=1000`
        );
        if (!responseCatalogItems.ok) {
          throw new Error("Network response was not ok");
        }
        let dataCatalogItems = await responseCatalogItems.json();

        // Filter catalog
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
    if (catalogIndex + 1000 <= maxIndex) {
      setCatalogIndex((prevIndex) => prevIndex + 1000);
    }
  };

  // Back Button
  const handlePreviousCatalogItems = () => {
    if (catalogIndex >= 1000) {
      setCatalogIndex((prevIndex) => prevIndex - 1000);
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
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="Food">Food</option>
      </select>
      {catalogItems.length > 0 && (
        <div>
          {catalogItems.map((item) => (
            <div key={item.id} className="catalog-item">
              <p>English: {item.english}</p>
              <div className="image-container">
                <img
                  src={item.image}
                  alt={`${item.english}`}
                  className="catalog-image"
                />
              </div>
              <p>Spanish: {item.spanish}</p>
              <button onClick={() => handleDeleteCatalogItem(item.id)}>
                Delete
              </button>
            </div>
          ))}
          <button onClick={handlePreviousCatalogItems}>Previous Items</button>
          <button onClick={handleNextCatalogItems}>Next Items</button>
        </div>
      )}
    </div>
  );
};

export default Catalog;
