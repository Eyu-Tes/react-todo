import PropTypes from 'prop-types'
import moment from 'moment'

const TodoItem = ({todo: {id, title, dateCreated, completed}, 
    toggleComplete, deleteTask}) => {
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
            <button 
                style={buttonStyle} 
                className="delete-task" 
                onClick={deleteTask.bind(this, id)}
            >
            X
            </button>
        </div>
    )
}

const buttonStyle = {
    height: '30px',
    backgroundColor: 'transparent',
    color: '#555',
    border: '1px solid #bbb',
    cursor: 'pointer',
    padding: '0 10px',
    fontWeight: '600', 
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired, 
    toggleComplete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
}

export default TodoItem
