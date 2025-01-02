class Person {
    constructor(name, age) {
      
      this.name = name; 
      this.age = age;   
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }


const ayan = new Person('Ayan', 25);
ayan.greet();


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
const dog = new Dog("Spike");
dog.speak();
const cat  = new Animal("Tom");
cat.speak();

  
  