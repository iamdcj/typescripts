// === Functions
// The annotations for functions should tell TS;
// - the types of function arguments
// - the type of return value (if any)

// Annotate return value
const generateName = (a: string, b: string): string => {
  return `${a} ${b}`;
};
console.log(generateName("David", "Jones"));

// No return value annotation
const logName = (a: string, b: string): void => {
  console.log(`${a} ${b}`);
};
