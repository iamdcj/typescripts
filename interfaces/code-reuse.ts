// === Resuing Types via interfaces

// Interfaces allow us to specify types which can
// be used across our codebase, for many different
// object instances, as long as they conform to
// to the properties declared in the interface

// === EXAMPLE

// The reportable type possesses a summarise property,
// which is string-returning function
// this can be used for any object which
// holds a summarise method
interface Reportable {
  summarise(): string;
}

// A new instance which has a summarise method
const Job = {
  role: "Developer",
  experience: 2,
  skills: ["HTML", "CSS", "JavaScript"],
  summarise(): string {
    return `
      Role: ${this.role},
      Experience: ${this.experience} years,
      Skills: ${this.skills.map(skill => skill)}
    `;
  }
};

// LogItem function receives an argument of type reportable
// only an object which conforms to the Reportable type
// should be passed to this function.
const LogItem = (item: Reportable): void => {
  console.log(item.summarise());
};
