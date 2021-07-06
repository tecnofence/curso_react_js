function App() {
  return (
    <div className="App">
      <p>Mbora Codar</p>
      <MainNav />
    </div>
  );
}
const Button = () => {
  return <button>Clique aqui !!!</button>;
};

const MainNav = () => {
  return (
    <nav>
      <a href> Link 1</a>
      <Button />
    </nav>
  );
};

export default App;
