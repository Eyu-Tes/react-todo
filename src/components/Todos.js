import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const Todos = ({todos, toggleComplete}) => 
    <div className="todo-container">
        {todos.map(todo => <TodoItem 
                                key={todo.id} 
                                todo={todo}
                                toggleComplete={toggleComplete}
                                />)}
    </div>

Todos.propTypes = {
    todos: PropTypes.array.isRequired, 
    toggleComplete: PropTypes.func.isRequired,
}

export default Todos
