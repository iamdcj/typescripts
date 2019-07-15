// The following bindings examplify how we annotate
// our source code for TS analysis;
// TS is aware what values are particular binding should hold
// based on our annotations

// === Variables
let num: number = 2;
let str: string = "string";
let bool: boolean = true;
let _Date: Date = new Date();
let obj: object = {};
let nada: null = null;
let udf: undefined = undefined;

// Variable reinitialization
// Any attempt to reassign the original annotated binding
// will result in a TS error, informing us that the new type
// is not assignable to the binding
num = "test";
str = 2;
bool = "test";
_Date = "test";
obj = "test";
nada = "test";
udf = "test";

// === Arrays
const strArray: string[] = ["David", "Stephanie", "Nole"];
const numArray: number[] = [1, 2, 3];
const boolArray: boolean[] = [true, false, true];
const anyArray: any[] = [1, "OI", {}];

// === Classes

// Class declaration
class Person {}

// Class instance
const person: Person = new Person();

// === Object Literal
const DCJ: { name: string; age: number } = {
  name: "David",
  surname: "Jones",
  age: 32
};

// ===  Functions
const logNumber: (i: number) => void = i => {
  console.log(i);
};
