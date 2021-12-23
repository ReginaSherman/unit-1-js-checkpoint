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
 * Create a variable called firstName and assign it a string of your first name.
 * Create a variable called lastName and assign it a string of your last name.
 * Create a variable called full name and assign it your full name using the
 * firstName and lastName variables.
 */

const firstName = 'Regina';
const lastName = 'Sherman';
const fullName = `${firstName} ${lastName}`;

// console.log(fullName);

/*
 * Prompt 02:
 *
 * Create a variable called tongueTwister that holds the sentence "She sells sea shells by the sea
 * shore", but by adding one word to the string at a time.
 */

let tongueTwister = 'She ' + 'sells ' + 'sea ' + 'shells ' + 'by ' + 'the ' + 'sea ' + 'shore';
// console.log(tongueTwister);

/*
 * Prompt 03:
 *
 * Check if the string in the sentence variable includes the word 'fox'
 */

const sentence = 'The quick brown fox jumped over the lazy dog.';

// replace null with your own code
const includesFox = sentence.includes('fox');
// console.log(includesFox);

/*
 * Prompt 04:
 *
 * Use the .replace method to replace 'Andy Dwyer' with Leslie Knope to the leslie variable.
 */

const parksAndRec =
	'The best character on Parks and Rec is Andy Dwyer - hands down!';

const leslie = parksAndRec.replace('Andy Dwyer', 'Leslie Knope');
// console.log(leslie);

/*
 * Prompt 05:
 *
 * Create the string "eeny, meeny, miny, moe" by concatenating the strings
 * together using the concat method
 */
let eeny = 'eeny';
let meeny = 'meeny';
let miny = 'miny';
let moe = 'moe';

const newString = eeny + ', ' + meeny + ', ' + miny + ', ' + moe
// console.log(newString)

/*
 * Prompt 06:
 *
 * Split the string below into an array of individual characters.
 * i.e., console.log(charArray) // => ['G', 'o', 'o', 'd', ...]
 */

let toArray = 'Goodnight Moon';

const charArray = toArray.split('');
// console.log(charArray);

////////////////////////////////////////
// DO NOT MODIFY CODE BENEATH THIS LINE
////////////////////////////////////////
if (!this.window) {
	module.exports = {
		firstName,
		lastName,
		fullName,
		tongueTwister,
		sentence,
		includesFox,
		leslie,
		newString,
		toArray,
		charArray,
	};
}
