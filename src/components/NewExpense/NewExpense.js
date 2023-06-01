import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const SaveExpenseDataHandler = (enteredFromExpenseData) => {
        const expenseData = {
            ...enteredFromExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    }
    return (
        <>
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
            </div>
        </>
    )
}

export default NewExpense
