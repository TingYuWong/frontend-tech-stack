import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [bool, setBool] = useState(false);
  const [arr, setArr] = useState([1, 2, 3, 4, 100, 200, 300, 400]);

  return (
    <>
      <div onClick={() => setBool(!bool)}>setBool</div>
      <Child bool={bool} arr={arr} />
    </>
  );
}

export default App;
