// const squareButton = document.getElementById("square-button");
// const halfButton = document.getElementById("half-button");
// const percent = document.getElementById("percent-button");
// const area = document.getElementById("area-button");

// const squareNum = function(event){
//     let squareNum = document.getElementById("square-input").value;
//     let square = squareNum ** 2;
//     let div = document.getElementById("solution");
//     div.innerHTML = `The square of ${squareNum} is ${square}!`;
// }
// const halfNum = function(event){
//     let halfNum = document.getElementById("half-input").value;
//     let half = halfNum / 2;
//     let div = document.getElementById("solution");
//     div.innerHTML = `Half of ${halfNum} is ${half}!`;
// }
// const percentNum = function(event){
//     let fractionNum = document.getElementById("percent1-input").value;
//     let wholeNum = document.getElementById("percent2-input").value;
//     let percent = fractionNum/wholeNum * 100;
//     let div = document.getElementById("solution");
//     div.innerHTML = `${fractionNum} is ${percent}% of ${wholeNum}!`;
// }
// const areaNum = function(event){
//     let radius = document.getElementById("area-input").value;
//     let area = Math.PI * radius ** 2
//     let div = document.getElementById("solution");
//     div.innerHTML = `The area of a circle of radius ${radius} is ${area}!`;
// }
// squareButton.addEventListener('click', squareNum);
// halfButton.addEventListener('click', halfNum);
// percent.addEventListener('click', percentNum);
// area.addEventListener('click', areaNum);

$('#square-button').on('click', function(){
    let squareNum = $('#square-input').val()
    $('#solution').html(`The Square of ${squareNum} is ${squareNum ** 2}`)
})

$('#half-button').on('click', function(){
    let halfNum = $('#half-input').val()
    $('#solution').html(`Half of ${halfNum} is ${halfNum/2}`)
})

$('#percent-button').on('click', function(){
    let fractionNum = $('#percent1-input').val()
    let wholeNum = $('#percent2-input').val()
    let percent = fractionNum/wholeNum * 100;
    $('#solution').html(`${fractionNum} is ${percent} of ${wholeNum}`)
})

$('#area-button').on('click', function(){
    let radius = $('#area-input').val()
    let area = Math.PI * radius ** 2
    $('#solution').html(`The area of a circle of radius ${radius} is ${area}`)
})