//JavaScript Basic Problem Solving 1 starts here.

//Problem 1: Create a variable called carName, assign the value Volvo to it.
let carName = 'Volvo';

//Problem 2: On one single line, declare three variables with the following names and values:
let firstName = 'John', lastName = 'Doe',  age = 35;

//Problem 3: Use the correct assignment operator that will result in x being 50 (same as x = x * y).
let x = 10;
let y = 5;
x = x * y;

{//Problem 4: Use comments to describe the correct data type of the following variables:
let length = 16; //Data type is: number

let lastName = 'Johnson'; //Data type is: string

const x = {
    firstName: 'John',
    lastName: 'Doe'
} //Data type is: object
} // I had to put this in {} for there are another variables with the same name.

//Problem 5: Execute the function named myFunction.
function myFunction() {
    alert('Hello World!');
}
myFunction() //this will show an alert box with the text of Hello World! in the browser.

//Problem 6: Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
const person = {
    name: 'John',
    age: 50
};
alert(person.name + ' ' + 'is' + ' ' + person.age);

//Problem 7: The <button> element should do something when someone clicks on it. Try to fix it!
let btn = document.getElementById('btn');
let p = document.getElementById('demo');
btn.addEventListener('click', function(){
    p.innerHTML = new Date();
});

//Problem 8: Array Related Question 
//1. Alert the number of items in an array, using the correct Array property: 
const cars = ['Volvo', 'Jeep', 'Mercedes'];
alert(cars.length);

//2. Change the first item of Brand to "Ford".
const Brand = ['Volvo', 'Jeep', 'Mercedes'];
Brand[0] = 'Ford';

//Problem 9: Math Related Problems
//1. Use the correct Math method to create a random number.
let randomNum = Math.random();

//2. Use the correct Math method to return the largest number of 10 and 20.
let largestNum = Math.max(10, 20);

//3. Use the correct Math method to get the square root of 9.
let squareRoot = Math.sqrt(9);

{//Problem 10: comparison operator related problems! 
//1. Choose the correct comparison operator to alert true, when x is greater than y.
let x = 10;
let y = 5;
alert(x > y);

//2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age = 18;
alert(age < 18 ? 'Too young' : 'Old enough');
} //The reason for using {} is there are another variables with the same name.

//JavaScript Basic Problem Solving 1 ends here.