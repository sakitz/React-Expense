import { useState } from "react"
import { useGlobalState } from "../../context/globalState"

const TransaccionForm = () => {
  const { AddTransaction } = useGlobalState()
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState(0)

  const onSubmit = (e) => {
      e.preventDefault();
      AddTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: +amount
      })
      setAmount(0);
      setDescription("")
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="text-black">
        <input 
          type="text" 
          placeholder="Ingresa una descripcion" 
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <input 
          type="number" 
          step='0.01'
          placeholder="00.00" 
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
        />
        <button className="text-white bg-indigo-700 px-3 py-2 rounded-lg block mb-2 w-full">
          Añade una transaccion
        </button>
      </form>   
    </div>
      
      
  )
}

export default TransaccionForm