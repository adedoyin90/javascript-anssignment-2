// Importing the other JavaScript file that contains the functions
const mathlab = require('./mathlab');

// Calling/invoke a list of functions from the second JavaScript file
mathlab.printWelcomeMessage('Adedoyin', 'Omiyale');
console.log('Temperature in Fahrenheit:', mathlab.convertToOtherUnit(40, 'Celsius', 'Fahrenheit'));
console.log('Hours:', mathlab.convertToOtherUnit(360, 'Minutes', 'Hours'));
console.log('Factorial:', mathlab.mathOperation(5, 'factorial'));
console.log('Power:', mathlab.power(2, 3))
