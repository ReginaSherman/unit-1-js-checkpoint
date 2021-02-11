const expect = require('chai').expect;

const {
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
} = require('../lib/arrays');

const {
	numBelow10,
	numBelow100,
	age,
	prompt1,
	prompt2,
	prompt3,
} = require('../lib/conditionals');

describe('arrays.js', () => {
	it('Prompt 01: people should be an array that contains three string elements', () => {
		expect(people).to.be.an('array');
		expect(people.length).to.equal(3);
		people.forEach((person) => {
			expect(person).to.be.a('string');
		});
	});

	it('Prompt 02: country should be an array that contains four string elements', () => {
		expect(countries).to.be.an('array');
		expect(countries.length).to.equal(4);
		countries.forEach((country) => {
			expect(country).to.be.a('string');
		});
	});

	it('Prompt 03: cities should be an array that contains five string elements', () => {
		expect(cities).to.be.an('array');
		expect(cities.length).to.equal(5);
		cities.forEach((city) => {
			expect(city).to.be.a('string');
		});
	});

	it('Prompt 04: favoriteNumbers should be an array that contains four number elements', () => {
		expect(favoriteNumbers).to.be.an('array');
		expect(favoriteNumbers.length).to.equal(4);
		favoriteNumbers.forEach((num) => {
			expect(num).to.be.a('number');
		});
	});

	it('Prompt 05: actors should be an array that contains five string elements', () => {
		expect(actors).to.be.an('array');
		expect(actors.length).to.equal(5);
		actors.forEach((actor) => {
			expect(actor).to.be.a('string');
		});
	});

	it('Prompt 06: sesameStreetCharacters should be an array that contains two string elements', () => {
		expect(sesameStreetCharacters).to.be.an('array');
		expect(sesameStreetCharacters.length).to.equal(2);
		sesameStreetCharacters.forEach((char) => {
			expect(char).to.be.a('string');
		});
		expect(sesameStreetCharacters.includes('Elmo')).to.equal(true);
		expect(sesameStreetCharacters.includes('Big Bird')).to.equal(true);
		expect(sesameStreetCharacters.includes('Bert')).to.equal(false);
		expect(sesameStreetCharacters.includes('Ernie')).to.equal(false);
		expect(sesameStreetCharacters.includes('Cookie Monster')).to.equal(false);
	});

	it('Prompt 07: starwarsCharacters should be an array and character names should match its values', () => {
		expect(starWarsCharacters).to.be.an('array');
		expect(starWarsCharacters.length).to.equal(6);
		starWarsCharacters.forEach((char) => {
			expect(char).to.be.a('string');
		});
		expect(han).to.equal('Han');
		expect(luke).to.equal('Luke');
		expect(leia).to.equal('Leia');
		expect(chewbacca).to.equal('Chewbacca');
	});

	it('Prompt 08: jerseyShore should be an array with three string elements', () => {
		expect(jerseyShore).to.be.an('array');
		expect(jerseyShore.length).to.equal(3);
		jerseyShore.forEach((char) => {
			expect(char).to.be.a('string');
		});
		expect(jerseyShore.includes('JWoww')).to.equal(true);
		expect(jerseyShore.includes('The Situation')).to.equal(true);
		expect(jerseyShore.includes('DJ Pauly D')).to.equal(false);
		expect(jerseyShore.includes('Snookie')).to.equal(false);
		expect(jerseyShore.includes('Sweetheart')).to.equal(true);
	});

	it('Prompt 09: months should be an array with all months except Sept, Oct, and Nov', () => {
		expect(months).to.be.an('array');
		expect(months.length).to.equal(9);
		months.forEach((month) => {
			expect(month).to.be.a('string');
		});
		expect(months.includes('January')).to.equal(true);
		expect(months.includes('February')).to.equal(true);
		expect(months.includes('March')).to.equal(true);
		expect(months.includes('April')).to.equal(true);
		expect(months.includes('May')).to.equal(true);
		expect(months.includes('June')).to.equal(true);
		expect(months.includes('July')).to.equal(true);
		expect(months.includes('August')).to.equal(true);
		expect(months.includes('September')).to.equal(false);
		expect(months.includes('October')).to.equal(false);
		expect(months.includes('November')).to.equal(false);
		expect(months.includes('December')).to.equal(true);
	});

	it('Prompt 10: randomNumbers should be an array with three number elements', () => {
		expect(randomNumbers).to.be.an('array');
		expect(randomNumbers.length).to.equal(4);
		randomNumbers.forEach((num) => {
			expect(num).to.be.a('number');
		});
	});

	it('Prompt 11: foods should be an array with ten string elements, and favoriteFoods should contain the food elements longer than 6 characters', () => {
		expect(foods).to.be.an('array');
		expect(foods.length).to.equal(10);
		foods.forEach((food) => {
			expect(food).to.be.a('string');
		});
		expect(foods.filter((food) => food.length > 6)).to.deep.equal(
			favoriteFoods
		);
	});
});

describe('conditionals.js', () => {
	it('Prompt 01: numBelow100 should be a number', () => {
		expect(numBelow100).to.be.a('number');
		if (numBelow100 > 50) {
			expect(prompt1()).to.be.a('string').that.equals("That's a big number!");
		}
	});

	it('Prompt 02: numBelow10 should be a number', () => {
		expect(numBelow10).to.be.a('number');
		if (numBelow10 < 5) {
			expect(prompt2()).to.be.a('string').that.equals('small number');
		} else if (numBelow10 > 5) {
			expect(prompt2()).to.be.a('string').that.equals('big number');
		} else {
			expect(prompt2()).to.be.a('string').that.equals('monkey');
		}
	});

	it('Prompt 03: age should be a number', () => {
		expect(age).to.be.a('number');
		if (age > 16) {
			expect(prompt3()).to.be.a('string').that.equals('Here are the keys');
		} else {
			expect(prompt3())
				.to.be.a('string')
				.that.equals("Sorry, you're too young for now");
		}
	});
});
