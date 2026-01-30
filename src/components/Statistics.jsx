const Statistics = ({ meals }) => {
  const totalCalories = meals.reduce(
    (sum, meal) => sum + meal.calories,
    0
  );

  return (
    <div className="summary">
      <h2>Statistics</h2>
      <p>Total Meals: {meals.length}</p>
      <p>Total Calories Consumed: {totalCalories} kcal</p>
      <p>Average Calories / Meal: 
        {meals.length === 0
          ? 0
          : Math.round(totalCalories / meals.length)}
      </p>
    </div>
  );
};

export default Statistics;
