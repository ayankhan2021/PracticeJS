const car = {
    make: "Tesla",
    model: "Model S",
    year: 2021,
    getCarDetails: function() {
      return `${this.make} ${this.model} (${this.year})`;
    }
  };
  
console.log(car.getCarDetails());

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);