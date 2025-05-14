import { useState } from "react"

export default function TodoInput(props){
   const { HandleAddTodos, todoValue, setTodoValue } =props
   //const [todoValue, setTodoValue] = useState('') 
   return(
        <header>
            <input value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)}}
                onKeyDown ={(e)=>{
                    if(e.key === 'Enter' && todoValue.trim()){
                        HandleAddTodos(todoValue)
                        setTodoValue('')
                    }
                }}
                placeholder="Enter todo ....." />
            <button onClick={() => {
                HandleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>

    )
}