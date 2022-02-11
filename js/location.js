var map = L.map("map", { zoomControl: false }).setView([51.505, -0.09], 13);

var marker = L.marker([51.5, -0.09]).addTo(map);

console.log("dfdf", process.env.MAPBOX_ACCESS_TOKEN);

L.tileLayer(
  `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`,
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "your.mapbox.access.token",
  }
).addTo(map);
