import "./App.css";
import Parent from "./components/Parent";

import { createContext } from "react";

export type ContextTyp = {
  color: string;
};
export const ThemeContext = createContext({} as ContextTyp);

function App() {
  return (
    <ThemeContext.Provider value={{ color: "blue" }}>
      Grandparent
      <Parent />
    </ThemeContext.Provider>
  );
}

export default App;
