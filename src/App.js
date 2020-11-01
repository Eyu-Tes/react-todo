import {useState} from 'react'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Exercise', dateCreated: new Date(), completed: false}, 
    {id: 2, title: 'Study', dateCreated: new Date(), completed: false}, 
    {id: 3, title: 'Refresh', dateCreated: new Date(), completed: false}
  ])

  // toggle task complete
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !(todo.completed)
      }
      return todo
    }))
  }

  // delete task
  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Header/>
      <div className="main-section">
        <Todos todos={todos} 
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
}

export default App;
