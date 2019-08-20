import faker from "faker";

export class User {
  name: string;
  location: {
    lat: string | number;
    lng: string | number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}
