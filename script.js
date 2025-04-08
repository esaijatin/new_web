document.addEventListener("DOMContentLoaded", function () {
  const lat = 17.45241076224542;
  const lng = 78.38791832225543;

  const map = L.map('map').setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup('Mom Pharmacy')
    .openPopup();
});
