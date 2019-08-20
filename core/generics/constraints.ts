// Generic Constraints
// ------------------------
// Constraints allow us to create generics which
// conform to a particular known type; it is generic
// but with some defined boundaries

// This intention of this function is to
// log the length of the passed value.
function LogLengthIntial<T>(val: T) {
  console.log(val.length); // TS can't be sure .length is a prop of val
}

// so we need to restrict this function to
// types which do have the length property
interface lengthy {
  length: number;
}

// Now we can create a generic length logger
// using typescripts annotatios

function LogLength<T extends lengthy>(val: T) {
  console.log(val.length);
}

LogLength("David"); // ✅ strings do have a length prop
LogLength({ name: "David" }); // ❌ Objects do not have a length prop

// Annotated
LogLength<string>("David");
LogLength<number[]>([1, 2, 3]);

// Inferred
LogLength("Nole");
LogLength(["Oi", "OI", "oi"]);
