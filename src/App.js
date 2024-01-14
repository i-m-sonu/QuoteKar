import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/About" Component={About} />
       
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
