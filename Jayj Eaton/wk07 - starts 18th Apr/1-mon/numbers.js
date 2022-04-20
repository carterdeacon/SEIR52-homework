// ajax
const title = document.querySelector(".title");
const image = document.querySelector(".image");
const bio = document.querySelector(".bio");

const fetchFact = function () {
	const xhr = new XMLHttpRequest();
	let search = document.querySelector("#search").value;
	xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${search}`);
	xhr.send();
	xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			let data = JSON.parse(xhr.responseText);
			let book = data.items[0].volumeInfo;
			title.innerHTML = book.title;
			image.innerHTML = `<img src="${book.imageLinks.smallThumbnail}">`;
			bio.innerHTML = book.description;
		}
	};
};

document.querySelector("#fetch").addEventListener("click", fetchFact);
