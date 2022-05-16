const searchFlickr = function(keywords, page){
    const flickrURL = "https://api.flickr.com/services/rest";
    $.getJSON(flickrURL, {
        method: "flickr.photos.search",
        api_key: "2f5ac274ecfac5a455f38745704ad084",
        text: keywords,
        page: page,
        per_page: 50,
        format: 'json',
        nojsoncallback: 1
    }).done(showImages);

};
const generateURL = function(p){
    return[
        "http://farm",
        p.farm,
        ".static.flickr.com/",
        p.server,
        "/",
        p.id,
        "_",
        p.secret,
        "_q.jpg"
    ].join("");
};

const showImages = function(results) {
    results.photos.photo.forEach(function(photo){
        const thumbnailURL = generateURL(photo);
        const $img = $("<img>", {src: thumbnailURL});
        $img.appendTo("#images");

    })
}

$(document).ready(function(){
    let page = 1;
    $('#search').on("submit", function(event){
        event.preventDefault();
        const searchItem = $('#query').val();
        searchFlickr(searchItem, page);
    });
    
    const updatePage = function(){
        page += 1;
        const searchItem = $('#query').val();
        searchFlickr(searchItem, page);
    };

    const scrollBottom = $(document).height()-$(window).height()-$(window).scrollTop();

    $(window).on("scroll",_.throttle(function() {
        if (scrollBottom < 700){
           updatePage();
        };
    },2000, {leading: true, trailing: true}));



});

