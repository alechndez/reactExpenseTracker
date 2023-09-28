import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Iniital state
const initialState = {
    transactions: []
}

//Create context
export const GlobalContext = createContext(initialState) //createContext allows you to make this state available throughout App.js

//Provider component
export const GlobalProvider = ({children}) => { //The GlobalProvider component created makes the initialState accessable to all the components
    const[state, dispatch] = useReducer(AppReducer, initialState) //useReducer hook sets up a state management system, passing through AppReducer and initialState. This returns the current state and a dispatch function to update state 
    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return(<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}> {/*GlobalContext.Provider allows child components to access state via context, setting value allows any component wrapped in Global Provider to access transaction*/}
        {children}
    </GlobalContext.Provider>)
}