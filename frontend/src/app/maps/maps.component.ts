import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
  originInput: any;
  marcadores: any[]=[];
  positions: any[]=[];
  mapOptions;
  map: google.maps.Map;
  originPlaceId: string;
  destinationPlaceId: string;
  travelMode: google.maps.TravelMode;
  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;


  constructor() { }

  ngOnInit() { 
    navigator.geolocation.getCurrentPosition((position)=>{
      let x = position.coords.latitude;
      let y = position.coords.longitude;
      let view =13;

      this.mapOptions=[x,y,view]

    
      const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        mapTypeControl: false,
        center: { lat: x, lng: y },
      zoom: 13,
    }
  );
})
}
onMapReady(map) {
  console.log('map', map);
  console.log('markers', map.markers);  // to get all markers as an array 

  
  this.originPlaceId = "";
  this.destinationPlaceId = "";
  this.travelMode = google.maps.TravelMode.WALKING;
  this.directionsService = new google.maps.DirectionsService();
  this.directionsRenderer = new google.maps.DirectionsRenderer();
  this.directionsRenderer.setMap(map);


  this.originInput = document.getElementById(
    "origin-input"
  ) as HTMLInputElement;
    let variable=""
  const originAutocomplete = new google.maps.places.Autocomplete(this.originInput);
  // Specify just the place data fields that you need.
  originAutocomplete.setFields(["place_id"]);

  this.setupPlaceChangedListener(originAutocomplete, "ORIG",map);

  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.originInput);


}

setupPlaceChangedListener(
  autocomplete: google.maps.places.Autocomplete,
  mode: string,
  map: google.maps.Map
) {
  autocomplete.bindTo("bounds", map);

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();

    if (!place.place_id) {
      window.alert("Please select an option from the dropdown list.");
      return;
    }

    if (mode === "ORIG") {
      this.originPlaceId = place.place_id;
      console.log(this.originPlaceId)
    } 
 
  });
}


onIdle(event) {
  console.log('map', event.target);
  
}
onMarkerInit(marker) {
  console.log('hola', marker);
  let xxxx=marker.getPosition().lat()
  let yyyy=marker.getPosition().lng()


  this.marcadores.push({xxxx,yyyy})

  console.log("el arreglo es, ",this.marcadores)

}
onMapClick(event) {
  this.positions.push(event.latLng);
  event.target.panTo(event.latLng);


}




// Initialize the map.
initMap(): void {
const map = new google.maps.Map(
  document.getElementById("map") as HTMLElement,
  {
    zoom: 8,
    center: { lat: 40.72, lng: -73.96 },
  }
);
const geocoder = new google.maps.Geocoder();
const infowindow = new google.maps.InfoWindow();


    this.geocodePlaceId(geocoder, map, infowindow);

}

// This function is called when the user clicks the UI button requesting
// a geocode of a place ID.
geocodePlaceId(
geocoder: google.maps.Geocoder,
map: google.maps.Map,
infowindow: google.maps.InfoWindow
) {


console.log("click")
const placeId = (document.getElementById("place-id") as HTMLInputElement)
  .value;
geocoder.geocode({ placeId: placeId }, (results, status) => {
  if (status === "OK") {
    if (results[0]) {
      map.setZoom(11);
      map.setCenter(results[0].geometry.location);
      const marker = new google.maps.Marker({
        map,
        position: results[0].geometry.location,
      });
      infowindow.setContent(results[0].formatted_address);
      infowindow.open(map, marker);
    } else {
      window.alert("No results found");
    }
  } else {
    window.alert("Geocoder failed due to: " + status);
  }
});
}







}
