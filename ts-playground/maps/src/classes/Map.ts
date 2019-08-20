import {} from "@types/googlemaps";

export class Map {
  map: any;
  mapOptions: {
    zoom: number;
    maxZoom: number;
    minZoom: number;
    center: {
      lat: number;
      lng: number;
    };
  };

  constructor(center: any) {
    console.log(center);

    this.mapOptions = {
      zoom: 5,
      maxZoom: 15,
      minZoom: 10,
      center
    };
    this.map = new google.maps.Map(
      document.getElementById("map-canvas"),
      this.mapOptions
    );
  }
}
