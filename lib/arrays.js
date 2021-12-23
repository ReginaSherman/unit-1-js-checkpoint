/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your console.logs for a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create an array called people that contains three names in it.
 */
const people = ['Judy', 'Tim', 'Nathan'];
/*
 * Prompt 02:
 *
 * Create an array called countries that contains four countries in it.
 */
const countries = ['Belgium', 'France', 'Spain', 'Italy'];
/*
 * Prompt 03:
 *
 * Create an array called cities that contains five cities in it.
 */
const cities = ['Dallas', 'Tampa', 'Portland', 'New York', 'Atlanta'];
/*
 * Prompt 04:
 *
 * Create an empty array called favoriteNumbers. On a separate line for each,
 * add a number to the favoriteNumbers array so there are 4 numbers in it.
 */
const favoriteNumbers = [];
// add to the favoriteNumbers array below this line!
favoriteNumbers[0] = 4;
favoriteNumbers[1] = 6;
favoriteNumbers[2] = 18;
favoriteNumbers[3] = 24;
// console.log(favoriteNumbers);

/*
 * Prompt 05:
 *
 * Create an empty array called actors. On a separate line for each, add an
 * actor to the actors array so there are 5 actors in it.
 */

const actors = [];
// add to the actors array below this line!
actors[0] = 'Joseph Gordon-Levitt';
actors[1] = 'Tom Hardy';
actors[2] = 'Sandra Bullock';
actors[3] = 'Jennifer Aniston';
actors[4] = 'Reese Witherspoon';
// console.log(actors);


/*
 * Prompt 06:
 *
 * Create an array called sesameStreetCharacters with "Elmo", "Big Bird",
 * "Cookie Monster", "Ernie", and "Bert" in it. On a separate line for each,
 * remove the last 3 elements from the array.
 */

const sesameStreetCharacters = ['Elmo', 'Big Bird', 'Cookie Monster', 'Ernie', 'Bert'];
sesameStreetCharacters.pop();
sesameStreetCharacters.pop();
sesameStreetCharacters.pop();

// console.log(sesameStreetCharacters);

/*
 * Prompt 07:
 *
 * Create an array called starWarsCharacters with "Luke", "Leia", "Han",
 * "R2-D2", "Chewbacca", and "C-3PO" in it. Create a variable called han and
 * assign it the string "Han" from the array (i.e. retrieve it from the array).
 * Do the same for luke, leia, and chewbacca.
 */

const starWarsCharacters = ['Luke', 'Leia', 'Han', 'R2-D2', 'Chewbacca', 'C-3PO'];

const han = starWarsCharacters[2];
const luke = starWarsCharacters[0];
const leia = starWarsCharacters[1];
const chewbacca = starWarsCharacters[4];

// console.log(han, luke, leia, chewbacca);

/*
 * Prompt 08:
 *
 * Create an array called jerseyShore with "JWoww", "The Situation", "DJ Pauly
 * D", "Snookie", and "Sweetheart" in it. On separate lines for each, remove
 * "Snookie" and "DJ Pauly D"
 */

const jerseyShore = ['JWoww', 'The Situation', 'DJ Pauly D', 'Snookie', 'Sweetheart'];
// remove elements below this line!
let pos = 2
jerseyShore.splice(pos, 1);
jerseyShore.splice(pos, 1);

// console.log(jerseyShore);

/*
 * Prompt 09:
 *
 * Create an array called months with all 12 months as strings in it (i.e.
 * "January", "February", "March", etc). In a single line, delete "September",
 * "October", and "November".
 */
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let index = 7;
months.splice(8, 3);

// console.log(months);

/*
 * Prompt 10:
 *
 * Create an empty array called randomNumbers. Write a for loop to add
 * 4 random numbers between 1 and 100 to the randomNumbers array using Math.random(), Math.floor() and push.
 */

const randomNumbers = [];
//  write your for loop here!
for (let i = 0; i < 4; i++) {
	randomNumbers.push(Math.floor(Math.random() * 100))
}
// console.log(randomNumbers);

/*
 * Prompt 11:
 *
 * Create an array name foods and add 10 foods to it. Create another array
 * called favoriteFoods but leave it empty. Create an array that loops through
 * the foods array and adds the current item to the favoriteFoods array if the
 * string is longer than 6 characters (i.e. string.length > 6).
 * Use either an for loop or an array method like .filter().
 */

const foods = ['tacos', 'spaghetti', 'ice cream', 'sushi', 'mashed potatoes', 'french fries', 'fried chicken', 'steak', 'shrimp', 'salmon'];

const favoriteFoods = []; 
favoriteFoods.push(foods.filter (food => food.length > 6));

// console.log(favoriteFoods)

//////////////////////////////////////////////////
// DO NOT MODIFY CODE BENEATH THIS LINE
//////////////////////////////////////////////////
if (!this.window) {
	module.exports = {
		people,
		countries,
		cities,
		favoriteNumbers,
		actors,
		sesameStreetCharacters,
		starWarsCharacters,
		han,
		leia,
		luke,
		chewbacca,
		jerseyShore,
		months,
		randomNumbers,
		foods,
		favoriteFoods,
	};
}
