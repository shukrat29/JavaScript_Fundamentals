// The filter() method in JavaScript creates a new array with all elements that pass the test implemented by a provided callback function.

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
