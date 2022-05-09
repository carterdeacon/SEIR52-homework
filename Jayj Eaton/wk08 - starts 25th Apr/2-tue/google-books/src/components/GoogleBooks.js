import React, { useState } from "react";
import BookSearch from "./BookSearch";
import BookDisplay from "./BookDisplay";

function GoogleBooks() {
	const [book, setBook] = useState({});
	const getBook = async function (value) {
		const url = `https://www.googleapis.com/books/v1/volumes?q=${value}`;
		const response = await fetch(url);
		const data = await response.json();
		const bookInfo = data.items[0].volumeInfo;
		setBook(bookInfo);
	};
	return (
		<div>
			<BookSearch onSubmit={getBook} />
			<BookDisplay bookData={book} />
		</div>
	);
}

export default GoogleBooks;
