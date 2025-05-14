import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

const [todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState('')


  function persistData(newList)
  {
    localStorage.setItem('todos',JSON.stringify({todos:
      newList
    }))
  }

  function HandleAddTodos(newTodo) {
  if (!newTodo.trim()) return
  const newTodoList = [...todos, newTodo]
  persistData(newTodoList)
  setTodos(newTodoList)
}


  function HandleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function HandleEditTodo(index){
    const valueTobeEdited = todos[index]
    setTodoValue(valueTobeEdited)
    HandleDeleteTodo(index)
  }

  useEffect(() => {
  const storedTodos = localStorage.getItem('todos')
  if (storedTodos) {
    try {
      const parsed = JSON.parse(storedTodos)
      if (parsed.todos) {
        setTodos(parsed.todos)
      }
    } catch (e) {
      console.error("Failed to parse todos from localStorage:", e)
    }
  }
}, [])

  return (
   <>
      
          <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} HandleAddTodos = {HandleAddTodos} />
          <TodoList HandleDeleteTodo = {HandleDeleteTodo} HandleEditTodo = {HandleEditTodo}
            todos = {todos}   />
     
   </>
  )
}

export default App
