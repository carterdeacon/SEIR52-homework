// const button = document.getElementById("lib-button");
// const makeMadlib= function () {
//    const noun = document.getElementById("noun").value;
//    const adjective = document.getElementById("adjective").value;
//    const SomeoneName =document.getElementById("person").value;
   
//    const story = `${SomeoneName} really likes ${adjective} ${ noun}`;
//    document.getElementById("story").innerHTML = story;
// }
// button.addEventListener("click", makeMadlib)



// const hey = function () {
//     console.log("hey", Math.random());
// }



const makeMadLib = function () {
    const noun = $("#noun").val();
    const adjective = $("#adjective").val();
    const name = $("#person").val();
    const story = `${name} really likes ${adjective} ${noun}.`;
    $("#story").prepend(story);
}


$("#lib-button").on("click", makeMadLib);