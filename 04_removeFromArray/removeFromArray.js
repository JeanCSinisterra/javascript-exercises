const removeFromArray = function(array, ...args ) {
    return array.filter(element => !args.includes(element));
};

let myArray = ([1, 2, 3, 4]);
// You have to call your function as the New Array 
let newArray = removeFromArray(myArray,3);

// Print the result
console.log(newArray);

// Do not edit below this line
module.exports = removeFromArray;
