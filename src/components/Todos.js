import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const Todos = ({todos}) => 
    <div className="todo-container">
        {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
    </div>

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos
