/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create a loop that prints each number from 0 to 10.
 */

function prompt01() {
	//  your code here
	for (let i = 0; i <= 10; i++) {
		console.log(i);
	}
}
// console.log(prompt01());

/*
 * Prompt 02:
 *
 * Create a loop that prints each number from 10 to 0 (inclusive).
 */

function prompt02() {
	// your code here
	for (let i = 10; i >= 0; i--) {
		console.log(i);
	}
}
// console.log(prompt02());

/*
 * Prompt 03:
 *
 * Create a loop that prints out the even numbers between 0 and 50 (non-inclusive).
 */

function prompt03() {
	//  your code here
	for (let i = 0; i < 50; i+=2) {
		console.log(i);
	}
}
// console.log(prompt03());

/*
 * Prompt 04:
 *
 * Create a loop that prints out the odd numbers between 50 and 0 (non-inclusive)
 */

function prompt04() { 
	//  your code here
	for (let i = 49; i >= 1; i-=2) {
		 console.log(i);
	}
}
// console.log(prompt04());

/*
 * Prompt 05:
 *
 * Print out the numbers between 50 and 100 (non-inclusive).
 */

function prompt05() {
	//  your code here
	for (let i = 51; i < 100; i++) {
		console.log(i);
	}
}
// console.log(prompt05());

/*
 * Prompt 06:
 *
 * Create an array with the members of the ninja turtles (Donatello, Leonardo,
 * Raphael, Michelangelo).  Use a for loop to call toUpperCase() on each of
 * them and print out the result.
 */

let ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michelangelo'];
function prompt06() {
	//  your code here
	let capitalNames = [];
	for (let i = 0; i < ninjaTurtles.length; i++) {
		capitalNames[i] = ninjaTurtles[i].toUpperCase();
	}
	console.log(capitalNames);
}
// console.log(prompt06());
/*
 * Prompt 07:
 *
 * Write a for loop that prints the numbers in the following array in order
 */
const twoDArray1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

function prompt07() {
	// your code here
	for (let i = 0; i < twoDArray1.length; i++) {
		for (let j=0; j < twoDArray1.length; j++) {
			console.log(twoDArray1[i][j]);
		}
	}
}
// console.log(prompt07())

/*
 * Prompt 08:
 *
 * Write a for loop that prints the numbers in the following array in order
 */
const twoDArray = [
	[9, 8, 7],
	[6, 5, 4],
	[3, 2, 1],
];

function prompt08() {
	// your code here
	for (let i = twoDArray.length - 1; i >= 0; i--) {
		for (let j = twoDArray.length - 1; j >= 0; j--) {
			console.log(twoDArray[i][j]);
		}
	}
}
// console.log(prompt08()); 
////////////////////////////////////////
// DO NOT MODIFY CODE BENEATH THIS LINE
////////////////////////////////////////
if (!this.window) {
	module.exports = {
		prompt01,
		prompt02,
		prompt03,
		prompt04,
		prompt05,
		prompt06,
		prompt07,
		prompt08,
	};
}
