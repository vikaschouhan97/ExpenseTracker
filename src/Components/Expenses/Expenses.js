import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter.js";
import { useState } from "react/cjs/react.development";
import ExpenseList from './ExpenseList';
import ExpensesChart from "./ExpensesChart";

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
    <ExpensesChart expenses={filteredExpenses}/>
     <ExpenseList item={filteredExpenses}/>
    </div>
    );
}

export default Expenses;