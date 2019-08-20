// Generic Array Helpers
// -----------------------
// <T> refers to anything

// Get item in array, from any type of Array
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {} 
  
  get(i: number): T {
    return this.collection[i];
  }

}

// Annotated
const Alphabet = new ArrayOfAnything<string>(['a', 'b', 'c']); 
const B = Alphabet.get(1);

console.log(B); // b


// Inferred
const Fibonnaci = new ArrayOfAnything([0, 1, 1, 2, 3, 5, 8, 13]); // type inferred
const third = Fibonnaci.get(2);

console.log(third); // 1