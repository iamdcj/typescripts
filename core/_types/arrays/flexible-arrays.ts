// Flexible Arrays
// We may need an array to contain multiple types for different members;
// an array may need to contain a number and a string.
const mixedArrays: (number | string)[] = [
  "David",
  32,
  "Stephanie",
  32,
  "Nole",
  0
];

// We now have different types in our array,
// but TS will warn us if we try to add a member
// which does no conform the defined types;
mixedArrays.push(new Date()); //!NON!

// But we can, of course, add strings and numbers
mixedArrays.push("Michelle"); //*OUI
mixedArrays.push(51); //*OUI
