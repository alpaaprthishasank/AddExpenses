import React from 'react'

const ExpenseDate = (props) => {
    const month=props.date.toLocaleString('en-us',{month:'long'})
    const date=props.date.toLocaleString('en-us',{day:'2-digit'})
    const year=props.date.getFullYear()
  return (
    <div>
      <div>
      <h2>{props.date.toISOString()}</h2>
      <h2>{month}</h2>
      <h2>{date}</h2>
      <h2>{year}</h2>
    </div>
    </div>
  )
}

export default ExpenseDate
