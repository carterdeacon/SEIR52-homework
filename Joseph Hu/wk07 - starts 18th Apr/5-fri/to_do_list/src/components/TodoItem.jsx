import React, { Component } from 'react'
import PropTypes from 'prop-types'


//can type rce then hit tab if you don't want the export at the start
export class TodoItem extends Component {

    //this funtion provides custom styling when a contion is met below
    getStyle = () =>{
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed?
            'line-through' : 'none'
        }
    }
    //We use arrow functions because it allows us not to have to bind the function to 'this' in order to call it
    markComplete=(e)=>{
        console.log(this.props)
    }


    // A problem we have is that in order to change the state of the App we cannot simply call it. We need to climb the ladder from TodoItem -> Todos->App.
    //we could not simply call this.state.todos. We do this through props. We create methods inside of our props.

  render() {
    //instead of having to type this.props.todo all the time, we can destructure it to access it's keys from state
    const {id, title } = this.props.todo;
    return (
    // we are passing in a function to change the style of the div when a condition is met
      <div style={this.getStyle()}>
          {/* this is being passed from Todos as a property when we map through the array */}
        <p> 
            {/* the space just puts a space in front of the checkbox. we add .props. to the onChange property to allow us to link to the TodoItem in Todoss.jsx */}
            {/* this markComplete enables us to give the TodoItem Compoenent in Todos a property of markComplete */}
            {/* binding the probs with 'this' lets us transfer data downwards from App.js so we can access it here  */}
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
            {title}
            {/* once again we use this.props to send it up to where the state exists in App.js */}
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    //this will be an array of todos that is required.
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem