new Vue({
   el: '#app',
   data() {
      return {
         map: null,
      };
   },
   mounted() {
      this.map = L.map('app').setView([-2.5489, 118.0149], 5);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
      }).addTo(this.map);

      const markers = L.markerClusterGroup();

      const markersData = [
         { lat: -7.800, lng: 110.390, label: "Yogyakarta" },
         { lat: -6.2088, lng: 106.8456, label: "Jakarta" },
         { lat: 0.7969, lng: 116.2651, label: "Kalimantan Timur" },
      ];

      markersData.forEach(markerInfo => {
         const marker = L.marker([markerInfo.lat, markerInfo.lng]).bindPopup(markerInfo.label);
         markers.addLayer(marker);
      });

      this.map.addLayer(markers);

      fetch('../indonesia.geojson')
         .then(response => response.json())
         .then(data => {
            L.geoJSON(data, {
               style: {
                  color: 'blue',
                  weight: 2,
                  opacity: 0.6,
               },
            }).addTo(this.map);
         })
         .catch(error => {
            console.error('Error loading GeoJSON:', error);
         });
   },
});