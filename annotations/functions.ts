// === Functions
// The annotations for functions should tell TS;
// - the types of function arguments
// - the type of return value (if any)

// Function Expressions/Anonymous Functions
// ----------------------------------------

// Annotate return value
const generateName = (a: string, b: string): string => {
  return `${a} ${b}`;
};
console.log(generateName("David", "Jones"));

// No return value annotation
const logName = (a: string, b: string): void => {
  console.log(`${a} ${b}`);
};

const multiply = function(a: number, b: number): number {
  return a * b;
};

// Function Declarations
// --------------------
function divide(a: number, b: number): number {
  return a / b;
}

function logIt(message: string): void {
  console.log(message);
}

// Destructuring objects in Functions
const data = { name: "David", age: 32 };

const logData = ({ name, age }: { name: string; age: number }): void => {
  console.log(name, age);
};

logData(data);
