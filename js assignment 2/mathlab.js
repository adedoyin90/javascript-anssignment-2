function printWelcomeMessage(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName} to math converter lab!`);
}

function convertToOtherUnit(value, fromUnit, toUnit) {
  if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
      return value * 9 / 5 + 32;
  } else if (fromUnit === 'Minutes' && toUnit === 'Hours') {
      return value / 60;
  } else {
      throw new Error('Unsupported unit conversion');
  }
}

function mathOperation(number, operation) {
  if (operation === 'factorial') {
      return factorial(number);
  } else {
      throw new Error('Unsupported operation');
  }
}

function factorial(number) {
  if (number === 0) {
      return 1;
  } else {
      return number * factorial(number - 1);
  }
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}
// Export the functions so they can be used in other files
module.exports = {
  printWelcomeMessage,
  convertToOtherUnit,
  mathOperation,
  power
  
};