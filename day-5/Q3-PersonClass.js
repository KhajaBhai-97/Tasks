/* Write a “person” class to hold all the details. */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
  toString() {
    return `Hi I am ${this.name}, ${this.age} years old`;
  }
}

console.log(new Person("Harry", 20).toString());
