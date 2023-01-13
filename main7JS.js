let person = {};
person.firstName = "Ivan";
person.secondName = "Ivanov";

person = {
  firstName: "Ivan",
  secondName: "Ivanov",
  showData() {
    console.log(this.firstName, this.secondName);
  },
};
person.showData();

let newPerson = {};
newPerson = Object.assign({}, person);
newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";
person.showData();
newPerson.showData();





let myMath = {};
myMath.a = 5;
myMath.b = 2;
myMath = {
  a: 5,
  b: 2,
  sum() {
    console.log(this.a + this.b);
  },
  multiplication() {
    console.log(this.a * this.b);
  },
  division() {
    console.log(this.a / this.b);
  },
  subtraction() {
    console.log(this.a - this.b);
  },
};
myMath.sum();
myMath.multiplication();
myMath.division();
myMath.subtraction();
