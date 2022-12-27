class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  newName(newName) {
    this.name = newName;
  }

  changeAge(newAge) {
    this.age = newAge;
  }

  getPerson() {
    console.log(`Hello im ${this.name} and me ${this.age} age`);
  }
}

class Gender extends Person {
  constructor(gender) {
    super();
    this.gender = gender;
  }
  changeGender(newGender) {
    this.gender = newGender;
  }

  loger() {
    console.log(this.name, this.gender);
  }
}

const bib = new Person("Bib", 40);

const bob = new Gender("male");
bob.newName("bob");
bob.changeAge(37);
bob.getPerson();

bob.sayHiBob = function () {
  console.log("Hi bob");
};

bob.sayHiBob();

Person.fuckOfBob = () => {
  console.log("Fuck of bob");
};

bob.changeGender("no-binare-toster");
bob.newName("philips");
bob.loger();
console.log(bob);
