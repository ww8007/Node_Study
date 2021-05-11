import React from "react";

function App() {
  const handleClick = (param) => {
    console.log("test");
  };
  const newClick = (e) => {
    e.preventDefault();
    console.log("wrapper is clicked");
  };
  return <button onClick={() => handleClick("test")}>this is a button</button>;
}

export default App;
