import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import OurPeople from "./components/our_people/OurPeople";
import Contact from "./components/contact/Contact";
import ClientReporting from "./components/client_reporting/ClientReporting";
import BottomNav from "./components/bottom_nav/BottomNav";



function App() {
  return (
    <div className="App animation-fadeIn">
      <NavBar />
      <div className="body padding">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/our-people" element={<OurPeople />} /> 
          <Route exact path="/contact" element={<Contact />} /> 
          <Route exact path="/client-reporting" element={<ClientReporting />} /> 
        </Routes>
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
