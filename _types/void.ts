// The VOID type is used if a function does not return a value,
// or it returns null or undefined.

// EXAMPLE 1
function logIt(message: string): void {
  console.log(message);
}

// EXAMPLE 2
function nully(): void {
  return null;
}

// EXAMPLE 3
function undef(): void {
  return undefined;
}
