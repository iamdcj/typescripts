// Generic Helper Examples


// Get item in array, from any type of Array
// <T> can refer to anything
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {} // T[] = array of anything/type
  
  get(i: number): T {
    return this.collection[i];
  }

}

const Alphabet = new ArrayOfAnything<string>(['a', 'b', 'c']);
const B = Alphabet.get(1);

console.log(B); // b
