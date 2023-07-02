function sumAll(num1, num2) {
    // Check if both arguments are numbers, return 'ERROR' if not
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    // Check if both numbers are non-negative, return 'ERROR' if not
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    // Determine which number is smaller and which is larger
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    // Initialize a variable to hold the sum
    let sum = 0;

    // Loop from the smaller number to the larger number,
    // adding each number to the sum
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    // Return the sum
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
