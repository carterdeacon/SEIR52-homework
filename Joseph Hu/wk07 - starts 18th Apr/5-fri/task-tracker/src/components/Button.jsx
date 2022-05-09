import React from 'react'
import PropTypes from 'prop-types'
//type race to get the boilerplate
//take the destructured prop from Header.jsx of button and pass it into Button
const Button = ({color, text, onClick}) => {


  return (
      //we use the props passed in from Header to style the button.
      //We embedded the button component and the onClick prop calls the function above.
    <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button