const searchFlickr = function(keywords, page) {
    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1, // please don't be bored enough to read up on this
        page: page 
    }).done(showImages);
};

const showImages = function(results) {
    console.log(results)
    results.photos.photo.forEach(function(photo) {
        const thumbnailURL = generateURL(photo);
        const $img = $('<img>', {src: thumbnailURL});
        $img.appendTo('#images');
    });
};

const generateURL = function(p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_m.jpg' // change 'q' to something else for different sizes (see docs)
    ].join('');
};

let page = 1
let timeoutId = -1;

$(document).ready(function() {
    $('#search').on('submit', function(event) {
        event.preventDefault(); // disable the form being submitted to a server
        if ($('img').length > 0) {
            $('img').remove();
        };
        const searchTerm = $('#query').val();
        page = 1
        searchFlickr(searchTerm, page);
    });

    $(window).on('scroll', function() {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 700) { // TODO: adjust the number to suit your taste
            const searchTerm = $('#query').val();
            clearTimeout(timeoutId)
            timeoutId = setTimeout(function() {
                page++
                searchFlickr(searchTerm, page)
            }, 600)
        };
        console.log(scrollBottom)
    });
});