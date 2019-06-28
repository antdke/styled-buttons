import React, { useState } from "react";
import Box from "./Box";

const gridStyles = {
  display: "flex",
  flexDirection: "row" as "row",
  margin: "85px auto",
  width: "300px"
};

const BoxAndButtons = () => {
  const [color, setColor] = useState("grey");

  return (
    <div>
      <Box color={color} />
      <section style={gridStyles}>
        <button onClick={() => setColor("blue")}>Blue</button>
      </section>
    </div>
  );
};

export default BoxAndButtons;
