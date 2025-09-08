import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-card">
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet,<br/> a reliable secure application for cryptocurrency</p>

        <button className="btn-primary" onClick={() => navigate("/signup")}>
          Create Account
        </button>
        <button className="btn-secondary" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
