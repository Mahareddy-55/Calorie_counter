import StatCard from "./StatCard";

const Summary = ({ meals, limit }) => {
  const totalCalories = meals.reduce(
    (sum, meal) => sum + meal.calories,
    0
  );

  const progress = Math.round((totalCalories / limit) * 100);

  return (
    <div className="summary">
      <h2>Daily Summary</h2>

      <p>
        {totalCalories} / {limit} kcal
        <span className="remaining">
          {limit - totalCalories} remaining
        </span>
      </p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="cards">
        <StatCard title="Meals" value={meals.length} />
        <StatCard title="Consumed" value={totalCalories} />
        <StatCard title="Progress" value={`${progress}%`} />
      </div>
    </div>
  );
};

export default Summary;
