import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/About" Component={About} />
        <Route exact path="/Search" Component={Search} />
      </Routes>
    </>
  );
}

export default App;
