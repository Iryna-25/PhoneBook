import React, { useState } from "react";
import TodoItem from "../components/Notes/TodoItem.jsx";
import CreateTodoField from "../components/Notes/CreateTodoField.jsx";

import { Wrapper } from "../styles/Elements.styled.jsx";


const data = [
  {
    _id: 'tywe4',
    title: 'Call to Tommy',
    isCompleted: false,
  },
  {
    _id: 'tywe67454',
    title: 'Finish the essay',
    isCompleted: false,
  },
  {
    _id: 'tywghe4',
    title: 'Complete the app',
    isCompleted: false,
  },
] 

const NotesPage = () => {
  const [todos, setTodos] = useState(data);
  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy) 
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter(t => t._id !== id))
  }

  return (  
    <Wrapper>
      <h1> My Notes</h1>
      <h3> Here will be your notes </h3>
      {todos.map(todo => (
        <TodoItem 
          key={todo._id} 
          todo={todo} 
          changeTodo={changeTodo}
          removeTodo={removeTodo}/>
      ) )}
      <CreateTodoField setTodos={setTodos}/>
    </Wrapper>
  );
}

export default NotesPage
