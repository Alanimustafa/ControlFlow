// ALAB 308.2.1: Control Flow
//---------------------------


// Part 1: Growing Pains.

const radius = 5;
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

//Part 2: Thinking Bigger 
// To calculate the radius of this expanded garden to have 100 plants.

// The required area for 100 Plants.

function requiredAreaforPlants (numberOfPlants, numberofWeeks) {

  

  let plantsNumberAfterWeek = 0; 
  let newRadius

  // To calculate The plant growth.
  plantsNumberAfterWeek = 2 * startingNoOfPlants;

  //To calculate the Number Plants for the Given number of weeks
  growthperNumberOfWeeks = plantsNumberAfterWeek * numberofWeeks ;
  console.log(`The number of Plants after ${numberofWeeks} Weeks will be ${growthperNumberOfWeeks} Plants`);

  // To Calculate the Reuired Area for a spcific Number of Plants
  let requiredAreaforPlants = eachPlantSpace * growthperNumberOfWeeks ;
  console.log(`The required area for ${growthperNumberOfWeeks} plants is ${requiredAreaforPlants.toFixed(2)} SEQ METER`);

  //To Calculate the radius.
  newRadius = Math.sqrt(requiredAreaforPlants / pi); 
  console.log(`The radius after planting ${growthperNumberOfWeeks} plants will be ${newRadius.toFixed(2)} Meters`);

}


//Part 3: Errors in Judgement.
console.log('Part 3: Errors in Judgement');

function errorsCatches (plants) {

      // Sincs the original area holds 98 Plants, any extra will cause an error of Out of Range.
      try {
        if (plants > 98) {
          throw new RangeError (`The ${plants} Plants You Entered is OUT OF RANGE.`);
        } 
        
      } catch (error) {
      console.error (error);
    }
}



console.log("------------------------------------------------------------------------------")
console.log("------------------------------------------------------------------------------")

//Part 1: Growing Pains
console.log("Part 1: Growing Pains")

      // After One Week.
      growthPerWeek(1);
      console.log("------------------------------------------------------------------------------")

      // After Two Weeks.
      growthPerWeek(2);
      console.log("------------------------------------------------------------------------------")

      // After Three Weeks.
      growthPerWeek(3);


console.log("------------------------------------------------------------------------------")
console.log("------------------------------------------------------------------------------")


//Part 2: Thinking Bigger
// Running the function to calculate the requrired area for 100 plants.
console.log('Part 2: Thinking Bigger');
requiredAreaforPlants(100, 10);

console.log("------------------------------------------------------------------------------")
console.log("------------------------------------------------------------------------------")


// Part 3: Errors in Judgement.
console.log('Part 3: Errors in Judgement');
errorsCatches(100);