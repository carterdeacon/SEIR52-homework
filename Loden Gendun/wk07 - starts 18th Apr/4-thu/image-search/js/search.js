let pageNum = 1;
let searchTerm;
const searchFlickr = function (keywords) {
    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, { 
        method: 'flickr.photos.search',
        page: pageNum,
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1 // please dont' be bored enough to read up on this
    }).done(showImages).done(function (info) {
        console.log(info);
    });
};

const showImages = function (results) {
    results.photos.photo.forEach(function(photo) {
        const thumbnailURL = generateURL(photo);
        $img = $('<img>', {src: thumbnailURL});
        $img.appendTo('#images');
    });
};

const generateURL = function(p) {
    const url = [
        'http://farm',
        p.farm,
        '.static.flickr.com./',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // change 'q' to something else for different sizes (see docs)
    ];
    return url.join('');
};

const scrollBottom = function() {
    return $(document).height() - $(window).height() - $(window).scrollTop()
};

$(document).ready(function() {
    $('#search').on('submit', function(event) {
        $('#images').empty();
        pageNum = 1;

        event.preventDefault(); // disable the form from being submitted to a server.
        
        searchTerm = $('#query').val();
        searchFlickr(searchTerm);     
    });
    
    $(window).on('scroll', _.throttle(function () {
        if (scrollBottom() < 700) {
            pageNum += 1;
            searchFlickr(searchTerm);
            console.log('near the bottom');
        };
    }, 500));
});
