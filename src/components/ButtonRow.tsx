import React from "react";
import BlueButton from "./BlueButton";

const gridStyles = {
  display: "flex",
  flexDirection: "row" as "row"
};

const ButtonRow = () => {
  return (
    <section style={gridStyles}>
      <BlueButton />
    </section>
  );
};

export default ButtonRow;
