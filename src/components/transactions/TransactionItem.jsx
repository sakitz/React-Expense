import React from "react";
import { useGlobalState } from "../../context/globalState";

export function TransactionItem ({ transaction }) {
    const { DeleteTransaction } = useGlobalState()

  return (
      <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
          <p className="mr-2 text-sm">{transaction.description}</p>
          <span className="mr-2">${transaction.amount}</span>
          <button
            className="text-white bg-indigo-700 px-3 py-2 rounded-lg block mb-[0.2rem] "
            onClick={() => {
              DeleteTransaction(transaction.id);
            }}
          >
            X
          </button>
        </li>

  );
};

export default TransactionItem;
