import React from 'react'

function Die(props) {
    const _handleClick = () => {
        props.holdDice(props.id)
    };
  
    return (
    <div className={ props.isHeld ? "die held" : "die" }onClick={_handleClick}>{ props.value }</div>
  )
}

export default Die