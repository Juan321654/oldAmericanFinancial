import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import backgroundVideo from "./assets/YORK_Home_Banner_HR (1).mp4";

import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <video autoPlay loop src={backgroundVideo}/>
      <div className="body padding">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
