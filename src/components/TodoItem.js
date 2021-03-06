import PropTypes from 'prop-types'
import moment from 'moment'

const TodoItem = ({todo: {id, title, dateCreated, completed}, 
    toggleComplete, deleteTodo}) => {
    const getStyle = () => (
        {textDecoration: completed ? 'line-through' : 'none'}
    )

    const onClick = (e) => {
        toggleComplete(id)
    }
    
    return(
        <div className="todo">
            <input type="checkbox" onClick={onClick}/>
            <div style={getStyle()} className="todo-info">
                <div>{title}</div>
                <div>{moment(dateCreated).format("MMM Do [@] h:mm a")}</div>
            </div>
            <button className="btn" id="delete-task" onClick={deleteTodo.bind(this, id)}>X</button>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired, 
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default TodoItem
