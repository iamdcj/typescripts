// Inference is also a thing with functions,
// TS with infer the return value based on
// the return value of a function

// === Example 1 - Infered: STRING
const stitchString = (a: string, b: string) => {
  return `${a} ${b}`;
};

// === Example 2 - Infered: NUMBER
const add = (a: number, b: number) => {
  return a + b;
};

// === Example 3 - Infered: void [UNINTENDED]
const subtract = (a: number, b: number) => {
  a - b;
};
// this function does not return a value,
// thus TS infers void as the type,
// however the intention was to return a number
//! ALWAYS ANNOTATE A FUNCTIONS RETURN VALUE

// === Example 4 - Infered: void (no return value) [INTENDED]
const logger = (a: string, b: string) => {
  console.log(a, b);
};
