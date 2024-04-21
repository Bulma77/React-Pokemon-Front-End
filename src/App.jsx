import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Type from "./pages/Type";
import Pokemondetails from "./pages/Pokemondetails";

// Components

import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/type" element={<Type />} />
          <Route path="/pokemon/:id" element={<Pokemondetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
