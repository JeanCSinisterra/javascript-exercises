const repeatString = function (str, count) {
    if (count < 0 ) {
        return 'Count must be greater than or equal to 0';
    }

    let result = '';
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
};

const number = Math.floor(Math.random() * 1000);

console.log(repeatString('hey', 3));
console.log(repeatString('hey', 10));
console.log(repeatString('hey', 1));
console.log(repeatString('hey', 0));
console.log(repeatString('hey', -1));
console.log(repeatString('hey', number));

// Do not edit below this line
module.exports = repeatString;
