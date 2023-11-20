import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@/components/Home";
import About from "@/components/About";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
