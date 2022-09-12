import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter.js";
import { useState } from "react";
import ExpenseList from './ExpenseList';

function Expenses(props) {

 const [filteredYear, setFilteredYear] = useState('2020');

const changeYearHandler = (selectedYear) => {
  setFilteredYear(selectedYear);
}

const filteredExpenses = props.items.filter( expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});

    return ( 
    
    <div className="expenses">
    <ExpenseFilter selectedYear={filteredYear} onChangeYear={changeYearHandler} />
     <ExpenseList item={filteredExpenses}/>
    </div>
    );
}

export default Expenses;