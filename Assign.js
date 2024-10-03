/*//1 VARIABLES AND VALUES ASSIGENMENT
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions). Log their values to the console8
*/

let country = "India";

let continent = "Asia";

let population = 1400000000;

console.log(country, `|`, continent, `|`, population);

//2. DATATYPES ASSIGENMENT

/*1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */

let isIsland = true;
isIsland = "ANdman-Nikobar";
let language;
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);

// 3. Let Var And Const Task

/*1. Set the value of 'language' to the language spoken where you live (some 
    countries have multiple languages, but just choose one),Think about which variables should be const variables (which values will never 
    change, and which might change?). Then, change these variables to const.Try to change one of the changed variables now, and observe what happen*/

language = "Spanish";
const country1 = "Spain";
const continent2 = "India";
const isIsland2 = false;
isIsland = true;

// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?

let country2;
let population1 = 100;
console.log(population1 / 2);

// 2. Increase the population of your country by 1 and log the result to the console
population1++;
console.log(population1);

// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?

let myCountryPopulation = 140;
let finlandPopulation = 5.5;
if (myCountryPopulation > finlandPopulation) {
  console.log("Higher than Finland");
} else {
  console.log("Lower than Finland");
}

// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?

let myCountryAvgPopulations = 140;
let countaryAvgPopulation = 33;
if (myCountryAvgPopulations < countaryAvgPopulation) {
  console.log("Less than Avg");
} else {
  console.log("Higher than Avg");
}

// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese

let description =
  "Portugal is in Europe" + " its 11 million " + "people speak portuguese";
console.log(description);

// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

let country3 = "portugal";
let population3 = 35;
if (population3 > 33) {
  console.log(`${country3}  population is above average`);
} else {
  console.log(
    `${country3} has pupulation${population3 - 33} below million avg`
  );
}

// // Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

console.log(Number("9" - "5"));
console.log(Number("19" - "13" + "17"));
console.log(Number("19" - "13" + 17));
console.log(Number("123" < 57));
console.log(Number(5 + 6 + "4" + 9 - 4 - 2));

// Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

const prompt = require("prompt-sync")();
const numNeighbours = prompt("what's yr number : ");
console.log(typeof numNeighbours);

if (numNeighbours === 1) {
  console.log("yes 1 neghbeiour");
} else if (numNeighbours === 1) {
  console.log("no borders");
}
