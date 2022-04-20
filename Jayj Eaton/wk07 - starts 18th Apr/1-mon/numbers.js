const title = document.querySelector(".title");
const image = document.querySelector(".image");
const bio = document.querySelector(".bio");

// ajax
const fetchFact = function () {
	let search = document.querySelector("#search").value;
	const xhr = new XMLHttpRequest();
	xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${search}`);
	xhr.send();
	xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			let data = JSON.parse(xhr.responseText);
			let book = data.items[0].volumeInfo;
			title.innerHTML = book.title;
			image.innerHTML = `<img src="${book.imageLinks.smallThumbnail}">`;
			bio.innerHTML = book.description;
		} else {
			title.innerHTML = "error try again";
		}
	};
};

document.querySelector("#fetch").addEventListener("click", fetchFact);
