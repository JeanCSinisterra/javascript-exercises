const reverseString = function (str) {
    return str.split("").reverse().join("");
};

console.log(reverseString('hello there'));
console.log(reverseString("My name is Sidney 43212, Wallaby City!"));

// Do not edit below this line
module.exports = reverseString;
