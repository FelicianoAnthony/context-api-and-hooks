import React, {createContext, useState, useReducer} from 'react'
import {todosReducer} from '../reducers/todosReducer'

export const TodoListContext = createContext() 



const TodoListContextProvider = ( {children } ) => {

    const [todos, dispatch] = useReducer(todosReducer, [
        {text: 'Take a Break', id:1},
        {text: 'Eat Dinner', id:2},
        {text: 'Stand Up', id:3},
    ])

    // const [todos, setTodos] = useState([
    //     {text: 'Take a Break', id:1},
    //     {text: 'Eat Dinner', id:2},
    //     {text: 'Stand Up', id:3},
    // ])

    // const addTodo = (todo) => {
    //     setTodos([
    //         ...todos, 
    //         {text: todo, id: Math.random()}
    //     ]);
    // };

    // const removeTodo = (id) => {
    //     setTodos(todos.filter((todo) => {return todo.id !== Number(id)}))
    // }

    return (
        // <TodoListContext.Provider value={{todos, addTodo: addTodo, removeTodo: removeTodo}}> 
        <TodoListContext.Provider value={{todos, dispatch}}> 
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider