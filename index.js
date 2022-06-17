function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const number1 = array[i];

    for (let j = 0; j < array.length; j++) {
      const number2 = array[j];
      // Check if number1 + number2 is equal to target and also make sure number1 and number2 aren't at the same index in the array
      let sum=number1+number2
       
      
      if (sum === target && i!== j) {
       return true;
      }
       

      
    }
  }
 return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime:0(n^2)
  sad:can do better than this...maybe next time;
*/

/* 
  Add your pseudocode here
  looping through the array in 2 different iterations;
  obtaining two numbers that are not identical(in index)
  the sum of the two numbers should equal to the value of the target number
  if above is true then return true else false
  
*/

/*
  Add written explanation of your solution here

  looping through the array in 2 different iterations;
  obtaining two numbers that are not identical(in index)
  the sum of the two numbers should equal to the value of the target number
  if above is true then return true else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

}

module.exports = hasTargetSum;
