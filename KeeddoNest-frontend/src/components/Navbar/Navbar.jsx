import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offeringsOpen, setOfferingsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* LEFT — LOGO */}
        <div className="nav-left">
          <div className="logo">🟠</div>
          <span className="brand">Keeddonest</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>

          <li className="dropdown">
            Offerings
            <ul className="dropdown-menu">
              <li>option1</li>
              <li>option2</li>
              <li>option3</li>
              <li>option4</li>
              <li>option5</li>
              <li>option6</li>
            </ul>
          </li>

          <li>Enrollment</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>

        {/* HAMBURGER */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </div>
      </nav>

      {/* MOBILE SIDE PANEL */}
      <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </div>

        <ul className="mobile-links">
          <li>Home</li>
          <li>About</li>

          <li onClick={() => setOfferingsOpen(!offeringsOpen)}>
            Offerings ▾
          </li>

          {offeringsOpen && (
            <ul className="mobile-dropdown">
              <li>option1</li>
              <li>option2</li>
              <li>option3</li>
              <li>option4</li>
              <li>option5</li>
              <li>option6</li>
            </ul>
          )}

          <li>Enrollment</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div className="backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}