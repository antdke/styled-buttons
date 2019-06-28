import React from "react";

const color = "blue";

const BlueButton = () => {
  const handleClick = (event: string) => {
    return color;
  };

  return (
    <div>
      <button onClick={() => handleClick(color)}>Blue</button>
    </div>
  );
};

export default BlueButton;
