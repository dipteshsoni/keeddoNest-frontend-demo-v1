import './App.css'
import Navbar from "./components/Navbar/Navbar";
import HomeHero from "./components/HomeHero/HomeHero";

function App() {
  return(
    <>
      <Navbar />
      <HomeHero />
      <div style={{ height: "200vh" }}>Scroll test</div>
   
      <div className="App">
        <h1>Keeddonest 🚀</h1>
      </div>
     </>
  ) 
}

export default App;