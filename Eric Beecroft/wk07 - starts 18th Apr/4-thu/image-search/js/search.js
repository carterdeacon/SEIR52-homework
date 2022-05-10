const state = {
    currentPage: 1,
    lastPageReached: false
};

const searchFlickr = function (keywords) {
    if (state.lastPageReached) return; // Exit the function if the last page has been reached

    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', // Not to be confused with HTTP methods like POST
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1, // Please don't be bored enough to read up on this
        page: state.currentPage++
    }).done(showImages).done(function (info) {
        console.log(info);
        if (info.photos.page >= info.photos.pages) {
            state.lastPageReached = true;
        }
    });
};

const showImages = function (results) {
    results.photos.photo.forEach(function (photo) {
        const thumbnailURL = generateURL(photo); // Build a URL
        console.log(thumbnailURL);
        const $img = $(`<img>`, {src: thumbnailURL}) // Create an image
        $img.appendTo('#images');
    });
};

const generateURL = function (p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg'
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault(); // Disable form from being submitted to a server
        
        state.currentPage = 1

        const searchTerm = $('#query').val();
        searchFlickr(searchTerm);
        
    });

    // Higher Order Function (HOF)
    const relaxedSearchFlickr = _.debounce(searchFlickr, 4444, true) // The time amount is up to you. True means accept the leading edge (the first time the user activates this function)

    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 700) { //To Do: adjust the number to suit your taste.
            const searchTerm = $('#query').val();
            relaxedSearchFlickr(searchTerm);
        }
    });
});