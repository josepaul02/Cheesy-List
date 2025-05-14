import React from 'react'

export default function TodoCard(props) {
  const {children, HandleDeleteTodo, index, HandleEditTodo} = props
  return (
    
    <li className='TodoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={() => {
          HandleEditTodo(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          HandleDeleteTodo(index)
        }}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
  </li>  )
}
