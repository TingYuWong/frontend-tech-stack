import { useContext } from "react";
import Child from "./Child";
import { ThemeContext } from "@/App";

const Parent = () => {
  const { color } = useContext(ThemeContext);
  return (
    <div>
      Parent: {color}
      <Child />
    </div>
  );
};

export default Parent;
