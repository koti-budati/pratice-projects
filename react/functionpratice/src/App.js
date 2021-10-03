import "./App.css";
import Child from "./Child";
import { useState } from "react";

function App() {
  const [state, updateState] = useState(0);

  return (
    <div>
      <h1>{state}</h1>
      <Child
        update={(num) => {
          updateState(state + num);
        }}
      />
    </div>
  );
}

export default App;
