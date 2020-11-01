import {useState} from 'react'

const AddTodo = ({addTodo}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (text !== ''){
            addTodo(text)
            setText('')
        }
    }

    const onChange = (e) => setText(e.target.value)

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    className="form-control" 
                    autoFocus
                    name="text"
                    value={text}
                    onChange={onChange}
                    />
                <input type="submit" className="btn btn-block btn-primary" value="Add Todo"/>
            </form>
        </div>
    )
}

export default AddTodo
