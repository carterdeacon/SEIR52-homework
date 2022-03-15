//Homework Thursday 10th March Joseph Hu

//Part 1 Geometry Lab

const rectangleA = {
    length: 5,
    width: 4
};

const isSquare = function(rectangle){
    if (rectangle.length == rectangle.width){
        return 'rectangle is a square'
    }
    else{
        return 'rectangle is not a square'
    }

}

const area = function(rectangle){
    
    let Area = rectangle.length * rectangle.width;
    return Area
}

const perimeter = function(rectangle){
    
    let perimeter = 2 * rectangle.length + 2 * rectangle.width;
    return perimeter;
}

//console.log(isSquare(rectangleA));
//console.log(area(rectangleA));
//console.log(perimeter(rectangleA));

//Part 2 Geometry Lab

const triangleA = {
    sideA: 4,
    sideB: 5,
    sideC: 10
}

const isEquilateral = function (triangle){

    if (triangle.sideA == triangle.sideB && triangle.sideB == triangle.sideC){
        return 'Triangle is equilateral'
    }
    else{
        return 'Triangle is not eqilateral'
    }
}

const isIsosceles = function(triangle){
    if (triangle.sideA == triangle.sideB || triangle.sideA == triangle.sideC || triangle.sideB == triangle.sideC){
        return 'Triangle is an Isosceles Triangle'
    }
    else{
        return "Triangle is not an Isosceles Triangle"
    }
}


const Areatri = function (triangle){

    let sides = Object.values(triangle);
    let perimeter = 0;

    for (i=0; i<sides.length; i++)
    {
        let side = sides[i]

        perimeter += side;
    }

    let S = perimeter / 2

    Area = Math.sqrt(S*(S-triangle.sideA) * (S-triangle.sideB) * (S-triangle.sideC))

    return Area;
}


const isObtuse = function (triangle){
    
    let sides = Object.values(triangle);
    //console.log(sides);
    let longestside = Math.max.apply(Math, sides)
    //console.log(longestside);
    let index = sides.indexOf(longestside);
    //console.log(index);
    sides.splice(index,1);
    //console.log(sides);
    
    if ((sides[0]+sides[1]) <= longestside){
        return "not a triangle"
    }
    else if ((longestside ** 2) > ((sides[0]**2) + (sides[1]**2))){
        return "triangle is obtuse"
    }
    else{
        return "triangle is not obtuse"
    }
}

//console.log(isIsosceles(triangleA));
//console.log(Areatri(triangleA));
//console.log(isEquilateral(triangleA));
//console.log(isObtuse(triangleA));

const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };

const cashRegister = function(cart){

    let prices = Object.values(cart);

    let Total = 0.00;

    for (i = 0; i < prices.length; i++){

        let floatprice = parseFloat(prices[i])

        Total += floatprice;
    }

    return Total;
}
//console.log(cashRegister(cartForParty));

const validateCreditCard = function(cardnum){

    let noHyphen = cardnum.replaceAll('-', '');
    //console.log(noHyphen);
    
    let temparr = []

    let counter = 0

    if (noHyphen.length < 16){
        //console.log(noHyphen.length);
        return false;
    }
    else if (noHyphen[noHyphen.length-1] % 2 != 0){
        //console.log(noHyphen[noHyphen.length-1]);
        return false;
    }

    for (i = 0; i < noHyphen.length; i++){

        let nonstr = parseInt(noHyphen[i]);

        if (Number.isNaN(nonstr) == false){

            //console.log(parseInt(noHyphen[i]));

            counter+=parseInt(noHyphen[i])

            if (temparr.includes(noHyphen[i]) == false){
                temparr.push(noHyphen[i]);
            }
        }
        else{
            //console.log('hi')
            return false;
        }
    }

    if (temparr.length == 1){
        //console.log(temparr)
        return false;
    }
    else if (counter < 16){
        //console.log(counter);
        return false;
    }
    else{
        return true;
    }
}

console.log(validateCreditCard('6666-6666-6666-6661'));