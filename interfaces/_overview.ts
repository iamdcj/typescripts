// === Interface
// Interfaces inform TS what the structure of an object should be
// telling it that this instance should have these properties,
// and those properties should have certain types

// Interfaces essentially define a new type for TS
// to watch and analyze in our programs

// === EXAMPLE ===
// This interface creates a Person type
// with a set of properties and types
interface Person {
  name: string;
  age: number;
  summarise(): string;
}

// An instance which satisfies
// the Person type
const David = {
  name: "David",
  age: 32,
  summarise(): string {
    return `${this.name} is ${this.age} years old.`;
  }
};

// This function is passed a Person type
// and logs out the result of the summarise function
const printPerson = (person: Person): void => {
  console.log(person.summarise);
};

printPerson(David);
