import React, { Component, useContext, useState } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
import {TodoListContext} from '../contexts/TodoListContext'

// class TodoList extends Component {

//     static contextType = ThemeContext;

//     render() {
//         const  { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;

//         return (
//             <div style={{background: theme.background, color: theme.text, height: '140px'}}>
//                 <p className='item'> Take a vacation </p>
//                 <p className='item'> Eat Dinner </p>
//                 <p className='item'> Stand Up </p>
//                 <button className='ui button primary' onClick={changeTheme}> Change Theme </button>
                
//             </div>
//         );
//     }
// }

const TodoList = () => {

    const [todo, setTodo] = useState('')

    // const {todos, addTodo, removeTodo} = useContext(TodoListContext)
    const {todos, dispatch} = useContext(TodoListContext)

    const  { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext)
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        // addTodo(todo)
        dispatch({type: 'ADD_TODO', text: todo})
        

    }

    const handleRemoveTodo = (e) => {
        // removeTodo(e.target.id)
        dispatch({type: 'REMOVE_TODO', id: e.target.id})

    }
    return (
        <div style={{background: theme.background, color: theme.text}}>
            {todos.length ? (
                todos.map((todo) => {
                   return  <p id={todo.id} onClick={handleRemoveTodo} className='item' key={todo.id}> {todo.text} </p>
                }))
            : ( <div> You have no todos </div>  ) 
            }
            <form onSubmit={handleFormSubmit}> 
                <label htmlFor='todo'> Add todo: </label>
                <input type='text' id='todo' onChange={handleChange}/>
                <input className='ui button primary' value='Add New todo' type='submit'/>
            </form>
            <button className='ui button primary' onClick={changeTheme}> Change Theme </button>
            
        </div>
    )
}

export default TodoList;