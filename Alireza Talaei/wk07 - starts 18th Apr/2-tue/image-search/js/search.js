const searchFlickr = function (keywords) {
    console.log(keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', //not to be confused with HTTP methods like POST
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1 // please don't be bored enough to read on this
    }).done(showImages).done(function (info) {
        console.log(info);
    }); 
};

const showImages = function(results) {
    pageNumber = results.photos.pages
    console.log('page number is: ', pageNumber);
    results.photos.photo.forEach(function (photo) {
        //build a URL
        const thumbnailURL = generateURL(photo);
        
        //create an image
        const $img = $('<img>', {src: thumbnailURL});
        // set the SRC of the image to the URL
        // attach the image to DOM
        $img.appendTo('#images'); //('#images').append('$img')
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
        '_q.jpg' // change q to sth else for different sizes (see docs)
    ].join('')
};


$(document).ready(function() {
    $('#search').on('submit', function (event) {
        event.preventDefault(); //disbale the form from being submitted to a aserver
        // get the query
        const searchTerm = $('#query').val();
        searchFlickr(searchTerm);
        //search flicker for that query
    });
    let pageCounter = 1;
    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 700 && pageCounter < pageNumber) { // TODO: adjust the number to suite your taste
            const searchTerm = $('#query').val();
            searchFlickr(searchTerm);
            pageCounter ++;
            console.log('page number is now:', pageCounter);
        }
    });
}); 