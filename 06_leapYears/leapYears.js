const leapYears = function(year) {
    // Check if the year is divisible by 4
    if (year %4 !== 0) {
        return false
    } else if (year % 100 !== 0) {
        return true
    } else if (year % 400 !== 0) {
        return false
    } else {
        return true
    }
    // Another solution but with the ternary method:
    // return ( year % 4 === 0 && year % 100 !== 0 ) || ( year % 400 === 0)
};
console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
