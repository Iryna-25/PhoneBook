import React from "react";
import Check from "./Check";

import { Trash } from "react-bootstrap-icons";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return(
        <div> 
            <button 
            className="flex item-center"
            onClick={() => changeTodo(todo._id)}>
                <Check isCompleted={todo.isCompleted}/>
            </button>  

            {todo.title}
            <button
            onClick={() => removeTodo(todo._id)}>
                <Trash size={18}/>
            </button>
        </div>
    )
}

export default TodoItem;