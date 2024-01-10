import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [counter, setCouter] = useState(0);
  useEffect(() => {
    setCouter(100);
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCouter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCouter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default App;
