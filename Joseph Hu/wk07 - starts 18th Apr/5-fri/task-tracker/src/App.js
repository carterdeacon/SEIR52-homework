import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import React from 'react'
//this is a hook that lets us use our tasks object array as a state
//useEffect is a hook that lets us create side effects when the page loads
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import About from './components/About'
//lets us use routing
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App =()=> {
  //this allows us to click the green add button and toggle the form with a boolean
  //the form will be dependent on this state whether it shows or not
  const [showAddTask, setShowAddTask] = useState (true)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      //this adds infromation to our state
      setTasks(tasksFromServer)
    }
    //calling the function here to fetch api data
    getTasks()
    //if we have a value that we want to change when this runs we pass it into the empty array
  }, [])
  
  //Fetch Tasks
  const fetchTasks = async () =>{
    //this is like our fake api from a json server we set up with data from db.json. This will act as our state 
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)

    return data

  }
  //this will change the state of my setReminder in the server
  const fetchTask = async (id) =>{
    //this is like our fake api from a json server we set up with data from db.json. This will act as our state 
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data)

    return data

  }


  //Add Task
  const addTask = async (task)=>{
    //we are making a fetch request to the api and receiving a promise
      const res = await fetch('http://localhost:5000/tasks', {
      //the method is a post request
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      //the data we are sending turns it into a JSON string
      body: JSON.stringify(task)
    })
    
    //the data that's returned is the new task is added. THIS IS A PROMISE we must await it

    const data = await res.json()
    //tasks the the array of objects remember. So we take the whol array of tasks and copy it and add onto it, data which is the newly created task
    setTasks([...tasks, data])
    //we don't need this anymore because the local host5000 fake api automatically ads an id
  //   //we need to add task object from AddTask.jsx to our state so we can have more items in the list.
  //   //this just give us a random unique id up to 10000
  //   const id = Math.floor(Math.random() * 10000) + 1
  //   //the new task object to add to the state wil have a random id and we use spread to copy the task form inputs that are passed in from AddTask.jsx onAdd({text, day, reminder})
  //   const newTask = {id, ...task}
  //   //then we use set setTasks and set it as an array and copy the current tasks in the state and then add the new task onto it.
  //  //we are copying the current state of tasks, then adding newTask
  //   setTasks([...tasks, newTask])
  }


  //Delete Task
  //We need to pass down props from App.js so we can delete Tasks.
  //We doing this by passing down a props and a delete function
  const deleteTask = async (id) => {
    //fetch returns a promise and we need to await the promise. We don't need to put this in a variable because we aren't using it later. It's just a delete request
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })
    //when we delete the tasks from the UI and reload the page, they come back because we are not actually changing the data in the local server 5000 'fake api backend database

    //filter takes in a function and for each task, we filter the id
    //if the task.id is not equal to the id, we are deleting it.
    setTasks(tasks.filter((task)=>task.id !== id))
    console.log('delete')
  }

  //Toggle Reminder
  //we map the tasks object array and for each task if the task is equal to the specific id, we copy the task using spread and change the reminder key to the opposite of it's current state.
  //else do nothing to the task.
  const toggleReminder = async (id) => {
    //fetch the task by id from the database
    const taskToToggle = await fetchTask(id)
    //copy the task that we want to toggle and set the reminder state to the opposite of the current state.
    const updatedTask = { ...taskToToggle,
      reminder: !taskToToggle.reminder}

      //we fetch the task from the API via id and send a PUT request with the data being the updatedTask toggle state
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    
    //we then receive back data from the server after it's been updated
    const data = await res.json()
    //we then set the toggle state of the class by maping over all the tasks in the array and setting it true or false
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: data.reminder} : task
      )
    )
  }
    
  return (
    <Router>
    {/* // any element in the return MUST be contained within a parent element */}
      <div className="container">
        {/* we set the onAdd property of Header as the opposite of it's current state and this will toggle it. */}
        {/* the props showAdd allows us to change the styling of the button when it is clicked. define props showAdd and add pass the toggle state of the showAddTask button */}
        <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
          <Routes>
            <Route path='/' exact element={
              <>
                {/* designate onAdd property to AddTask and passin Function that adds the task */}
                {/* if showAddTask is true then render AddTask form. the && is like a ternary ? : without the else part */}
                {showAddTask && <AddTask onAdd={addTask}/>}
                {/* prop onDelete passes the function deleteTask down to Tasks and then further down to Task. */}
                {/* Display a message when there are no tasks left */}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
              </>
            }/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        <Footer />
      </div>
  </Router>
  );
}

export default App;
