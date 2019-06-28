import React from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import ButtonRow from "./components/ButtonRow";
import "./App.css";

document.body.style.backgroundColor = "#e4dfee";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Box color={"grey"} />
      <ButtonRow />
    </div>
  );
};

export default App;
