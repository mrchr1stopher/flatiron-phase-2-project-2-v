import React from "react";

const Health = ({ hearts }) => {
  const heartIcon = "❤️".repeat(hearts);

  return <div>{heartIcon}</div>;
};

export default Health;
