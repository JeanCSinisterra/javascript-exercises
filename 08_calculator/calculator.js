const add = function(a, b) {
  // Validate if the inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  let result = a + b;
  return result;
};

const subtract = function(a, b) {
  // Validate if the inputs are numbers
   if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  let result = a - b
  return result;
};


const sum = function(numbers) {
  // Validate if the inputs is an array
  if (!Array.isArray(numbers)) {
    throw new Error('Input is not an array');
  }
  // Must be validate that the array is not empty
   if (numbers.length === 0) {
    return 0;
  }
	let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total
};

const multiply = function(a, b) {
  // Validate if the inputs are numbers
   if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  let result = a * b
  return result;
};

const power = function(a, b) {
	// Validate the inputs are numbers
   if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return Math.pow(a,b)
};

const factorial = function(n) {
	// Validate if the inputs are positive integers
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('Input must be a positive integer');
  }
  if (n === 0 ) {
    return 1;
  } else {
  return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
