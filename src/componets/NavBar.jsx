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
        to="/header"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
          color: "red",
        }}
      >
        head
      </NavLink>

      <NavLink
        to="/wordbank"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
          color: "red",
        }}
      >
        Word Bank
      </NavLink>

      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
          color: "red",
        }}
      >
        Footer
      </NavLink>
    </div>
  );
}

export default NavBar;
