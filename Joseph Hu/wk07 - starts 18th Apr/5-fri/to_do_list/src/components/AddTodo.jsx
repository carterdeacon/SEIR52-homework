import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
  //THIS IS AN EXAMPLE OF COMPOENENT STATE. WE DO NOT NEED TO GO TO THE APP LEVEL TO ACCESS IT
  //THIS STATE ONLY EXISTS IN THE AddToDo component. Other components don't need to access this
  state = {
    title: ''
  }
  //here we are setting the title to whatever we type in the input box
  //as long as our name is equal to whatever the name field is we can use this for whatever fields we want
  onSubmit = (e) => {
    //the form will try submit to the actual file by default so we need to prevent it.
    e.preventDefault();
    //we need to call a props method to pass this up to App.js because we are adding a new todo object to the state array
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  render() {
    return (
      //we need a submit event when we submit the form
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }} >
        {/* The onChange property means that as we type it takes the value from the input box */}
        <input type="text" name="title" placeholder='Add Todo...' style={{ flex: '10', padding: '5px' }} value={this.state.title} onChange={this.onChange} />
        <input type="submit" value="Submit" className="btn" style={{ flex: '1' }} />
      </form>
    )
  }
}
AddTodo.propTypes = {
  //this will be an array of todos that is required.
  addTodo: PropTypes.func.isRequired
}
export default AddTodo