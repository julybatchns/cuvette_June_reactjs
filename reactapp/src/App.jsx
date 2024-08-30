function App() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <h1>Fruit list</h1>
      {fruits.map((fruit, id) => (
        <li key={id}>{fruit}</li>
      ))}
    </>
  );
}

export default App;
