import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import KeeddoNestLogo from "../../assets/KeeddonestLogo.jpeg";
import { HiMenu, HiX } from "react-icons/hi"; 

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [offeringsOpen, setOfferingsOpen] = useState(false);

    // const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSub = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <nav className="navbar">

        {/* LEFT SIDE */}


        <Link to="/" className="nav-left">

  <img src={KeeddoNestLogo} className="nav-logo" alt="Keeddonest Logo" />

  <span className="brand1">Keeddo<span className="brand2">Nest</span></span>


</Link>

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

        {/* HAMBURGER
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>



      </nav> */}

      {/* MOBILE PANEL
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
      </div> */}

       <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <HiMenu />
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

          {/* BRAND SECTION INSIDE MOBILE MENU */}
  <div className="mobile-brand">
    <img src={KeeddoNestLogo} alt="Keeddonest Logo" />

    <HiX
      className="close-icon"
      onClick={() => setMenuOpen(false)}
    />
  </div>

        <ul className="mobile-nav-list">

          <li>
            <Link onClick={() => setMenuOpen(false)} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link onClick={() => setMenuOpen(false)} to="/about">
              About
            </Link>
          </li>

          {/* OFFERINGS DROPDOWN */}
          <li>
            <div
              className="mobile-dropdown-toggle"
              onClick={() => toggleSub(0)}
            >
              <p>Offerings</p>
              <span>{openIndex === 0 ? "−" : "+"}</span>
            </div>

            {openIndex === 0 && (
              <ul className="mobile-sub-list">
                <li><Link onClick={() => setMenuOpen(false)} to="/earlyLearning">Early Learning</Link></li>
                <li><Link onClick={() => setMenuOpen(false)} to="/toddlerProgram">Toddler Program</Link></li>
                <li><Link onClick={() => setMenuOpen(false)} to="/skillDevelopment">Skill Development</Link></li>
                <li><Link onClick={() => setMenuOpen(false)} to="/learningSupport">Learning Support</Link></li>
                <li><Link onClick={() => setMenuOpen(false)} to="/freeZone">FreeZone</Link></li>
                <li><Link onClick={() => setMenuOpen(false)} to="/counsellingServices">Counselling</Link></li>
              </ul>
            )}
          </li>

          <li><Link onClick={() => setMenuOpen(false)} to="/enrollment">Enrollment</Link></li>
          <li><Link onClick={() => setMenuOpen(false)} to="/gallery">Gallery</Link></li>
          <li><Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link></li>

        </ul>
      </div>

      {/* optional backdrop */}
      {menuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
{/* 
      {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)} />} */}
    </>
  );
}