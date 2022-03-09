//The calculator


//Part 1

const squareNumber = function (num) {
    const result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}`);
    return result;
};

const halfNumber = function (num) {
    const result = num / 2;
    console.log(`Half of ${num} is ${result}`);
    return result;
};

const percentOf = function (num1, num2) {
    const result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}`);
    return result;
};

const areaOfCircle = function (radius) {
    const area = Math.PI * radius * radius;
    const result = area.toFixed(2);
    console.log(`The area for a circle with radius of ${radius} is ${result}`);
    return result;
};


//Part 2
const calculations = function (num) {
    const result1 = halfNumber(num);
    const result2 = squareNumber(result1);
    const result3 = areaOfCircle(result2);
    const result4 = percentOf(result3, result1);
};

//Strings
//DrEvill

const DrEvill = function (num) {
    if (num === 1000000) {
        console.log(`${num} dollars (pinky)`);
    }
    else {
        console.log(`${num} dollars`);
    }
};

//MixUp

const mixUp = function (word1, word2) {
    const st1 = word1.slice(0,1);
    const st2 = word2.slice(0,1);
    const part1 = word1.slice(1);
    const part2 = word2.slice(1);
    console.log(`${st2}${part1} ${st1}${part2}`);
};


//FixStart


//Verbing
const verbing = function (st) {
    const stLength = st.length;
    if (stLength > 3) {
        const end = st.slice(stLength - 3, stLength);
        if ( end === "ing") {
        console.log(`${st}ly`);
        }
        else {
        console.log(`${st}ing`) 
        }    
    }
    else {
        console.log(st);
    }
};


// Not Bad
const notBad = function (st) {
   if (st.includes("not") && st.includes("bad")) {
       const newSt = st.replace("not bad", "good");
       console.log(newSt);
   }
   else {
       console.log(st);
   }
}


