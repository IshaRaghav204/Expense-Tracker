import PropTypes from "prop-types";
import "./Transcations.css";

/* eslint-disable react/prop-types */

const Transaction = ({ transactions = [], setTransactions }) => {
  const handleRemoveItem = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div className="transactionContainer">
      <h4 style={{ marginLeft: "50px" }}>Transactions</h4>

      <div
        className="card"
        style={{ width: "29rem", marginLeft: "50px", marginBottom: "50px" }}
      >
        <ul className="list-group list-group-flush">
          {transactions.length === 0
            ? null
            : transactions.map((transaction) => (
                <li key={transaction.id} className="list-group-item styles">
                  {transaction.name}
                  <span>₹{transaction.amount}</span>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemoveItem(transaction.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

Transaction.propTypes = {
  transactions: PropTypes.array.isRequired,
  setTransactions: PropTypes.func.isRequired,
};

export default Transaction;
