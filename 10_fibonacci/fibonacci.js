const fibonacci = function (number) {
    // Function only must have numbers
    if (!Number.isInteger(number)) {
        throw new Error("Input must be a number");
    }
    // Function must not handle negative numbers
    if (number < 0 ) {
        throw new Error("Input must be a positive integer");
    }
    let num1 = 0;
    let num2 = 1;
    for (let i = 0; i < number; i++) {
        let temp = num1;
        num1 = num2;
        num2 = temp + num2;
    }
    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
