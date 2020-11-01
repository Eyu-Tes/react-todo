import PropTypes from 'prop-types'

const TodoItem = ({todo}) => {
    return(
        <div className="todo">
            <input type="checkbox" name="" id=""/>
            <div className="todo-info">
                <div>{todo.name}</div>
                <div>{todo.dateCreated.getMonth()}</div>
            </div>
            <span className="delete-task">x</span>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
