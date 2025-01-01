// Map method

const numbers = [1, 2, 3];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);  // Output: [1, 4, 9]

const fruits = ["apple", "banana", "cherry"];
const withIndex = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
console.log(withIndex); // Output: ["1. apple", "2. banana", "3. cherry"]

// Filter method

const digits = [1, 2, 3, 4, 5, 6];
const evenNumbers = digits.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4, 6]

const words = ["apple", "banana", "cherry", "kiwi"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords);  // Output: ["banana", "cherry"]

// Reduce method

const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 10

const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened);  // Output: [1, 2, 3, 4, 5, 6]