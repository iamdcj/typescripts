import {} from "@types/googlemaps";

export class Map {
  map: any;
  mapOptions: {
    zoom: number;
    center: {
      lat: number;
      lng: number;
    };
  };

  constructor(center: any) {
    console.log(center);

    this.mapOptions = {
      zoom: 5,
      center
    };
    this.map = new google.maps.Map(
      document.getElementById("map-canvas"),
      this.mapOptions
    );
  }
}
