import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import OurPeople from "./components/our_people/OurPeople";


import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body padding">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/our-people" element={<OurPeople />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
