import React, { useState } from "react";
import Box from "./Box";

const gridStyles = {
  display: "flex",
  flexDirection: "row" as "row",
  margin: "85px auto",
  width: "300px"
};

const buttonStyles = {
  width: "125px",
  height: "35px",
  borderRadius: "6px",
  outline: "none",
  fontSize: "16px"
};

const BoxAndButtons = () => {
  const [color, setColor] = useState("grey");

  return (
    <div>
      <Box color={color} />
      <section style={gridStyles}>
        <button style={buttonStyles} onClick={() => setColor("blue")}>
          Blue
        </button>
        <button style={buttonStyles} onClick={() => setColor("red")}>
          Red
        </button>
      </section>
    </div>
  );
};

export default BoxAndButtons;
