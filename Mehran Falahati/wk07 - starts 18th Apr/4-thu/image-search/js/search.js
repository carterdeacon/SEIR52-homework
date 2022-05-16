
const state = {
    currentPage: 1,
    lastPageReached: false,
    requestInProgress: false
};

const searchFlickr = function (keywords) {
    if (state.lastPageReached || state.requestInProgress) return;
    //console.log('searching for', keywords);

    state.requestInProgress = true;
    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', // not to be confused with HTTP methods like post
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1,
        page: state.currentPage++
    }).done(showImages).done(function (info) {
        console.log(info)
        if (info.photos.page >= info.photos.pages) {
            state.lastPageReached = true;
        }
        state.requestInProgress = false;
    })
};

const showImages = function (results) {
    results.photos.photo.forEach(function (photo) {
        const thumbnailURL = generateURL(photo);
        //console.log(thumbnailURL)
        // Build a URL line 26 to 38
        // Generate an image
        const $img = $('<img>', {src: thumbnailURL})
        // Set a source of the image to the URL
        // Attach the image to the DOM
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
        '_q.jpg' //change 'q' to something elsefor different sizes (see docs)
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault();

        state.currentPage = 1;
        state.lastPageReached = false;
        $('#images').empty();

        // get the query
        const searchTerm = $('#query').val();
        //console.log('searching', searchTerm)

        // search flickr for the query
        searchFlickr(searchTerm)
    });

    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 700) {
            const searchTerm = $('#query').val();
            searchFlickr(searchTerm);
            //console.log('near the bottom!');
        }
        //console.log(scrollBottom);
    });
});