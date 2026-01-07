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
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("increased");
  }, [count]);

  let click = () => {
    setCount(count + 1); // state which helps us to remember data in react
  };
  return (
    <>
      <h1>counter</h1>
      <p>{count}</p>
      <button onClick={click}>Increase</button>
      <p>{message}</p>
    </>
  );
}

// giving user input and displaying it

function Input() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const click = () => {
    setFullName(firstName + " " + lastName);
  };

  return (
    <>
      <h1>Giving user input and displaying it</h1>
      <input
        type="text"
        placeholder=" First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={click}>Enter</button>
      <p>{fullName}</p>
    </>
  );
}

function App() {
  return (
    <div>
      <Click />
      <OnClick />
      <Input />
    </div>
  );
}
export default App;
