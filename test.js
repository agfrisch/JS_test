console.log("Hello World");

console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}

function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

console.log(4 * 4);

let caught = 5 * 5;
console.log(caught);

let one = 1, two = 2;
console.log(one + two);

let a = "fourteen";
console.log(a.length);

let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

console.log(Math.max(2, 4));

let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
            theNumber * theNumber);
