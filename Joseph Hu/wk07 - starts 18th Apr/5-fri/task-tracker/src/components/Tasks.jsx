import Task from './Task'

//destructure the props passed down from App.js as tasks 
//pass toggle params down from App
const Tasks = ({tasks, onDelete, onToggle}) => {
    //we call the state tasks and a function called setTasks.
    //this is now the state of our component.
    //We actually want this state at the highest level Component so we can pass data as props down instead of data in every component. A solution would be to use an API separate.
    
  return (
    //we use empty div to create a React Fragment. We don't actually want to render a div
    //NOTE: we cannot mutate the state, for example we can't do task.push('object of a task'). We have to recreate the state and send the information to the state.
    //we would use setTasks([...tasks,{}]) to copy the current tasks state and add a new object to it.
    <>
    {/* loop through tasks from the object and map the name of the task  */}
    {tasks.map((task)=>(
        //passing in task as a prop. onToggle is a props, passed down to Task
    <Task key={task.id} 
        task={task}
        onDelete={onDelete} 
        onToggle={onToggle}
    />
    ))}
    </>
  )
}

export default Tasks