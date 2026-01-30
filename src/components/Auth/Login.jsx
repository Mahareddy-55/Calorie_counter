import { useState } from "react";
import "./Auth.css";

function Login({ onLogin, switchPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">🍎 NutriTrack</h1>
        <h2>Welcome Back</h2>
        <p className="auth-sub">Login to continue tracking</p>

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
            Login
          </button>
        </form>

        <p className="switch-text">
          Don’t have an account?{" "}
          <span onClick={switchPage}>Signup</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
