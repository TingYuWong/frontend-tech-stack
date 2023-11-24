import { ThemeContext } from "@/App";
import { useContext } from "react";

const Child = () => {
  const { color } = useContext(ThemeContext);
  return <div>Child: {color}</div>;
};

export default Child;
