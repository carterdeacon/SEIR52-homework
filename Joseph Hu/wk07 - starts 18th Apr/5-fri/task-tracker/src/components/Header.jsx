//type impt to import proptypes
import PropTypes from 'prop-types'
import Button from './Button'
//this is a hook that lets us determine the route we are currently on and change aspects of the page accordingly
import { useLocation } from 'react-router-dom'


//to take in the Header title from App.js we need to pass in props. title is a property of Header.js
//we can destructure props so we only access the title value in the props object.
//showAdd is passed  up from App.js
const Header = ({ title, onAdd, showAdd }) => {

  //gives us access to location.pathname
  const location = useLocation()

  return (
    <header className='header'>
      {/* this title will be whatever we pass in to the property in App.js */}
      <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>
      {/* we pass in the onClick as a prop for the Button Component */}
      {/* Adding the prop onClick means when we click the button it passes down the onAdd prop from App.js which in turn toggles the form with setShowAddTask state changing the ShowAddTask */}
      {/* if the state of the button showAddTask is true, the depict 'Close on the button else depict Add */}
      {location.pathname === '/' && <Button onClick={onAdd} 
      color={showAdd? 'red':'green'} text={showAdd? 'Close':'Add'} />}
    </header>
  )
}

//if we don't pass a props title into App.js for Header, we can define the default props.
Header.defaultProps = {
  title: 'Task Tracker',
}
//we are defining the propTYPE for the Heaeder. the title is going to be a string. This limits the data type that the title can be and prevents errors. For example, it would disallow an integer from being passed in.
//this is like initializing our variables but in this case we're initializing our props for the Header
Header.propTypes = {
  title: PropTypes.string.isRequired
}

// You can also add style like this. We just do single curly braces and feed in heading Style into h1 style={} props
// const headingStyle = {

// }

export default Header