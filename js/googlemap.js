function initMap() {
    const myLatLng = { lat: 55.760735712341884, lng: 37.61923226958979 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: myLatLng,
      styles: [
{
"elementType": "geometry",
"stylers": [
  {
    "color": "#121925"
  }
]
},
{
"elementType": "labels.icon",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#d6d7d9"
  }
]
},
{
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#212121"
  },
  {
    "visibility": "off"
  }
]
},
{
"featureType": "administrative",
"elementType": "geometry",
"stylers": [
  {
    "color": "#ffffff"
  }
]
},
{
"featureType": "administrative.country",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#ffffff"
  }
]
},
{
"featureType": "administrative.land_parcel",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "administrative.locality",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#d6d7d9"
  }
]
},
{
"featureType": "poi",
"elementType": "labels.text",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#d6d7d9"
  }
]
},
{
"featureType": "poi.business",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "poi.park",
"elementType": "geometry",
"stylers": [
  {
    "color": "#121925"
  }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#d6d7d9"
  }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#1b1b1b"
  },
  {
    "visibility": "off"
  }
]
},
{
"featureType": "road",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#4e535b"
  }
]
},
{
"featureType": "road",
"elementType": "labels.icon",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "road",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#d6d7d9"
  }
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
  {
    "color": "#4e535b"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
  {
    "color": "#4e535b"
  }
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "geometry",
"stylers": [
  {
    "color": "#4e535b"
  }
]
},
{
"featureType": "road.local",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#d9d7d9"
  }
]
},
{
"featureType": "transit",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "transit",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#757575"
  }
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
  {
    "color": "#121925"
  }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#ffffff"
  }
]
}
]
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }   