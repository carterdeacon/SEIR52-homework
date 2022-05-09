import React from "react";

function BookDisplay({ bookData }) {
	const image = bookData.imageLinks.thumbnail;
	return (
		<div>
			<h2>{bookData.title}</h2>
			<img src={image} alt="bookData.title" />
			<p>{bookData.description}</p>
		</div>
	);
}

export default BookDisplay;
