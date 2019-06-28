import React, { useState } from "react";

type BoxProps = {
  // start with a prop for the color
  color: string;
};

const boxStyle = {
  display: "flex",
  width: "100px",
  margin: "0 auto",
  justifyContent: "center" as "center",
  backgroundColor: "blue",
  padding: "50px"
};

const Box: React.FC<BoxProps> = ({ color }) => {
  //const [boxColor, changeColor] = useState("grey");

  return (
    <section style={boxStyle}>
      <h3>This is a box</h3>
    </section>
  );
};

export default Box;
