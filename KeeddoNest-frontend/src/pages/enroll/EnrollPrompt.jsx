import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./EnrollPrompt.css";

export default function EnrollPrompt({ program }) {

  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (

    <div className="enroll-floating">

      <button
        id="close-button"
        className="prompt-close"
        onClick={() => setVisible(false)}
      >
        ✕
      </button>

      <p>
        Interested in {program}?
      </p>

      <button
        className="prompt-btn"
        onClick={() => navigate("/enrollment")}
      >
        Enroll Now
      </button>

    </div>

  );

}