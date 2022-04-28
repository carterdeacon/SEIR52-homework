import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Todos from './components/Todos'
import React, { Component } from 'react'
import Header from './components/layout/header'
import AddTodo from './components/AddTodo';
//this lets us generate unique ids
import About from './components/Pages/About'
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

//class attributes in html are now called className
class App extends Component {
  //todo's need to be in a place where we can feed it down to different components
  state = {
    //array of objects. like a fake rails sql database.
    todos: []
  }

  //this uses axios to link to the api
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      //we set the state of the todo list to the data in the api
      .then(res => this.setState({ todos: res.data }))
  }

  //the state is like an overacrching cloud of information at the highest level component. We send props up from lower level compoenents to change it
  //The effect then rains back down.
  //because we bind this to id, whenever a box is checked we have access to the id of the checkbox
  markComplete = (id) => {
    //we want to change the state of the todos array. We can do this by matching the id passed up from TodoItem with the objects in the array.
    this.setState({
      todos: this.state.todos.map(todo => {
        //map through the todos array and if the id is the same as the checkbox id
        if (todo.id === id) {
          //set the state of the todo object to be the opposite of what it was before (toggle it)
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //DELETE todolist
  delTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //todo will be deleted on the server and updated on the ui
    .then(res=> this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }) )
    //we want to copy everything in todos. [...] is the spread operator that takes everthing in this.state.todos. Then we filter todo for anything where the todo.id is not equal to the desired id.
    //we are filtering out anthing that we're NOT deleting. Only return the todos we don't want to delete
    
  }

  //these will come back because the information is not persisitng in a data base.

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuidv4(),
    //   // with ES6 if the variable name and key are the same we can just write one like title: title
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      //to create a new post we take whatever from the api and convert it to a new todo
      //a request is made to json placeholder when we type into input and then it sends a response with the todo information including id and adds it to the user interface
      //.then addresses the promise we get back from the api
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    //we make a copy of todos using spread, create a newTodo and add it to the state

  }


  render() {
    //lets us access todo array in state, using this.
    //we want to pass the todos STATE down to the Todos Coßmponent as a property (props)
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Routes>
              <Route exact path="/" element={
                <React.Fragment>
                  {/* here we are receiving props from AddTodo for a new todoitem */}
                  <AddTodo addTodo={this.addTodo} />
                  {/* we are taking the state in our todos main App component and passing it DOWN to the Todo compoenent as a property (prop)  */}
                  {/* the markComplete props is passed up from Todos, the markcomplete function is caleld when the props is rendered */}
                  {/* We don't use props for this delTodo because it is at the state level highest component, no more information is being passed higher */}
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              } />
              <Route path="/about" element={About} />
            </Routes>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
