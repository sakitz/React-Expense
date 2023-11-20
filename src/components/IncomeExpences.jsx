import { useGlobalState } from "../context/globalState"
import React from 'react'


function IncomeExpences () {
    const { transactions } = useGlobalState()

    const amount = transactions.map(transaction => transaction.amount)
    const income = amount
                   .filter(item => item > 0)
                   .reduce((acc, item) => (acc += item), 0)
                   .toFixed(2)
    const expense = amount
                    .filter(item => item < 0)
                    .reduce((acc, item) => acc += item, 0)
                    .toFixed(2) * -1
  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Ingresos</h4>
        <p>{income}</p>
    </div>
    <div className="flex justify-between my-2">
        <h4>expensas</h4>
        <p>{expense}</p>
    </div>
    </>
    
  )
}

export default IncomeExpences