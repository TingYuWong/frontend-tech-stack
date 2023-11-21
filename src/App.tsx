import { useEffect, useRef } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const childRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!childRef.current) return;
    childRef.current.focus();
  }, []);
  return <Child ref={childRef} />;
}

export default App;
