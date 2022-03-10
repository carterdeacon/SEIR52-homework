//STRINGS
//DR EVIL
const DrEvil = function(amount)
{
    if (amount == 1000000)
    {
        return `${ amount } dollars (pinky)`;
    }
    else
    {
        return `${ amount } dollars`;
    }
}

console.log(DrEvil(10));

//MIXUP
const mixUp = function(string1, string2)
{ 
    let head1 = string1.slice(0, 2);
    let head2 = string2.slice(0, 2);
    let body1 = string1.slice(2);
    let body2 = string2.slice(2);
    let new1= head1.concat(body2);
    let new2= head2.concat(body1);

    return `${new2} ${new1}`
}
console.log(mixUp('mix', 'pod'));

//FIXSTART
const fixStart = function(string)
{
    if (string.length == 1)
    {
        return console.log("*");
    }
    else
    {
        let tempstr = string[0];
        //console.log("tempstr "+tempstr)
        let firstLetter = string[0];
        //console.log("firstlet "+tempstr)
        for (let i = 1; i<string.length; i++)
        {
            if (string[i] == firstLetter)
            {   
                //console.log('star '+string[i])
                tempstr += '*'
                //console.log(tempstr);
                
            }
            else
            {
                console.log('else '+string[i])
                tempstr += string[i]
                //console.log(tempstr);       
            }
            
        }
    return tempstr;
    }
}
console.log(fixStart("babble"));


//VERBING
const verbing = function(string)
{
    if (string.length >= 3)
    {
        let newstr = string;
        let last3 = string.slice(-3);
        //console.log(last3);
        if (last3 == "ing")
        {
            newstr += "ly";
            return newstr;
        }
        else
        {
            if (string.slice(-1).includes["a", "e", "i", "o", "u"])
            {
                return newstr;  
            }
            else
            {
                newstr+= string.slice(-1)
                newstr += "ing"
            }
            return newstr;
        }
    }
    else
    {
        return string;
    }
}
console.log(verbing('swimming'))

//NOT BAD

const notBad = function(string)
{
    let newstr = string;
    if (string.includes("not") && string.includes("bad") && (string.indexOf("bad") > string.indexOf("not")))
    {
        let indexNot = string.indexOf("not");
        let substring = string.substr(indexNot);
        //console.log(substring);
        newstr = newstr.replace(substring, "good!");
        return newstr
    }
    else if (string.includes("bad") && (string.includes("not") == false))
    {
        return string;
    }
    return string;
}
console.log(notBad('This dinner is bad!'));