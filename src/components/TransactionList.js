import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext) //useContext hook allows you to access components from a proverider (GlobalContext), {transactions} deconstructs GlobalContext to only access transactions
  return (
    <div>
        <h3>History</h3>
        <ul className="list">
            {transactions.map(transaction =>( <Transaction key={transaction.id} transaction={transaction}/>))} {/*map through transactions and for each transaction object, it is rendered */}
        </ul>
    </div>
  )
}