// Member consistency
// TS will warn us of any member which does not contain the annotated type
// by having type consistency in our arrays, we can be sure of what we are doing
// with any retrieved members
const planets: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
  2 //!NO!
];

// Retrieval Type consistency
const cities = ["NYC", "Barcelona", "Paris"];

const Barna = cities[1]; // (type: string);

const Paris = cities.pop(); // (type: string);

// Working with Array Members
// having type consistency in our arrays allows us
// to confidently run operations on the retrieved
// members
const Numbys: number[] = [1, 2, 3, 10.3];

Numbys.map(num => {
  num.toLowerCase(); //!NO!
});

Numbys.map(num => {
  const floored = Math.floor(num); //*YES!
});
