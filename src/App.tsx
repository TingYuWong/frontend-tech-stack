import Parent from "./components/Parent";
import AppProvider from "./components/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <Parent />
    </AppProvider>
  );
};

export default App;
