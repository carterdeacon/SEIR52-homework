import React from "react";

// functional components dont require this. since its being passed props
function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

export default Square;
