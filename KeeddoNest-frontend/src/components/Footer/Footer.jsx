import "./Footer.css";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <p>
          © {year} Keeddonest. All Rights Reserved.
        </p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>

      </div>

    </footer>
  );
}