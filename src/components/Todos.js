import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const Todos = ({todos, toggleComplete, deleteTodo}) => 
    <div className="todo-container">
        {todos.map(todo => <TodoItem 
                                key={todo.id} 
                                todo={todo}
                                toggleComplete={toggleComplete}
                                deleteTodo={deleteTodo}
                                />)}
    </div>

Todos.propTypes = {
    todos: PropTypes.array.isRequired, 
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default Todos
