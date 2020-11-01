import {useState} from 'react'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([])

  // toggle todo complete
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !(todo.completed)
      }
      return todo
    }))
  }

  // delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // add todo
  const addTodo = (text) => {
    const newTodo = {
      id: getLastId() + 1, 
      title: text, 
      dateCompleted: new Date(), 
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  // get id of the last todo or 0 if no todos
  const getLastId = () => {
    const lastTodo = todos[todos.length - 1]
    const id = lastTodo ? lastTodo.id : 0
    return id
  }

  return (
    <>
      <Header/>
      <div className="main-section">
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} 
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

export default App;
