import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = (props) => {

const [showForm, setShowForm] = useState(false);

const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData={
        ...enteredExpenseData,
        id: Math.random().toString()
        
    };
        props.onAddExpense(expenseData);
        setShowForm(false);
};

const startForm = () => {
    setShowForm(true);
};

const stopEdit = () => {
    setShowForm(false);
}


    return  (
    <div className="new-expense">
    {!showForm && (<button onClick={startForm}> New Expense </button>)}
        {showForm && (<ExpenseForm  
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEdit}
        />)}
    </div>
    );
};

export default NewExpense;