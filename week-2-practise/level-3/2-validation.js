// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is an integer (not a float)
// - is not equal any of the numbers in the array `excludedNums`
// Tip: write other small functions for each requirement

var excludedNums = [6, 14, 91, 111];

function validate(number) {
  function isNumber() {
    return typeof number === "number";
  }
  function isInteger() {
    return Number.isInteger(number);
  }
  function isNotInclude() {
    return !excludedNums.includes(number);
  }
  return isNumber() && isInteger() && isNotInclude();

  // If we don't want to use small functions we can write it this way
  // return (typeof number === "number" && Number.isInteger(number) &&!excludedNums.includes(number));
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
  true
  false
*/
