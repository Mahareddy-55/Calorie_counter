import { useState } from "react";
import AddMealModal from "./AddMealModal";

const Meals = ({ meals, onAddMeal }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="meals">
      <div className="meals-header">
        <h2>Today's Meals</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add Meal
        </button>
      </div>

      {meals.length === 0 && (
        <div className="empty">
          No meals logged yet. Start tracking your nutrition!
        </div>
      )}

      {meals.map((meal) => (
        <p key={meal.id}>
          {meal.name} — {meal.calories} kcal
        </p>
      ))}

      {showModal && (
        <AddMealModal
          onAdd={onAddMeal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Meals;
