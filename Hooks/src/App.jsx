import { useState } from "react";

function Click() {
  let count = 0;

  function onClick() {
    count = count + 1;
  }
  return (
    <>
      <p>{count}/</p>
      <button onClick={onClick}>increase</button>
    </>
  );
}

function OnClick() {
  const [count, setCount] = useState(0);

  let click = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>counter</h1>
      <p>{count}</p>
      <button onClick={click}>Increase</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Click />
      <OnClick />
    </div>
  );
}
export default App;
