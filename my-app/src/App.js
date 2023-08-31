import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import MainBodyTopText from "./components/MainBodyTopText/MainBodyTopText";
import Choose from "./components/Choose/Choose";
import GridSection from "./components/GridSection/GridSection";
import PeopleBox from "./components/PeopleBox/PeopleBox";

function App() {
  return (
    <div className="fullBody">
      <div className="TopTwoSection">
        <NavBar />
        <HeroSection />
      </div>
      <MainBodyTopText />
      <Choose />
      <GridSection />
      <PeopleBox />
    </div>
  );
}

export default App;
