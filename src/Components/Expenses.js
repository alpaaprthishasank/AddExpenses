import React,{useState} from 'react';

import ExpenseItem from './Expenseitem';
import Card from './Card/Card';
import './Expense.css';
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
    const [filteredYear,setFilteredYear]=useState('')
    const[filteredText,setFilterInfoText]=useState('2019,2020,2022')
    const filterChangeHandler=select=>{
setFilteredYear(select)  
if(select==='2019') setFilterInfoText('2020,2021,2022')
else if(select==='2020') setFilterInfoText('2019,2021,2022')
else if(select==='2021') setFilterInfoText('2019,2020,2022')
else setFilterInfoText('2019,2020,2021')
  }
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  })
  return (
    <div>
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
     <p>Data for years{filteredText} hidden</p>
     <ExpensesChart expenses={filteredExpenses}/>
    {filteredExpenses.length===0 ? (<p>No expenses are found</p> ):
  (   filteredExpenses.map(
        (expense)=> <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}
        date={expense.date} />
    ) )}
    </Card>
    </div>
  );
}

export default Expenses;