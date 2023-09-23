import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
const NewExpenses = (props) => {
  const[isEditing,setIsEditing]=useState(false)
  const saveExpenseDataHandler=(e)=>{
     const expensesData={
      ...e,
      id:Math.random().toString() 
     }
     console.log(expensesData)
     props.onAddExpense(expensesData)
     setIsEditing(false)
  }
  const startEditingHandler=()=>{
    setIsEditing(true);
  }
  const stopEditingHandler=()=>{
    setIsEditing(false)
  }
  return (
    <div className='new-expense'>
    {!isEditing &&  <button onClick={startEditingHandler}>Add new expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  )
}

export default NewExpenses
