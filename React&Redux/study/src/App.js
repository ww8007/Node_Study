import React from "react";

function App() {
  const arr = [0, 1, 2];
  return (
    <div key>
      {arr.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  );
}

export default App;
