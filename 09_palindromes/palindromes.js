const palindromes = function (str) {
    let newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reverseStr = newStr.split("").reverse().join("");
    return newStr === reverseStr;
};
palindromes("racecar");
palindromes("Racecar");
palindromes("Race car");
palindromes("Race car, I'm a racecar.");

// Do not edit below this line
module.exports = palindromes;
