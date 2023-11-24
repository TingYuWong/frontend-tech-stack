import { useReducer } from "react";

// state
type AppState = {
  age: number;
  name: string;
};

// action
type IncrementAge = {
  type: "increment_age";
  payload: number;
};
type DecrementAge = {
  type: "decrement_age";
  payload: number;
};
type ChangeName = {
  type: "change_name";
  payload: string;
};
type AppActions = IncrementAge | DecrementAge | ChangeName;

// reducer
const appReducer = (state: AppState, action: AppActions) => {
  switch (action.type) {
    case "increment_age":
      return { ...state, age: state.age + action.payload };
    case "decrement_age":
      return { ...state, age: state.age - action.payload };
    case "change_name":
      return { ...state, name: action.payload };
  }
};

const initialState = { age: 0, name: "Tina" };

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

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

export default App;
