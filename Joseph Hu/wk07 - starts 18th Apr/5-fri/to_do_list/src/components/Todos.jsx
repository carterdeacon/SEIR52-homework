import React, { Component } from 'react';
import TodoItem from './TodoItem';
//There are prop types are a validation for properties that a component should have
//we can set the type and if they should be required. Eg: Todos has a property type of todos
//we need to add this as a prop type 
import PropTypes from 'prop-types'


// type rcc for automatically generated boilerplate of class component
class Todos extends Component {

    markComplete = () => {
        console.log('Hello')
    }
    render() {
        //we can only access this because the state is passed down from App via a prop
        console.log(this.props.todos)
        return (
            //we are looping through the todos array from state in App.js and maping it
            this.props.todos.map((todo) => (
                //we are taking the current todo being passed through the map function WHICH IS A PROP (the todo= ) whih is being passed into Todoitem.
                //we are saying the todo property of the TodoItem compoenent is the todo from the array in App.js
                //we are also saying the TodoItem has a property of key with a value of todo.id which is unique
                //since we added props to the checkbox input of the lower level TodoItem, we are able to add a prop to the TodoItem and call the markComplete function in todoItem
                //adding props to THIS markComplete lets us provide a prop in App.js, a higher level called markComplete.
                <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
            ))
       );
    }
}

//PropTypes
Todos.propTypes = {
    //this will be an array of todos that is required.
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;