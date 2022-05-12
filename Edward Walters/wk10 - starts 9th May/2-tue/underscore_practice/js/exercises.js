
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];


// ## Exercises

// - Iterate through ` numbers ` and log each number to the console
_(numbers).each(function(n) {
    console.log(n);
});

// - Iterate through ` numbers ` and multiply each one of them by 5

let newNumbers = _(numbers).map(function(num) {
    return num * 5; 
});
console.log(newNumbers);

// - Iterate through ` numbers ` and reduce it by adding them together
newNumbers = _(numbers).reduce(function(memo, num) {
    return memo + num;
});
console.log(newNumbers);

// - Get an array of all of the people in ` people ` that have the username "E"  NOT ASKING A QUESTION - USING EXISTING DATA
const eUsers = _(people).where({username: 'E'});
console.log(eUsers)

// - Find the first object in ` people ` that has the id of 3  NOT ASKING A QUESTION USING EXISTING DATA
const user3 = _(people).findWhere({id: 3});
console.log(user3);


// - Find the first person who has an age of less than 50   ASKING A QUESTION
const youngster = function(person) {
    return person.age < 50;
};

const youngPerson = _(people).find(youngster);
console.log(youngPerson);

// - Get an array of all of the people with an age of over 60

const seniors = _(people).filter(function(person) {
    return person.age > 60;
});
console.log(seniors);

// - Remove all of the people with an age less than 40

newPeople = _(people).reject(function(person) {
    return person.age < 40;
});
console.log(newPeople);

var words = [
    "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
  ]; // Random words from here... http://www.catb.org/jargon/html/go01.html


//   ## Exercises

// - Sort the ` people ` by 'uid'
newPeople = _(people).sortBy(function(person) {
    return person.id;
});
console.log(newPeople);

// - Group the random words by the lower case version of their first letter
let newWords = _(words).groupBy(function(word) {
    return word.slice(0,1).toLowerCase();
});
console.log(newWords);

// - Check to see if all the words have more than 3 characters
console.log(_(words).every(function(word) {
    return word.length >= 3;
}));

// - Check if some words are over twenty characters long
console.log(_(words).some(function(word) {
    return word.length >= 20;
}));

// - Get an array of all of the uids in ` people `
console.log(_(people).map(function(person) {
    return person.id;
}));

// - Find the person with the highest uid
console.log(_(people).max(function(person){
    return person.id;
}));

// - Return an object that says how many even numbers and how many odd numbers there are in ` numbers `
const evensOdds = {
    evens: _(numbers).filter((num) => num %2 === 0 ).length,
    odds: _(numbers).filter((num) => num %2 !== 0).length
};
console.log(evensOdds);

// - Get three random numbers out of ` numbers `
console.log(_.sample(numbers, 3));




// # Arrays!

// Log out the answers to all of the following questions!

// Here is some data that you can work with. 


var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];


// - Create an array of every five numbers between 30 and 101
console.log(_.range(30, 101, 5));

// - Turn ` bumpyArr ` into one flat array (no nested arrays)
console.log(_.flatten(bumpyArr));

// - Remove all of the falsey elements in the ` uncompactedArr `
console.log(_.compact(uncompactedArr));

// - Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `
const arr1 = [ 1, 25, 100 ];
const arr2 = [ 1, 14, 25 ];
const arr3 = [24, Infinity, -0];
console.log(_.union(arr1, arr2, arr3));

// - Find the index of the first element in ` numbers ` that is over 7 and is even

console.log(_.findIndex(numbers, (num) => (num > 7 && num %2 === 0)
));

// - Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined } `

console.log(_.object(arrToTransform[0], arrToTransform[1]));


// OBJECTS!

const objectToMap = {
    start:  100,
    middle: 853,
    end:    912
  };


//   - Multiply each value in ` objectToMap ` by a random number and return an object with the changed values
console.log(_.mapObject(objectToMap, (val, key) => {
    return val * _.random(500);
}));

//   - Get an array version of ` objectToMap ` that looks like this - ` [["start", 100], ["middle", 853], ["end", 912]] `
console.log(_.pairs(objectToMap));

//   - Flip ` objectToMap ` around so that it looks like this - ` { "100" : "start", "853" : "middle", "912" : "end" } `

console.log(_.pairs(_.invert(objectToMap)));

//   - Remove the "start" key from ` objectToMap ` in two different ways

console.log(_.omit(objectToMap, 'start'));
console.log(_.pick(objectToMap, 'middle', 'end'));





// UTILITIES, FUNCTIONS AND CHAINING

// Log out the answers to all of the following questions!

// Here is some data that you can work with. 


var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];


// - Log out 30 random numbers between 20 and 100
_.times(30, () => {
    console.log(_.random(20,100));
});

// - Create a function that can only ever be called once
const func = function () {
    console.log('I can only be called once')
};

const onlyCalledOnce = _.once(func);
onlyCalledOnce();
onlyCalledOnce();
onlyCalledOnce();

// - Append a paragraph tag to the body for every person in ` people `. It should end up looking something like this - ` <p> Hello A, you don't look a day over 20 </p> `

_.each(people, function (person) {
    $('body').append(`<p>Hello ${person.username}, you don't look a day over ${person.age}</p>`)
});

