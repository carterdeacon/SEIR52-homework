import React from 'react'
//taking the prop passed from Tasks and destructuring it
import { FaTimes } from 'react-icons/fa'


//pass onDelete as a prop from Tasks
const Task = ({task, onDelete, onToggle }) => {
  return (
    //When we double click, we pass the onToggle props from Tasks and toggle the specific task by id
    //if the task prop has a reminder value of true, give it a class of reminder (makes the edge green) else do nothing
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
            {/* onDelete is called when the icon is clicked */}
            {task.text}<FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={()=>onDelete(task.id)} />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task

//PROPS GET PASSED DOWN FROM PARENT COMPONENTS TO CHANGE THE STATE
//ACTIONS GET PASSED UP FROM CHILD COMPONENTS