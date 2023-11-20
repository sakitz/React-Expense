import { useGlobalState } from "../context/globalState"

const Balance = () => {
   const { transactions } = useGlobalState()
   const amounts = transactions.map(transaction => transaction.amount)
   const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2)

  return (
    <div className="flex justify-between ">
        <h3>Tu Balanse</h3> 
        <h1 className="text-xl font-semibold">${total}</h1>
    </div>
  )
}

export default Balance