import React from "react";
import "./App.css";
import Header from "./components/header/header";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

function Banner() {
  return <div className="banner"></div>;
}

function Main() {
  return (
    <div className="main">
      <div className="container-cards">
        <div className="card">
          <div className="card-img"></div>
          <h2 className="Card-titulo">Hulk</h2>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat
            metus et malesuada.
          </p>
          <button>Baixar agora</button>
        </div>
        <div className="card">
          <div className="card-img"></div>
          <h2 className="Card-titulo">Hulk</h2>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat
            metus et malesuada.
          </p>
          <button>Baixar agora</button>
        </div>
        <div className="card">
          <div className="card-img"></div>
          <h2 className="Card-titulo">Hulk</h2>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat
            metus et malesuada.
          </p>
          <button>Baixar agora</button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h6>Mapa do Site</h6>
      <ul className="socialMedia">
        <li>Face</li>
        <li>Insta</li>
        <li>Twitter</li>
      </ul>
    </div>
  );
}

export default App;
