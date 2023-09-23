import React, { useState } from 'react';
import './App.css';
import Expenseitem from './Components/Expenseitem';
import NewExpenses from './Components/NewExpenses/NewExpenses';
import Expenses from './Components/Expenses';

const initialExpenses = [
  {
    id: "e1",
    title: "shasank",
    amount: 43234,
    date: new Date(),
  },
  {
    id: "e2",
    title: "shasank1",
    amount: 432341,
    date: new Date(2021, 9, 22),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
