import React from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import "./App.css";

document.body.style.backgroundColor = "#efecf5";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Box color={"blue"} />
    </div>
  );
};

export default App;
