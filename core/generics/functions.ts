// Generic Function Helpers
// ------------------------

// Log array value, for any type<T> of array
function printValue<T>(array: T[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Annotated
printValue<string>(['a', 'b', 'c']);
printValue<number>([1, 2, 2]);

// Inferred
printValue(['a', 'b', 'c']);
printValue([1, 2, 2]);