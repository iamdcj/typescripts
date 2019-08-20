// === ARRAYS
// Arrays, like the rest of typescript, is actual JavaScript
// the difference is we try to stick to 'typed' arrays when
// dealing with arrays in TS.

// EXAMPLE 1 - String array
const manufacturers = ["Ford", "Toyota", "KIA"]; // inferred string array

// EXAMPLE 2 - Number array
const ages = [0, 32, 52]; // inferred number array

// EXAMPLE 3 - Date array
const Dates = [new Date(), new Date(), new Date()]; // inferred date array

// EXAMPLE 4 - Multi-dimensional array
const carModels = [["Escort"], ["Supra"], ["i10"]]; // inferred mD array

// EXAMPLE X - Empty arrays
// We don't want to rely on inference,
// that will infer the type of 'any' for the array
// ALWAYS annotate empty arrays;
const strings: string[] = [];
