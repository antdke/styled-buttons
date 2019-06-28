import React, { useState } from "react";

const [color, changeColor] = useState("grey");

type BoxProps = {
  // start with a prop for the color
  color: string;
};

const Box: React.FC<BoxProps> = ({ color }) => {
  return <section />;
};
