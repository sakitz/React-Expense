import { useGlobalState } from "../../context/globalState";
import { TransactionItem } from "./TransactionItem";

export function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <>
      <h3 className="w-full text-slate-300 text-xl font-bold block">historial</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}
