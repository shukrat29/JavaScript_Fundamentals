// The reduce() method in JavaScript is used to iterate over an array and reduce its elements into a single value. It executes a callback function on each element of the array, passing along an accumulator that keeps track of the combined result.

// The reduce() method does not mutate the original array.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Initial value is 0

console.log(sum); // Output: 15
