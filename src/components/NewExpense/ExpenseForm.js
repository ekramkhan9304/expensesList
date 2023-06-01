import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [price, setAmout] = useState('')
    const [date, setDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     title: "",
    //     amount: "",
    //     date: "",
    // })
    const tileChangeHandler = (e) => {
        setTitle(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     title: e.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: e.target.value
        //     }
        // })
    }
    const amountChangeHandler = (e) => {
        setAmout(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: e.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amount: e.target.value
        //     }
        // })
    }
    const dateChangeHanlder = (e) => {
        setDate(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     date: e.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: e.target.value
        //     }
        // })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(userInput);
        const expenseData = {
            title: title,
            price: price,
            date: new Date(date)

        }
        setTitle('');
        setAmout('');
        setDate('');

        props.onSaveExpenseData(expenseData)


    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="">Title</label>
                        <input type="text" onChange={tileChangeHandler} value={title} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Amount</label>
                        <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} value={price} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Date</label>
                        <input type="date" min='2019-01-01' max='2022-12-31' onChange={dateChangeHanlder} value={date} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </>
    )
}

export default ExpenseForm
