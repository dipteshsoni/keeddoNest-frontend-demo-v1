import './App.css'
import Navbar from "./components/Navbar/Navbar";
import HomeHero from "./components/HomeHero/HomeHero";
import IdeologySection from './components/IdeologySection/IdeologySection';
import CentrePhilosophy from './components/CentrePhilosophy/CentrePhilosophy';

function App() {
  return(
    <>
      <Navbar />
      <HomeHero />
      <IdeologySection/>
      <CentrePhilosophy/>
      <div style={{ height: "200vh" }}>Scroll test</div>
   
      <div className="App">
        <h1>Keeddonest 🚀</h1>
      </div>
     </>
  ) 
}

export default App;