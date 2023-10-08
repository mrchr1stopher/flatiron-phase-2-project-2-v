import React from "react";
import Footer from "./Footer";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <header>
        <h1>Welcome</h1>
        <div>Welcome to the English/Spanish Word Catalog</div>
        <p>Study words in the Catalog section</p>
        <img
          src="https://media.istockphoto.com/photos/spain-and-united-states-two-flags-together-realations-textile-cloth-picture-id1089425064?k=6&m=1089425064&s=612x612&w=0&h=jo0OAxrZb-8OX_7mNkrrGyYDM0zXvtA2zWo5abXg4jQ="
          alt="Spain and United States flags"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <p>Test you knowledge with a quiz</p>
      </header>
      <Footer />
    </div>
  );
};

export default Main;
