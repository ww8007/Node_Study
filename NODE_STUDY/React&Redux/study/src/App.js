import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onClickPlus = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={onClickPlus}>클릭</button>
    </>
  );
}

export default App;
