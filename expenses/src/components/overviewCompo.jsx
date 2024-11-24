import { useState } from "react";
import "./overviewCompo.css";
import AddFunction from "./AddFunction";
import Transaction from "./transactions";
import ExpenseBudget from "./expense_budget";

const OverviewCompo = () => {
  const [transactions, setTransactions] = useState([]);

  const [showAdd, setShowAdd] = useState(false);

  const handleAddTransaction = (transaction) => {
    setTransactions([
      ...transactions,
      { ...transaction, id: transactions.length + 1 },
    ]);
  };

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalBudget = transactions
    .filter((transaction) => transaction.type === "Budget")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div>
      <div className="overview-container">
        <div className="overview style">
          <div className="balance-info">Balance: ₹{totalBudget}</div>

          <div className="button-section">
            {!showAdd ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => setShowAdd(true)}
              >
                Add
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setShowAdd(false)}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
      {showAdd && (
        <div className="add-function-container">
          <AddFunction onAdd={handleAddTransaction} />
        </div>
      )}
      <ExpenseBudget totalExpense={totalExpense} totalBudget={totalBudget} />

      <Transaction
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
};

export default OverviewCompo;
