import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css'
import  ExpenseFilter from './ExpenseFilter'
import Card from './Card/Card';
const Expenseitem = (props) => {
    const expenseDate=new Date(2023,8,26);
    const expenseTitle='Car insurance'
    const expenseAmount=2345
    const month=props.date.toLocaleString('en-us',{month:'long'})
    const date=props.date.toLocaleString('en-us',{day:'2-digit'})
    const year=props.date.getFullYear()
    const [title,setTitle]=useState(props.title)
   
const clickHandler=()=>{
setTitle(prompt("enter the title"))
}
  return (
    
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
    <div className='expense-item__description'>{title}</div>
    <div className='expense-item__price'>{props.amount}</div>
    <button onClick={clickHandler}>change title</button>
    </Card>
    
  )
}

export default Expenseitem
