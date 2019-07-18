// A tuple is very similar to an array in structure.
// The key difference from an array is that each member
// represents one particular property of a single record,
// whereas arrays are usually a collection of records

// Object format
const chap = { name: "David", age: 32, weight: 163 };

// Tuple format
const tuChap: [string, number, number] = ["David", 32, 163];
// Each element of the array/tuple relates to a single thing,
// in this case a person

// Ordering is fixed for tuples, and any attempt to
// edit member order would make TS unhappy
tuChap[0] = true; //!NON!

// The syntax for tuples can be improved via type alias
type Chap = [string, number, number];

const anotherTuChap: Chap = ["Stephanie", 32, 148];

// Why and when would we use tuples?

// - Working with .csv files

// Tuple Confusion
// The following tuple contains a string for marital status
// and a number for BMI
const personDetails: [string, number] = ["single", 24]; //!What?

// however it might be better represented in object format,
// ensuring the values have clear descriptive keys
const personDetailsOB: {} = { marital: "single", bmi: 24 }; //* Clear
