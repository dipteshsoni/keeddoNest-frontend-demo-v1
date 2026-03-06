import { useNavigate } from "react-router-dom";
import "./EnrollPrompt.css";

export default function EnrollPrompt({ program }) {

  const navigate = useNavigate();

  return (

    <div className="enroll-floating">

      <p>
        Interested in {program}?
      </p>

      <button
        onClick={() => navigate("/enrollment")}
      >
        Enroll Now
      </button>

    </div>

  );

}