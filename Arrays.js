let fruits = ["apple", "banana", "cherry"];
let vegetables = new Array("carrot", "potato", "spinach");

fruits[1] = "blueberry";

fruits.push("orange");

let lastFruit = fruits.pop();
let firstFruit = fruits.shift();  

console.log(fruits.indexOf("banana"))

// Slicing an Array

let citrus = fruits.slice(1, 3); 
console.log("Sliced array (elements 1 and 2):", citrus);

// Splicing an Array

// Removing and adding elements using splice
fruits.splice(1, 1, "kiwi"); // Remove 1 element at index 1 and add "kiwi"
console.log("After splice:", fruits);

// Iterating Over Arrays

// Using forEach to iterate over elements
fruits.forEach(function(fruit) {
  console.log("Fruit:", fruit);
});

// Flattening Multidimensional Arrays

let multiDimensionalArray = [[1, 2, 3], [4, 5], [6, 7, 8]];
let flattenedArray = multiDimensionalArray.flat();
console.log("Flattened array:", flattenedArray);

// Destructuring Arrays

// Destructuring to extract specific elements from an array
let [first, second, third] = fruits;
console.log("Destructured fruits:", first, second, third);


// Combining Arrays

let allFruits = [...fruits, ...vegetables];
console.log("Combined fruits and vegetables array:", allFruits);


