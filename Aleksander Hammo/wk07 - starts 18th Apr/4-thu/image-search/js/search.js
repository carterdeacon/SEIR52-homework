const searchFlickr = function (keywords) {

    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, { //every API has their own way of dealing with methods
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format:'json',
        nojsoncallback: 1
    }).done(showImages).done(function (info) {
        console.log(info)
    });
};

const showImages = function (results) {
    results.photos.photo.forEach(function (photo) {
        const thumbnailURL = generateURL(photo);
        const $img = $('<img>', {src: thumbnailURL});
        $img.appendTo('#images'); //
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
        '_q.jpg' // q gives you image of a particular size -- can change q to o or whatever to change the size of the image
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault(); //disable the form from being submitted to a server -- this will keep us on the same page
        
        //get the query
        const searchTerm = $('#query').val();

        //search for query
        searchFlickr(searchTerm);

    });

    $(window).on('scroll', function () { // this will hammer the API with requests every time we scroll
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 700 ) {
            const searchTerm = $('#query').val();
            searchFlickr(searchTerm);
        }
    }); 
});