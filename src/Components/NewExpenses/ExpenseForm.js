import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredtitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')
    /*const[userInput,setUserInput]=useState({
        enteredtitle:"",
        enteredAmount:"",
        enteredDate:""
    })*/
const titleChangeHandler=(e)=>{
    //console.log(e.target.value)
    setEnteredTitle(e.target.value)
    /*
setUserInput({
    ...userInput,
    enteredtitle:e.target.value})*/
}
const AmountChangeHandler=(e)=>{
  //  setUserInput({
    //    ...userInput,
      //  enteredAmount:e.target.value})
      //setUserInput((prevstate)=>{
        //return{...prevstate,enteredAmount:e.target.value}
      //})
      setEnteredAmount(e.target.value)
    }
    const DateChangeHandler=(e)=>{
       /* setUserInput({
            ...userInput,
            enteredDate:e.target.value})*/
            setEnteredDate(e.target.value)
        }
const SubmitHandler=(e)=>{
e.preventDefault();
const expenseData={
    title:enteredtitle,
    amount:enteredAmount,
    date:new Date(enteredDate)
}
//console.log(expenseData)
props.onSaveExpenseData(expenseData);
setEnteredAmount('')
setEnteredDate('')
setEnteredTitle('')
}
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredtitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" value={enteredAmount} step="0.01" onChange={AmountChangeHandler}/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" value={enteredDate} max="2023-12-31" onChange={DateChangeHandler}/>
            </div>
            <div className='new-expense__actions'>
              <button onClick={props.onCancel} type='button'>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm
