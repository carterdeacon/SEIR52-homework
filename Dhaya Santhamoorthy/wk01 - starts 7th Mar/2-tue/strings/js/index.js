console.log("The console is ready for your commands!");

const drEvil =  function(amount){
    if (amount === 1000000){
        console.log(`${amount} dollars (pinky)`);
    } else {
        console.log(`${amount} dollars`);
    }
}

drEvil(1000000);
drEvil(9821);

const mixUp = function(word1, word2){
    let finalWord1 =  word2.slice(0, 2).concat(word1.slice(2));
    let finalWord2 = word1.slice(0,2).concat(word2.slice(2));
    console.log(`${finalWord1} ${finalWord2}`);
}

mixUp('mix', 'pod');
mixUp('zark', 'tunner');

const fixStart = function(word){    
    let firstLetter = word.charAt(0);
    let restOfWord = word.slice(1);
    let fixedRestOfWord = restOfWord.replaceAll(firstLetter,"*");
    let result = firstLetter.concat(fixedRestOfWord);
    console.log(result);
}

fixStart("azapppaaar");

const fixStart1 = function(word){    
    let resultArray = word.split("");
    for (let i = 0; i < resultArray.length; i++){
        if(i !==0){
            if(resultArray[i] === resultArray[0]){
                resultArray[i] = "*";
            }
        }
    }
    let resultWord = resultArray.join("");    
    console.log(resultWord);
}

fixStart1("babble");
fixStart1("abracadabra");


const verbing = function (word){
    let result = "";
    if (word.length >= 3){
        if (word.slice(-3) === "ing") {
            result = word.concat("ly");
        } else {
            result = word.concat("ing");
        }        
    } else {
        result = word;
    }
    console.log(result);
}

verbing('swim');
verbing('swimming');
verbing('go');
verbing("flying");


const notBad = function (sentence) {   
    let indexOfNot = sentence.indexOf("not");
    let indexOfBad = sentence.indexOf("bad");
    let result = "";
    if (sentence.includes("not") && sentence.includes("bad")){
        if (indexOfNot < indexOfBad){
            let stringToBeKept1 = sentence.substring(0, indexOfNot);
            let stringToBeKept2 = sentence.substring(indexOfBad+3);
            result = stringToBeKept1.concat("good").concat(stringToBeKept2);            
        } else {
            result = sentence;
        }
    } else {
        result = sentence;
    }
    console.log(result);    
}

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');