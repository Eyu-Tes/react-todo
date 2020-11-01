import {useState} from 'react'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, name: 'Exercise', dateCreated: new Date(), completed: false}, 
    {id: 2, name: 'Exercise', dateCreated: new Date(), completed: false}, 
    {id: 3, name: 'Exercise', dateCreated: new Date(), completed: false}
  ])
  return (
    <>
      <Header/>
      <div className="main-section">
        <Todos todos={todos}/>
      </div>
    </>
  );
}

export default App;
