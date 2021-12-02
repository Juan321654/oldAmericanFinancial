import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import OurPeople from "./components/our_people/OurPeople";
import Contact from "./components/contact/Contact";
import ClientReporting from "./components/client_reporting/ClientReporting";
import BottomNav from "./components/bottom_nav/BottomNav";
import JobOpportunities from "./components/job_opportunities/JobOpportunities";
import TermsConditions from "./components/terms_conditions/TermsConditions";
import PrivacyPolicy from "./components/privacy_policy/PrivacyPolicy";
import WebFraud from "./components/web_fraud/WebFraud";



function App() {
  const [forceReload, setForceReload] = useState(0)
  return (
    <div className="App animation-fadeIn">
      <NavBar forceReload={forceReload}/>
      <div className="body padding">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/our-people" element={<OurPeople />} /> 
          <Route exact path="/contact" element={<Contact />} /> 
          <Route exact path="/client-reporting" element={<ClientReporting />} /> 
          <Route exact path="/job-opportunities" element={<JobOpportunities />} /> 
          <Route exact path="/terms-conditions" element={<TermsConditions />} /> 
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} /> 
          <Route exact path="/webfraud-phishing-warning" element={<WebFraud />} /> 
        </Routes>
      </div>
      <BottomNav setForceReload={setForceReload}/>
    </div>
  );
}

export default App;
