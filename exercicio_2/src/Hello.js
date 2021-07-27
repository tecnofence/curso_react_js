import React from "react";

function HelloWorld() {
  return (
    <div>
      <Teste />
      <Teste1 />
      <Teste2 />
    </div>
  );
}

function Teste() {
  return <div>HelloWorld</div>;
}

const Teste1 = () => {
  return <h1>Teste 2</h1>;
};

class Teste2 extends React.Component {
  render() {
    return <h2>Teste 2</h2>;
  }
}

export default HelloWorld;
