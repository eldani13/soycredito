import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/layouts/Header";
import Whatsapp from "./components/buttons/Whatsapp";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Teams from "./pages/Teams";
import Store from "./pages/Store";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
