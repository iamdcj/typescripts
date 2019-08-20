// The ANY type is used/inferred when a particular type
// cannot be safely predicted for a stored/returned value.

// The following examples demonstrate when the 'any' type is inferred,
// and how to annotate our code to inform typescript about
// wtf is supposed to be happening in the program.
// If we avoid using any, we can keep TS informed.

// === EXAMPLE 1
const blob = '{ "user": "David", "age": 15 }'; // JSON

// Inferred type is any
const details1 = JSON.parse(blob);
// allowing us to reference properties which do not exist
console.log(details1.nonsense);

// We add the annotation to make it clear
// what the function  will return
const details2: { user: string; age: number } = JSON.parse(blob);
// TS will let us know about the mistake we are making
console.log(details2.nonsense);

// === EXAMPLE 2
const names = ["David", "Stephanie", "Nole"];

// Inferred type is any
let nameExists;

for (let i = 0; i < names.length; i++) {
  const currentName = names[i];

  if (currentName === "Nole") {
    // However we known what we are going to store
    // in the uninitialised variable
    nameExists = true;
  }
}

// we should annotate the uninitialised
// binding, informing TS what to expect
let nameExists2: boolean;

for (let i = 0; i < names.length; i++) {
  const currentName = names[i];

  if (currentName === "Nole") {
    // TS can now do its thing
    nameExists2 = "true";
  }
}

// === Example 3
let nums = [1, 2, 19];
let numberAboveTwo = false; // inference successful, type: boolean

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];

  if (num > 2) {
    // TS rightfully warns of wrong assignation
    // numberAboveTwo should be a boolean
    numberAboveTwo = num;
  }
}

// So, let's annotate
let numsAgain = [1, 2, 19];
let numberAboveThree: number | boolean = false; // inform TS that this binding can contain different types

for (let i = 0; i < numsAgain.length; i++) {
  const num = numsAgain[i];

  if (num > 2) {
    // TS does not throw, because num is of type number,
    // and God is good.
    numberAboveThree = num;
  }
}
