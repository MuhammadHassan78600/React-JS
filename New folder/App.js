// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    setCount(count > 0 ? count - 1 : 0); // Ensures the count doesn't go below 0
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter -- {count}</h1>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <footer>
        <p>© 2024 Muhammad Hassan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
