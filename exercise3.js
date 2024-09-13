// Exercise 3: Convert a Class to a Function Prototype
// Instructions: 
// 1. Below is a class called "Person". Your task is to convert this class into a constructor function with methods defined on its prototype.
// 2. Ensure the functionality remains the same after converting.


function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

  Object.defineProperty(this, "fullName", {
    get: function(){
      return `${this.firstName} ${this.lastName}`
    }
  })
}
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.fullName}.`);
  }

// Test the Person constructor function
const john = new Person("John", "Doe");
john.greet();  // Output: Hello, my name is John Doe.