// ALAB 308.2.1: Control Flow
//---------------------------


// Part 1: Growing Pains

let radius = 5;
const pi = 3.1415;
const area = pi * radius * radius
const eachPlantSpace = 0.8;
let startingNoOfPlants = 20;
let noOfWeeks = 0;

// To calculate the current required area
let currentRequiredArea = startingNoOfPlants * eachPlantSpace;
console.log (`The Starting Required Area for ${startingNoOfPlants} Plants is ${currentRequiredArea} Sequare Meters`);

// To calculate The plant growth
let numberOfWeeks = prompt("Enter the number of weeks");
let plantsNumberAfterWeek = 2 * startingNoOfPlants;
let growthAfterNumberOfWeeks = numberOfWeeks * plantsNumberAfterWeek;
console.log(`The Required Area After ${numberOfWeeks} Weeks is ${growthAfterNumberOfWeeks}`);





