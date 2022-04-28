import React from 'react'
//each input will have it's own component level state NOT app level state
import { useState } from 'react'
//pass in props from App.js of onAdd. Don't need to destructure it yet because this is being passed down to Task
const AddTask = ({onAdd}) => {
    //setText is the function to update the state and the state is text
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit =(e) =>{
        //prevents submitting to another page, which is the default behaviour of a form
        e.preventDefault()
        //checks if the input entered into the form is text or else alert
        if(!text){
            alert('Please add a task')
            return
        }
        //take props onAdd function from App.js and pass in text, day, reminder. Remember onAdd a prop with the function of addTask
        onAdd({text, day, reminder})

        //clear the form
        setText('')
        setDay('')
        setReminder(false)
    }
  return (
      //define props of onSubmit then we need to actually create the function onSubmit
    <form className="add-form" onSubmit={onSubmit} >
        <div className="form-control">
            <label>Task</label>
            {/* onChange will update the text with whatever we type in the input box  */}
            <input type="text" placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <div className="form-control form">
            <label>Day & Time</label>
            <input type="text" placeholder='Add Day & Time' value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            {/* the onChange props sets the value of reminder if the checkbox is checked or not. Reminder is a boolean. Checked also indicates the intial state of the checkbox. If reminder is false then it's unchecked */}
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Save Task' className="btn btn-block" />
    </form>
  )
}

export default AddTask