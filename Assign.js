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
