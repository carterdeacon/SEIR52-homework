let pageNumber = 1;
let numPages = 0


const searchFlicker = function (keywords) {
    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: pageNumber,
        nojsoncallback: 1 // please don't be bored enough to read up on this
    }).done(showImages).done(pageNumbers).done(function (info){
        console.log(info);
    });
};

const pageNumbers = function (results) {
    numPages = results.photos.pages;
    // $('#images').after(`<a href="">${ numPages }</a>`);
};

const showImages = function (results) {
    results.photos.photo.forEach(function (photo){
        const thumbnailURL = generateURL(photo);
        const $img = $('<img>', {src: thumbnailURL});
        $img.appendTo('#images');
        // attach the image to the DOM
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
        '_q.jpg' // change 'q' to something else for different sizes (see docs)
    ].join('');
};

$(document).ready(function() {
    $('#search').on('submit', function (event) {
        event.preventDefault(); // disable the form from being submitted to a server.

        $('#images').empty();
        
        const searchTerm = $('#query').val();
        searchFlicker(searchTerm);

        $(window).on('scroll', function () {
            const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
            if (scrollBottom < 200) { // TODO: adjust the number to suit your taste.
                
                if (pageNumber < numPages) {
                    pageNumber += 1;
                    const searchTerm = $('#query').val();
                    searchFlicker(searchTerm);
                }
            };
        });
       
    });
});


// show images
// build a URL
// create an image
// set the src of the image to the URL
// attach the image to the DOM