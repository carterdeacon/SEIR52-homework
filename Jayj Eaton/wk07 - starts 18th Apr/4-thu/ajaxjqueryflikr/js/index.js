let didScroll = false;
let pageCount = 1;
function searchFlickr(query) {
	const baseURL = "https://api.flickr.com/services/rest";
	$.getJSON(baseURL, {
		method: "flickr.photos.search", // flicker method NOT get-post ect
		api_key: "2f5ac274ecfac5a455f38745704ad084",
		text: query,
		format: "json",
		nojsoncallback: 1,
		page: pageCount,
	})
		.done(showImages)
		.done((info) => {
			console.log("get");
		});
}

function showImages(results) {
	results.photos.photo.forEach((photo) => {
		const thumbnailURL = generateURL(photo);
		$(".container").append(`
            <img src="${thumbnailURL}" class="img"/>        
        `);
	});
}

function generateURL(p) {
	return ["http://farm", p.farm, ".static.flickr.com/", p.server, "/", p.id, "_", p.secret, "_q.jpg"].join("");
}

$(document).ready(() => {
	$("#search").submit((e) => {
		$(".container").html("");
		pageCount = 1;
		e.preventDefault();
		const query = $("#query").val();
		searchFlickr(query);
	});
	$(window).on("scroll", () => {
		const scrollBottom = Math.round(($(document).height() - $(window).height() - $(window).scrollTop()) / 100) * 100;
		if (scrollBottom < 700) {
			didScroll = true;
		} // setTimeout is not perfect it sometimes only fires once but occasionally will fire 2 or 3 times i added math round and values to try have it fire less frequently i think it helps but not as much as i thought it would i feel like the did scroll is taking too long to change and its gettint 2 or 3 fires off before it changes back to false
		setTimeout(function () {
			if (didScroll) {
				didScroll = false;
				pageCount += 1;
				const query = $("#query").val();
				searchFlickr(query);
			}
		}, 2000);
	});
});

// only 1 page at a time
// show nextpage
// if no pages left show extending
