import React from 'react';
import './expenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-us', { month: 'long' })
    const day = props.date.toLocaleString('en-us', { day: '2-digit' })
    const year = props.date.getFullYear();
    return (
        <>
            <div className="date_box">
                <div className="date">{month}</div>
                <div className="year">{year}</div>
                <div className="day">{day}</div>
            </div>
        </>
    )
}

export default ExpenseDate
