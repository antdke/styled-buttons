import React from "react";
import BlueButton from "./BlueButton";

const gridStyles = {
  display: "flex",
  flexDirection: "row" as "row",
  margin: "85px auto",
  width: "300px"
};

const ButtonRow = () => {
  return (
    <section style={gridStyles}>
      <BlueButton />
    </section>
  );
};

export default ButtonRow;
