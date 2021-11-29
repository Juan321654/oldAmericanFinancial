import "./App.css";
import backgroundVideo from "./assets/YORK_Home_Banner_HR.mp4";
import NavBar from "./components/navbar/NavBar";

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <video autoPlay loop src={backgroundVideo} />
    </div>
  );
}

export default App;
