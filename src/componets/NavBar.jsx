import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "20px",
  margin: "0 5px 5px",
  background: "black",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/catalog"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
          color: "gold",
        }}
      >
        Catalog
      </NavLink>

      <NavLink
        to="/quiz"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
          color: "gold",
        }}
      >
        Quiz
      </NavLink>

      <NavLink
        to="/addword"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
          color: "gold",
        }}
      >
        Add a word
      </NavLink>
    </div>
  );
}

export default NavBar;
