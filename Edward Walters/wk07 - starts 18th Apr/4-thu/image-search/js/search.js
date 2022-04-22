const defaultSearchTerm = "Dogs";
let totalPages;
let pageNum = 1;

const searchFlickr = function (keywords) {

    const flickrURL = 'https://api.flickr.com/services/rest';
    
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: pageNum,
        nojsoncallback: 1 
    }).done(showImages).done(function (info) {
        const page = info.photos.page;
        totalPages = info.photos.pages;
    });
};

const showImages = function (results) {
    results.photos.photo.forEach(function (photo) {
       
        const thumbnailURL = generateURL(photo);
        if (!thumbnailURL.includes('farm0')) {
            const html = `<a href="https://www.flickr.com/photos/${ photo.owner }/${ photo.id }/" target="_blank"><img src="${ thumbnailURL }"></a>`
            $('#images').append(html);
        };
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
        '_q.jpg' // change q for different sized images - see docs
    ].join('');
};

const requestMoreImages = function() {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 2000) {
        if (pageNum < totalPages) {
            pageNum += 1;
            const searchTerm = $('#query').val();
            searchFlickr(searchTerm);
        };  
    };
};

const throttled = _.throttle(requestMoreImages, 2000);

$(document).ready(function () {
    searchFlickr(defaultSearchTerm);
    
    $('#query').attr("value", defaultSearchTerm);
    
    $('#search').on('submit', function (event) {
        event.preventDefault();
        pageNum = 1;
        $('#images').html("");

        const searchTerm = $('#query').val();
        searchFlickr(searchTerm);
    });

    $(window).on('scroll', throttled);

});

