import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import KeeddoNestLogo from "../../assets/KeeddonestLogo.jpeg";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [offeringsOpen, setOfferingsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        {/* LEFT SIDE */}
        <div className="nav-left">
          <img
            src={KeeddoNestLogo}
            alt="Keeddonest Logo"
            className="nav-logo"
          />
          <span className="brand1">Keedd<span className="brand2">oNest</span></span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-links">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          <li className="dropdown">
  <span className="dropdown-title">Offerings ▾</span>

  <ul className="dropdown-menu">
    <li><Link to="/earlyLearning">Early Learning</Link></li>
    <li><Link to="/toddlerProgram">Toddler Program</Link></li>
    <li><Link to="/skillDevelopment">Skill Development</Link></li>
    <li><Link to="/learningSupport">Learning Support</Link></li>
    <li><Link to="/freeZone">FreeZone</Link></li>
    <li><Link to="/counsellingServices">Counselling</Link></li>
  </ul>
</li>

          <li><Link to="/enrollment">Enrollment</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

      </nav>

      {/* MOBILE PANEL */}
      <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>✕</div>

        <ul className="mobile-links">

          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>

          <li
            className="mobile-dropdown-title"
            onClick={() => setOfferingsOpen(!offeringsOpen)}
          >
            Offerings ▾
          </li>

          {offeringsOpen && (
            <ul className="mobile-dropdown">
              <li><Link to="/earlyLearning" onClick={() => setMenuOpen(false)}>Early Learning</Link></li>
              <li><Link to="/toddlerProgram" onClick={() => setMenuOpen(false)}>Toddler Program</Link></li>
              <li><Link to="/skillDevelopment" onClick={() => setMenuOpen(false)}>Skill Development</Link></li>
              <li><Link to="/learningSupport" onClick={() => setMenuOpen(false)}>Learning Support</Link></li>
              <li><Link to="/freeZone" onClick={() => setMenuOpen(false)}>FreeZone</Link></li>
              <li><Link to="/counsellingServices" onClick={() => setMenuOpen(false)}>Counselling</Link></li>
            </ul>
          )}

          <li><Link to="/enrollment" onClick={() => setMenuOpen(false)}>Enrollment</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

        </ul>
      </div>

      {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
}