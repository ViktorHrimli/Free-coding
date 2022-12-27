// function PersonSuperClass() {
//   this.getFamilyStatus = function () {
//     if (!this.family) {
//       return "Free";
//     }

//     return "married";
//   };
// }

// function Person(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.family = true;
// }

// Person.prototype = new PersonSuperClass();

// // Object.setPrototypeOf(Person, new PersonSuperClass());

// var bob = new Person("Bob", "male");

// bob.methodRemeried = function () {
//   this.family = false;
// };

// console.log("New person: ", bob);

// // console.log('New person familyStatus: ', bob.getFamilyStatus());

// class Cars {
//   static name = "Automobile";
//   constructor(model) {
//     this.model = model;
//   }

//   static logger() {
//     console.log(this.name, this.model);
//   }
// }

// Cars.prototype.changeNAme = function (newName) {
//   this.name = newName;
// };

// const bob = new Cars("audi");
// bob.prototype.changeName = function (newName) {
//   this.name = newName;
// };
