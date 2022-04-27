import React, { useState } from "react";

function GetJokes() {
	const [jokes, setJokes] = useState([]);
	const getJoke = async function () {
		const url = await fetch("https://icanhazdadjoke.com/", {
			headers: { Accept: "application/json", "User-Agent": "My library" },
		});
		const data = await url.json();
		const newJokes = [data.joke, ...jokes];
		setJokes(newJokes);
		console.log(data.joke);
	};

	return (
		<div>
			<button onClick={getJoke}>get Joke</button>
			<div>
				{jokes.map((joke) => {
					return <p>{joke}</p>;
				})}
			</div>
		</div>
	);
}

export default GetJokes;
