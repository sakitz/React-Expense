import { GlobalProvider } from "./context/globalState";
import Header from "./components/header";
import TransaccionForm from "./components/transactions/TransaccionFor";
import Balance from "./components/Balance";
import { TransactionList } from "./components/transactions/TransactionList";
import IncomeExpences from "./components/IncomeExpences";
import ExpensePy from "./components/ExpensePy";

function App() {
  return (
    <GlobalProvider>
      <article className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <article className=" container mx-auto w-2/6">
          <section className="bg-zinc-800 p-10 rounded-md flex gap-x-6">
            <div>
              <Header />
              <IncomeExpences />
              <Balance />
              <TransaccionForm />
            </div>
            <div className="flex flex-col">
              <ExpensePy />
              <TransactionList />
            </div>
          </section>
        </article>
      </article>
    </GlobalProvider>
  );
}

export default App;
