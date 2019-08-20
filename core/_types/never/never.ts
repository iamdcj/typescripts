// The NEVER type is used if a function does not return anything at all,
// it doesn't return value, nor null or undefined, it simply never completes
// e.g. when a function throws an error

// EXAMPLE 1
function ThrowError(message: string): never {
  throw Error(message);
}
