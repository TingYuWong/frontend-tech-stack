import { createContext, useReducer, Dispatch, ReactNode } from "react";

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

type AppStateContext = {
  state: AppState;
};

type AppDispatchContext = {
  dispatch: Dispatch<AppActions>;
};

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
export const ThemeContext = createContext({} as AppStateContext);
export const ThemeDispatchContext = createContext({} as AppDispatchContext);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state }}>
      <ThemeDispatchContext.Provider value={{ dispatch }}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AppProvider;
