import "./Header.css";

function Header({ onLogout }) {
  return (
    <header className="header">
      <div className="logo">
        🍎 <span>NutriTrack</span>
      </div>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </header>
  );
}

export default Header;
