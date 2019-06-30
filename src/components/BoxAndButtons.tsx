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
  const [curves, setCurves] = useState("0%");

  return (
    <div>
      <Box color={color} curves={curves} />
      <section style={gridStyles}>
        <button style={buttonStyles} onClick={() => setColor("blue")}>
          Blue
        </button>
        <button style={buttonStyles} onClick={() => setColor("red")}>
          Red
        </button>
      </section>
      <section style={gridStyles}>
        <button style={buttonStyles} onClick={() => setCurves("50%")}>
          Circle
        </button>
      </section>
    </div>
  );
};

export default BoxAndButtons;
