import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <div className="fullBody">
      <div className="TopTwoSection">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
