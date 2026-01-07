import { useEffect, useState } from "react";

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

  useEffect(() => {
    document.getElementById("count").innerText = "increased";
  }, [count]);

  let click = () => {
    setCount(count + 1); // state which helps us to remember data in react
  };
  return (
    <>
      <h1>counter</h1>
      <p>{count}</p>
      <button onClick={click}>Increase</button>
      <p id="count"></p>
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
