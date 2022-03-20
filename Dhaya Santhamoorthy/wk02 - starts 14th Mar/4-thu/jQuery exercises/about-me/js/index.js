
$(`body`).css("font-family", "Arial, sans-serif");
$(`#nickname`).html("Dhaya");
$(`#favorites`).html("Travelling");
$(`#hometown`).html("Chennai");
$(`li`).each(function() {
    $( this ).addClass("listitem");
});
$(`.listitem`).css("color", "red");
const $img = $(`<img>`);
$img.attr("src", "https://picsum.photos/500/300");       // detached DOM element
$(`body`).append($img);