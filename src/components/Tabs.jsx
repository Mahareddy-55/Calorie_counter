const Tabs = ({ active, setActive }) => {
  return (
    <div className="tabs">
      <button
        className={active === "tracker" ? "active" : ""}
        onClick={() => setActive("tracker")}
      >
        📅 Tracker
      </button>

      <button
        className={active === "stats" ? "active" : ""}
        onClick={() => setActive("stats")}
      >
        📊 Statistics
      </button>

      <button
        className={active === "settings" ? "active" : ""}
        onClick={() => setActive("settings")}
      >
        ⚙️ Settings
      </button>
    </div>
  );
};

export default Tabs;
