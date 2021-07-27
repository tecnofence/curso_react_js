import "./app.css";

function App() {
  return (
    <div className="container">
      <Header />
      <p>Manuel Francisco</p>
      <Button />
    </div>
  );
}

const Button = () => {
  return (
    <div className="container-botao">
      <button className="botao-custom">Iniciar</button>
    </div>
  );
};

const Header = () => {
  return (
    <div className="container-header">
      <div>
        <h1>LOGO</h1>
      </div>
      <ul className="style-lista">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </div>
  );
};
export default App;
