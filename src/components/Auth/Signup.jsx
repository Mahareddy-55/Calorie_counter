import { useState } from "react";
import "./Auth.css";

function Signup({ onSignup, switchPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSignup(email, password);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">🍎 NutriTrack</h1>
        <h2>Create Account</h2>
        <p className="auth-sub">Start your healthy journey</p>

        <form onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Signup
          </button>
        </form>

        <p className="switch-text">
          Already have an account?{" "}
          <span onClick={switchPage}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
