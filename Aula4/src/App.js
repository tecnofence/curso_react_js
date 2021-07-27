import { useState } from "react";
import "./App.css";

function App() {
  const [contar, setContar] = useState(0);
  useEffect(() => {
    console.log("Executando");
  });

  return (
    <div className="App">
      <h1>UseEffect</h1>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}

export default App;
