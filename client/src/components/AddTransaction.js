import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e =>  {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount     //to make it a number and not string
        }
        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>  
            <form onSubmit= {onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        value = {text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"placeholder="What was it for?" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount
                    (-ve expense, +ve income)
                    </label>
                    <input 
                        value = {amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"placeholder="Enter amount..." />
                </div>
                <button className="btn"> Add transaction</button>
            </form>
        </>
    )
}
