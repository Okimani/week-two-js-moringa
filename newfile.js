// Learning Javascript Moringa

console.log('hello world');
console.log(1*3);
console.log(9/2);
console.log(7+8*9);
console.log((7+8)*9);

// Add 
console.log(89*54);
console.log(932*1900);
console.log(-34*8);
console.log(25*700);

// Substract
console.log(665-99);

//Multiple
console.log(89*54);

// Divide
console.log(1008/7);

//modulus

console.log(1008%7);
console.log(90%3);

//Variables
var myNumber =3;
console.log(myNumber);

// do math 
myNumber + 5;
console.log(myNumber);

myNumber =myNumber +8;

console.log(myNumber);

var firstNumber =5;
var secondNumber =10;
var thirdNumber = firstNumber * secondNumber;
console.log(thirdNumber);

//Declare variable using let
 let fourthNumber = 70;
 console.log(fourthNumber);
 
 //variables declared using const are immutable
 const fifthNumber = 13;
 //fifthNumber = 2;  //This will throw an error 

 //variables naming conventions
 // begin with a letter, first letter lower case, case-sensitive, use clear names 


 //Practice variables
 var someName = 'Oscar'
 console.log(someName);

 someName = 'Michael'
 console.log(someName);

favoriteNumber = 18;
 let dividefavouriteNumber = (favoriteNumber / 2); //divide favorite number by two
 console.log(dividefavouriteNumber);

 let michaelsFavorite = 13;
michaelsFavorite = 7;
console.log(michaelsFavorite);

// Substract my favourite number from michaels favourite number

let newNumber = michaelsFavorite - favoriteNumber;
console.log(newNumber);

//Change the value of Michael's favorite number to be 26 times its current value

let michaelnewNumber = (michaelsFavorite * 26 );
console.log(michaelnewNumber);

// working with strings .... having strings with quotation marks

let myString = "Someone once told me, \"Any sufficiently advanced technology is indistinguishable from magic.\""
console.log(myString);

let someString = "My favourite  quote is, \"You have to believe in the power of your dreams\". I think that is a powerful statement."
console.log(someString);

const greeting = 'Good morning'
const favColor = 'Blue'
console.log(favColor) ;

const addString = 9 + '9';
console.log(addString);
console.log(typeof addString);

// METHODS
console.log("Hello from the JavaScript console!");
console.log(737.255342.toFixed(2)); //You can specify to what decimal point
const decimalNumber = 737.255342.toFixed();
console.log(typeof decimalNumber);

// to exponential method
const expNumber = 98.4.toExponential();
console.log(expNumber);
// to string method does not convert to string but simply returns a string
var two =2;
console.log(typeof two);
const twostring = two.toString();
console.log(typeof twostring);

const words = 'example ' + 'here';
console.log(words.toUpperCase());

// For loops
let languages =['HTML', 'CSS', 'JAVASCRIPT', 'JAVA', 'PYTHON'];
languages.forEach(function(language) {
    console.log(language);
});

let cars = ['nissan', 'honda', 'bmw', 'subaru', 'mazda', 'vw'];
cars.forEach(function(car){
    console.log(car);
});

let subjects =['English', 'Math', 'Kiswahili','Geography'];
subjects.forEach(function(subject) {
    console.log(subject);
});

//
let total = 0;
let summands = [1, 2, 3, 4, 5];
summands.forEach(summand => total += summand);
    console.log(total);  // 15

/* Functions //prompt
let code=  prompt("Are you ready to code?").toUpperCase(); // I'm going to type "yes!"
"YES!"
console.log(code);
Confirm button
 confirm("Would you like to continue?"); // I am going to press the OK button
true
*/

//converting string to integer on input
/*
let age =prompt('Enter your age:');
let agen =parseInt(age);
console.log(agen + agen); 

//alernatively you parse before the prompt
let newAge =parseInt(prompt('Enter your age;'));
console.log(newAge+newAge);
*/

//functions 
/*
function makeNoise() {
    alert("meow!");
}

makeNoise();

// function with an argument 
function noise(animalSound){
alert(animalSound);
}

noise('woof');

// more function examples
function Substract (firstNumber, secondNumber) {
return firstNumber - secondNumber;
}

console.log(Substract(10,7));

//use variables in functions 
function multiply (number1, number2){
return number1 * number2;
}

let five =5;
let four =4;

console.log(multiply(five, four));
// arrow functions if a single statement ypu dont need the curly braces
let cost = (price1, price2) => price1 * price2;
console.log(cost(5,5));

// function with more than one statement
let divide = (x, y) => {

    if (y!=0){
        return x/y;
    }
}

console.log(divide(49,7));

var saySomething = whatToSay => alert(whatToSay);
*/

/*
let greetings = prompt ('What is your name?');
alert('Good morning ' + greetings +'!');
*/

//let substractfunction =(num1, num2) => num1 -num2;
//alert('The answer is ' + substractfunction(20,5));

// take two numbers via prompt, add them up and display answer
/*
let answers = (mynum1, mynum2) => mynum1 + mynum2;
let mynum1 =parseInt(prompt('Enter the first number'));
let mynum2 =parseInt(prompt('Enter the second number'));
alert('The answer is ' + answers(mynum1,mynum2));
*/

//function to multiply numbers 
let multiplyfunction = (firstN, secondN) => firstN * secondN;
console.log(multiplyfunction(2,7));

let threeTimes = (first, second, third) => first * second * third;
console.log(threeTimes(2,2,2));
