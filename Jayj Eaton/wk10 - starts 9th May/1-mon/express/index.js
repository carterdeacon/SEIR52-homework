const express = require("express");
const ejs = require("ejs");
const axios = require("axios");

const server = express();
server.set("view-engine", ejs);
const PORT = 3000;

server.get("/", (req, res) => {
	res.render("home.ejs");
});
server.get("/result", (req, res) => {
	console.log(req.query.pokemon);
	axios
		.get(`https://pokeapi.co/api/v2/pokemon/${req.query.pokemon}/`)
		.then((data) => {
			res.render("results.ejs", data);
		});
});

server.listen(PORT, () => {
	console.log(`now serving on http://localhost:${PORT}`);
});
