import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './expense.css'
import ExpenseFilter from './ExpenseFilter'

const Expense = (props) => {
    const [filterYear, setFilterYear] = useState('2022')
    const changeFilterExpenses = (selectedYear) => {
        setFilterYear(selectedYear)
    }
    const filteredExpenses = props.expenseData.filter((expenses) => {
        return expenses.date.getFullYear().toString() === filterYear;
    })
    return (
        <>
            <div className='expense_box'>
                <ExpenseFilter selected={filterYear} onChageFilter={changeFilterExpenses} />
                {
                    filteredExpenses.length === 0 ? (<p style={{ color: '#b40000', fontWeight: "600" }}>No Expenses Found</p>) : (filteredExpenses.map((expense) => <ExpenseItem key={expense.id} date={expense.date} title={expense.title} price={expense.price} />))
                }
            </div>

        </>
    )
}

export default Expense
