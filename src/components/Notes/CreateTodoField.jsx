import React from "react";
import { useState } from "react";

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('')

    const addTodo = title => {
        setTodos( prev => [ 
        {
            _id: new Date(),
            title,
            isCompleted: false,
        }, 
        ...prev,
        ])
        setTitle('')
    }

    return (
        <div>
            <input 
                type="text" 
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
            />
        </div>
    )
}

export default CreateTodoField