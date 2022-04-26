const state = {
	pageCount: 1,
	lastPage: false,
	requestInProgress: false,
};

function searchFlickr(query) {
	// wont make further requests if last page
	if (state.lastPage || state.requestInProgress) return;

	state.requestInProgress = true;
	const baseURL = "https://api.flickr.com/services/rest";
	$.getJSON(baseURL, {
		method: "flickr.photos.search", // flicker method NOT get-post ect
		api_key: "2f5ac274ecfac5a455f38745704ad084",
		text: query,
		format: "json",
		nojsoncallback: 1,
		page: state.pageCount++,
	})
		.done(showImages)
		.done((info) => {
			if (info.photos.page >= info.photos.pages) {
				state.lastPage = true;
			}
			state.requestInProgress = false;
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
		state.pageCount = 1;
		state.lastPage = false;
		e.preventDefault();
		const query = $("#query").val();
		searchFlickr(query);
	});
	$(window).on("scroll", () => {
		const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
		if (scrollBottom < 700) {
			const query = $("#query").val();
			searchFlickr(query);
		}
	});
});

// only 1 page at a time
// show nextpage
// if no pages left show extending

// _.debounce(func, 6000, true) true means run immedietly default or false is after time
