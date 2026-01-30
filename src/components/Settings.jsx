const Settings = ({ limit, setLimit }) => {
  return (
    <div className="summary">
      <h2>Settings</h2>

      <label>Daily Calorie Goal</label>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        style={{
          marginTop: "10px",
          padding: "10px",
          width: "100%",
          borderRadius: "10px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default Settings;
