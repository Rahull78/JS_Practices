// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:

let marksMass = 78;
let marksHeight = 1.69;

let jhonsMass = 92;
let jhonsHeight = 1.95;

const markBMI = marksMass / marksHeight ** 2;
const jhonBmi = jhonsMass / jhonsHeight ** 2;

// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.

let markHigherBMI = markBMI > jhonBmi;

console.log(markBMI, jhonBmi, markHigherBMI);

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

let markMass = 95;
let markHeight = 1.88;

let jhonMass = 85;
let jhonHeight = 1.76;

const markBMIs = markMass / markHeight ** 2;
const jhonBmis = jhonMass / jhonHeight ** 2;

let markHigherBMI1 = markBMIs > jhonBmis;

console.log(markBMIs, jhonBmis, markHigherBMI1);

// CHallange 2

if (markBMIs > jhonBmis) {
  console.log(`marks bmi ${markBMIs} is higher than jhons bmi ${jhonBmis}`);
} else {
  console.log(`jhons bmi ${jhonBmis} is higher than marks bmi ${markBMIs}`);
}
