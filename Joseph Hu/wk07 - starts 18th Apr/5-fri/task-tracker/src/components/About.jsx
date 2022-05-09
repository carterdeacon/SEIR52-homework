import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h4>Version 1.0.0</h4>
        {/* if we use an a tag, it will redirect us to another page. If we want to stay on the current page we use a react Link */}
        {/* <a href="/">Go Back</a> */}
        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About