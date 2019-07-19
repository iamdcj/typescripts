// The following example demonstrates how interfacs help
// keep our programs D-R-Y, and allow for code reuse
// across an application

// ==== EXAMPLE: Non-DRY, non-interface example
const Stella = {
  name: "Stella Artois",
  strength: 6.2,
  color: "amber"
};

const LogDrink = (drink: {
  name: string;
  strength: number;
  color: string;
}): void => {
  console.log(drink.name);
  console.log(drink.strength);
  console.log(drink.color);
};

LogDrink(Stella);

// ==== EXAMPLE: DRY, interface-used example
// Declare Drink type
interface Drink {
  name: string;
  strength: number;
  color: string;
  alcoholic: boolean;
  description: string;
  summary(): string;
}

// An instance of a Drink
const Carling = {
  name: "Carling",
  strength: 4.9,
  color: "gold",
  alcoholic: true,
  description: "piss tasting beverage",
  summary(): string {
    return `${this.name} ${
      this.alcoholic ? `is a ${this.strength}% alcoholic` : "is a"
    } ${this.description}, ${this.color} coloured beverage.`;
  }
};

// This function will receive a Drink.
// and run log the result of the summary method
const printDrinkInfo = (drink: Drink): void => {
  console.log(drink.summary);
};

printDrinkInfo(Carling);
