const searchFlickr = function (keywords, pageNumber) {
  console.log("Searching for", keywords);
  const flickrURL = "https://api.flickr.com/services/rest";
  $.getJSON(flickrURL, {
    method: "flickr.photos.search", // not to be confused with HTTP methods like POST
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: keywords,
    format: "json",
    nojsoncallback: 1,
    page: pageNumber,
  })
    .done(showImages)
    .done(function (info) {
      console.log(info);
    });
};

const showImages = function (results) {
  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);

    // const $img = $("<img>", { id: "image-thumbnails", src: thumbnailURL });
    const $img = $(
      `<a href=${thumbnailURL} target="_blank"><img src=${thumbnailURL} id="image-thumbnails"></a>`
    );
    $img.appendTo("#images");
  });
};

const generateURL = function (p) {
  return [
    "http://farm",
    p.farm,
    ".static.flickr.com/",
    p.server,
    "/",
    p.id,
    "_",
    p.secret,
    "_q.jpg",
  ].join("");
};

$(document).ready(function () {
  let pageNumber = 1;
  $("#search").on("submit", function (event) {
    event.preventDefault();
    $("#images").html("");

    const searchTerm = $("#query").val();
    searchFlickr(searchTerm, pageNumber);
  });

  let throttledScroll = _.throttle(function () {
    const scrollBottom =
      $(document).height() - $(window).height() - $(window).scrollTop();
    console.log(scrollBottom);
    if (scrollBottom < 600) {
      const searchTerm = $("#query").val();
      pageNumber++;
      searchFlickr(searchTerm, pageNumber);
    }
  }, 1000);

  $(window).on("scroll", throttledScroll);
});
