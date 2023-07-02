const convertToCelsius = function(fahrenheit) {
  // Convert to celsius
  let celsius = (fahrenheit - 32) * (5 / 9); 
  let roundedCelsius = celsius.toFixed(1);
  let finalCelsius = Number(roundedCelsius);
  return finalCelsius;
}


const convertToFahrenheit = function(celsius) {
  // Convert to fahrenheit
  let fahrenheit = (celsius * (9 / 5)) + 32;
  let roundedFahrenheit = fahrenheit.toFixed(1);
  let finalFahrenheit = Number(roundedFahrenheit);
  return finalFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
