import { ThemeContext, ThemeDispatchContext } from "./AppProvider";
import { useContext } from "react";

const Parent = () => {
  const { state } = useContext(ThemeContext);
  const { dispatch } = useContext(ThemeDispatchContext);
  return (
    <>
      <div onClick={() => dispatch({ type: "increment_age", payload: 1 })}>
        + age
      </div>
      <div onClick={() => dispatch({ type: "decrement_age", payload: 1 })}>
        - age
      </div>
      <input
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "change_name", payload: e.target.value })
        }
      />
      <div>age: {state.age}</div>
      <div>name: {state.name}</div>
    </>
  );
};

export default Parent;
