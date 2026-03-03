import './App.css'
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from './components/Home/Home';
import EarlyLearning from './pages/offerings/EarlyLearning';
import FreeZone from './pages/offerings/FreeZone';
import LearningSupport from './pages/offerings/LearningSupport';
import SkillDevelopment from './pages/offerings/SkillDevelopment';
import ToddlerProgram from './pages/offerings/ToddlerProgram';
import CounsellingServices from './pages/offerings/CounsellingServices';
import Enrollment from './pages/enrollment/Enrollment';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Gallery from './pages/gallery/Gallery';
import IntroLoader from './components/IntroLoader/IntroLoader';
import { useState } from 'react';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <>
    
        <HashRouter>
      <div className="app-container">
      <Navbar />
      <div className="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earlyLearning" element={<EarlyLearning />} />
        <Route path="/freeZone" element={<FreeZone />} />
        <Route path="/learningSupport" element={<LearningSupport />} />
        <Route path="/skillDevelopment" element={<SkillDevelopment />} />
        <Route path="/toddlerProgram" element={<ToddlerProgram />} />
        <Route path="/counsellingServices" element={<CounsellingServices />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      </div>
      <Footer />
      </div>
    </HashRouter>
      {/* LOADER OVERLAY */}
      {showLoader && (
        <IntroLoader onFinish={() => setShowLoader(false)} />
      )}
    </>
  );
}

export default App;