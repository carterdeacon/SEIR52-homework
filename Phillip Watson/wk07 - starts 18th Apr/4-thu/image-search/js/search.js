// let currentPage = 1;
// let lastPageReached = false;

const state = {
    currentPage: 1,
    lastPageReached: false,
    requestInProgress: false 
}

const searchFlickr = function (keywords) {
        if (state.lastPageReached || state.requestInProgress) return;

    console.log('searching for', keywords);

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
        console.log(info);
        
        if (info.photos.page >= info.photos.pages) {
            state.lastPageReached = true;
        };   
        state.requestInProgress = false;
    }); 
    };

    const showImages = function (results) {
        results.photos.photo.forEach(function (photo) {
            const thumbnailURL = generateURL(photo);
            console.log(thumbnailURL);
           // build a URL
           // create an image
           const $img = $('<img>', {src: thumbnailURL} );
           // set the src of the image to the URL
           // attach the image to the DOM
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
        '_t.jpg'
    ].join('');
};


$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault(); // disable the form from being submitted to a server.

        state.currentPage = 1;
        state.lastPageReached = false;
        $('images').empty();

        const searchTerm = $('#query').val();
        searchFlickr(searchTerm);
    });


    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 700) { // TODO: adjust the number to suit your taste.
            const searchTerm = $('#query').val();
            searchFlickr(searchTerm);
        }
    });
});