
console.log("Listing Data:", listing);
console.log("Geometry:", listing.geometry);
const coords = listing.geometry.coordinates;

const map = L.map("map").setView(
  [coords[1], coords[0]],
  9
);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: "&copy; OpenStreetMap contributors"
  }
).addTo(map);

L.marker([coords[1], coords[0]])
  .addTo(map)
  .bindPopup(
    `<h4>${listing.title}</h4>
     <p>Exact Location provided after booking</p>`
  )
  .openPopup();