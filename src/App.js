import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body padding">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
