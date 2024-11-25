// ALAB 308.2.1: Control Flow
//---------------------------


// Part 1: Growing Pains.

let radius = 5;
const pi = 3.1415;
let area = 0;
const eachPlantSpace = 0.8;
let startingNoOfPlants = 20;
let noOfWeeks = 0;

//The Current Available Area.
area = pi * radius * radius ;
console.log(`The Maximum Available Area is ${area.toFixed(2)} SEQ Meter`);

//The Maximum Capacity of The Current Area.
let currentCapacity = area / eachPlantSpace;
console.log(`The maximum capacity of the area is ${Math.round(currentCapacity)} Plants`);

// To calculate the current required area.
let currentRequiredArea = startingNoOfPlants * eachPlantSpace;
console.log (`The Used Area for ${startingNoOfPlants} Plants is ${currentRequiredArea} Sequare Meters`);




// Grwoth Per Week Function.
function growthPerWeek (numberOfWeeks) {

      // To calculate The plant growth.
      let plantsNumberAfterWeek = 2 * startingNoOfPlants;

      //Calculating the  Number of Plant After a Specific Number of Weeks.
      let growthAfterNumberOfWeeks = numberOfWeeks * plantsNumberAfterWeek;
      console.log(`The number of Plants After ${numberOfWeeks} Weeks would be ${growthAfterNumberOfWeeks}`);

      // The required Area in SEQ Meter After Specific Number of Weeks.
      let requiredAreaAfterWeeks = growthAfterNumberOfWeeks * eachPlantSpace;
      console.log(`The required Area for ${growthAfterNumberOfWeeks} Plants is ${requiredAreaAfterWeeks.toFixed(2)} SEQ Meters`);


      //Implementing the Control Flow to make decisions.

      // Plants Should be Pruned When the count is Greater than 80% of the Maximum Capacity.
      if (growthAfterNumberOfWeeks >= (currentCapacity * 0.8)) {
        console.log('Plants Should be pruned. The plants count exceeded 80% of the Maximum Capacity');
      } 
      // Plants Should be Monitored When the count is between 50% and 80% of the Maximum Capacity.

      if (growthAfterNumberOfWeeks >= (currentCapacity * 0.5) && growthAfterNumberOfWeeks < (currentCapacity * 0.8)) {
        console.log('Plants Should be Monitored. The plants count is between 50% and 80% of the Maximum Capacity');
      } 

      // Plant more plants
      if (growthAfterNumberOfWeeks < (currentCapacity * 0.5)) {
        console.log('Plant More.');
      }
}

console.log("------------------------------------------------------------------------------")
console.log("------------------------------------------------------------------------------")

// After One Week.
growthPerWeek(1);
console.log("------------------------------------------------------------------------------")

// After Two Weeks.
growthPerWeek(2);
console.log("------------------------------------------------------------------------------")

// After Three Weeks.
growthPerWeek(3);
console.log("------------------------------------------------------------------------------")

