import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

const [todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState('')

  function persistData()
  {
    localStorage.setItem('todos',JSON.stringify({todos:
      newList
    }))
  }

  function HandleAddTodos(newTodo){
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
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localStorage){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  },[])


  return (
   <>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} HandleAddTodos = {HandleAddTodos} />
      <TodoList HandleDeleteTodo = {HandleDeleteTodo} HandleEditTodo = {HandleEditTodo}
      todos = {todos}   />
   </>
  )
}

export default App
