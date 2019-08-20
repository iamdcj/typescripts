class Boat {
  // Property instance
  color: string = "orange";

  // Accessor: getter
  get formattedColor(): string {
    return `The color of this boat is ${this.color}`;
  }

  // Method
  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}

// Decorator has a target argument, and a key argument
function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}
