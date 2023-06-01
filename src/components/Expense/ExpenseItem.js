import React from 'react';
import './expenseItem.css';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
    const { date, title, price } = props;
    return (
        <>
            <div className="expense_row">
                <ExpenseDate date={date} />
                <div className="expense_title_box">
                    <div className="expense_title">{title}</div>
                </div>
                <div className="expense_buttons_box">
                    <div className="price">${price}</div>
                </div>
            </div>
        </>
    )
}

export default ExpenseItem
