/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

  // ES6 Person class refactored

  class Person{
      constructor(name,age) {
          this.name = name;
          this.age = age;
          this.stomach = [];
      }
      eat() {
          if (this.stomach.length < 10) {
              this.stomach.push(someFood);
          }
      }
      poop() {
          if (this.stomach.length > 0) {
              this.stomach = [];
          }
      };
      toString() {
          return `${this.name}, ${this.age}`;
      }
  }

  const someFood = ("pizza");
  const amin = new Person("amin",32);
  
  amin.toString();
  amin.eat("pizza");
  amin.eat("pizza");
  amin.eat("pizza");
  amin.eat("pizza");
  amin.eat("pizza");
  amin.eat("pizza");
  amin.eat("pizza");
  amin.eat("pizza");
  amin.eat("pizza");
  amin.eat("pizza");
  amin.eat("pizza");
  amin.eat("pizza");
  amin.eat("pizza");

  console.log(amin.stomach)
  amin.poop();
  console.log(amin.stomach);

// ES6 Car class constructor

class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank += gallons;
      }

    drive(distance) {
     if (this.tank >= distance / this.milesPerGallon) {
        this.odometer += distance;
        this.tank -= distance / this.milesPerGallon;
      } else {
        this.odometer += this.tank * this.milesPerGallon;
        this.tank = 0;
        return `I ran out of fuel at ${this.odometer} miles!`;
        }
    }
};

const tesla = new Car ("Tesla", 500)
console.log(tesla.drive());


// ES6 Baby class refactored

  class Baby extends Person {
      constructor(name, favoriteToy) {
          super(name);
          this.favoriteToy = favoriteToy;
      }

      play() {
          return `Playing with ${this.favoriteToy}`;
      }
  }

  const george = new Baby("George", "Rattle")

  console.log(george.play());

