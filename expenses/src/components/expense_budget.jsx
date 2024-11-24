/* eslint-disable react/prop-types */
import "./overviewCompo.css";

const ExpenseBudget = ({ totalExpense, totalBudget }) => {
  return (
    <div
      className="2cards"
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 50px",
      }}
    >
      <div className="card" style={{ width: "10rem" }}>
        <h4 style={{ marginLeft: "10px" }}>Expense</h4>
        <h5 style={{ color: "red", marginLeft: "10px" }}>₹{totalExpense}</h5>
      </div>
      <div className="card" style={{ width: "10rem" }}>
        <h4 style={{ marginLeft: "10px" }}>Budget</h4>
        <h5 style={{ color: "green", marginLeft: "10px" }}>₹{totalBudget}</h5>
      </div>
    </div>
  );
};

export default ExpenseBudget;
