import React, { useState } from 'react'
import Expense from './components/Expense/Expense'
import NewExpense from './components/NewExpense/NewExpense'
const expenseData = [
  {
    id: 'e1',
    date: new Date(2020, 7, 14),
    title: 'Toliet Paper',
    price: '94.12'
  },
  {
    id: 'e2',
    date: new Date(2021, 2, 12),
    title: 'New TV',
    price: '799.49'
  },
  {
    id: 'e3',
    date: new Date(2022, 4, 24),
    title: 'Car Insurance',
    price: '294.67'
  },

]
function App() {

  const [expenses, setExpenses] = useState(expenseData)

  const addExpenseHandler = (receiveNewExpenseData) => {
    setExpenses((prevExpenses) => {
      return ([receiveNewExpenseData, ...prevExpenses])
    })
  }
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenseData={expenses} />
    </>
  )
}

export default App
