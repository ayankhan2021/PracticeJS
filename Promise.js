let myPromise = new Promise((resolve, reject) => {
    let isSuccessful = true;

    if (isSuccessful) {
        resolve("Success!");  
    } else {
        reject("Error!");  
    }
});

myPromise
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.log(error); 
    });


let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "First"));
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Second"));
let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, "Third"));

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results);  // Output: ["First", "Second", "Third"]
    })
    .catch(error => {
        console.log(error);  // If any promise is rejected
    });



// Function that returns a promise

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

async function fetchData() {
    try {
        let data = await getData();  // Wait until the promise is resolved
        console.log(data);  // Output: "Data received!"
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();

