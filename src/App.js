import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import TheApp from "./pages/TheApp";
import TheCode from "./pages/TheCode";
import About from "./pages/About";

function App() {
  return (

    <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/TheApp" element={<TheApp/>} />
      <Route path="/TheCode" element={<TheCode/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
    </BrowserRouter>
    </div>
    
      )
}

export default App;
