// === Objects
// The following demonstrates various ways we
// can use annotations with objects

// EXAMPLE 1 - Methods
const profile = {
  name: "David",
  age: 32,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// EXAMPLE 2 - Destructuring
const { age }: { age: number } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
