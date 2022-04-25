const container = document.querySelector(".container");
const button = document.querySelector("#fetch");
// ajax
const searchBook = function () {
	let search = document.querySelector("#search").value;
	const xhr = new XMLHttpRequest();
	xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${search}`);
	xhr.send();
	xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			let data = JSON.parse(xhr.responseText);
			let book = data.items[0].volumeInfo;
			container.innerHTML = `
				<h1 class="title">${book.title}</h1>
				<img src="${book.imageLinks.smallThumbnail}">
				<div class="bio">${book.description}</div>			
			`;
		} else {
			container.innerHTML = "error try again";
		}
	};
};

button.addEventListener("click", searchBook);
