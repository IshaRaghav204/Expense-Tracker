/* eslint-disable react/prop-types */
import { useState } from "react";

const AddFunction = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(true); // Default to Expense

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && amount) {
      onAdd({
        name,
        amount: parseFloat(amount),
        type: isExpense ? "Expense" : "Budget",
      });

      setName("");
      setAmount("");
    }
  };

  return (
    <div className="card" style={{ width: "29rem", margin: "10px 50px" }}>
      <input
        type="text"
        id="amount"
        placeholder="Amount"
        style={{ margin: "10px" }}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        id="detail"
        placeholder="Description"
        style={{ margin: "10px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <div
        className="checks"
        style={{
          display: "flex",
          margin: "20px 120px",
          gap: "40px",
        }}
      >
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="transactionType"
            id="flexRadioDefault1"
            onChange={() => setIsExpense(true)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Expense
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="transactionType"
            id="flexRadioDefault2"
            onChange={() => setIsExpense(false)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Budget
          </label>
        </div>
      </div>

      <center>
        <button
          style={{ width: "60px", marginBottom: "10px" }}
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Add
        </button>
      </center>
    </div>
  );
};

export default AddFunction;
