import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { Ship } from "./Ship";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="https://swapi.dev/api/starships/:id"
            element={<Ship />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;