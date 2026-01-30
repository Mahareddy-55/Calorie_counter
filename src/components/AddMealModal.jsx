import { useState } from "react";

const AddMealModal = ({ onAdd, onClose }) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !calories) return;

    onAdd({
      id: Date.now(),
      name,
      calories: Number(calories),
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Meal</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Meal name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />

          <div className="modal-actions">
            <button type="submit">Add</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMealModal;
