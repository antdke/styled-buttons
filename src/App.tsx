import React from "react";
import Header from "./components/Header";
import BoxAndButtons from "./components/BoxAndButtons";
import "./App.css";

document.body.style.backgroundColor = "#e4dfee";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <BoxAndButtons />
    </div>
  );
};

export default App;
