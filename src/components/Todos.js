import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const Todos = ({todos, toggleComplete, deleteTask}) => 
    <div className="todo-container">
        {todos.map(todo => <TodoItem 
                                key={todo.id} 
                                todo={todo}
                                toggleComplete={toggleComplete}
                                deleteTask={deleteTask}
                                />)}
    </div>

Todos.propTypes = {
    todos: PropTypes.array.isRequired, 
    toggleComplete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
}

export default Todos
