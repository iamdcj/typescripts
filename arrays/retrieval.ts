// === When we retrieve values from an array,
// TS will infer the type based on the array type

const cities = ["NYC", "Barcelona", "Paris"];

const Barna = cities[1]; // (type: string);

const Paris = cities.pop(); // (type: string);
