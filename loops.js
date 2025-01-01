// For loop

for (let index = 0; index <= 10; index++) {
    console.log(`This is ${index}th loop.`)
    
}

// For in

const person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}

const arr = [10, 20, 30];

for (let index in arr) {
    console.log(index + ": " + arr[index]);
}


// For of

const numbers = [1, 2, 3, 4];

for (let number of numbers) {
    console.log(number);
}

const word = "hello";

for (let char of word) {
    console.log(char); 
}

// For Each

const number = [1, 2, 3, 4];

number.forEach((item, index) => {
    console.log(`Index: ${index}, Value: ${item}`);  
    // Output: Index: 0, Value: 1; Index: 1, Value: 2; Index: 2, Value: 3; Index: 3, Value: 4
});

// While loops

let i = 0;
while (i < 5) {
    console.log(i); 
    i++;
}

// Do-while loops

let ind = 0;
do {
    console.log(i); 
    ind++;
} while (ind < 5);