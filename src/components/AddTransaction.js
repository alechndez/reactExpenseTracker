import React, {useState, useContext} from 'react'
import { GlobalContext } from './context/GlobalState'

export const AddTransaction = () => {
    const [text, setTest] = useState('') //The useState hook allows you to add state to functional components, text is the name, setText is a method, and useState sets the initial state
    const [amount, setAmount] = useState(0)
    const{addTransaction} = useContext(GlobalContext)
    const onSubmit = e=> {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount //+var turns the variable into a number
        }
        addTransaction(newTransaction)
    }
  return (
    <div>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setTest(e.target.value)} placeholder="Enter text..."/> {/*The arrow function is how you update state- pass the event object and set it to the current value of the input field here*/}
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />(negative - expese, positve - income)</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}placeholder="Enter amount..."/>
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    </div>
  )
}