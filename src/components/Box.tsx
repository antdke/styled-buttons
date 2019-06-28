import React, { useState } from "react";

type BoxProps = {
  // start with a prop for the color
  color: string;
};

const Box: React.FC<BoxProps> = ({ color }) => {
  //const [boxColor, changeColor] = useState("grey");

  return (
    <section
      style={{
        display: "flex",
        width: "100px",
        margin: "90px auto",
        backgroundColor: color,
        padding: "50px"
      }}
    >
      <h3>This is a box</h3>
    </section>
  );
};

export default Box;
