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

function App() {
  return <Click />;
}
export default App;
