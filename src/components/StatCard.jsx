const StatCard = ({ title, value }) => {
  return (
    <div className="card">
      <h1>{value}</h1>
      <p>{title}</p>
    </div>
  );
};

export default StatCard;
