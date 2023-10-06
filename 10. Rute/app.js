new Vue({
   el: '#app',
   data() {
      return {
         map: null,
         startMarker: null,
         endMarker: null,
      };
   },
   mounted() {
      this.initMap();
   },
   methods: {
      initMap() {
         this.map = L.map('map').setView([-0.4896, 117.1492], 13);

         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      },
      createMarker(latlng, label, draggable) {
         const marker = L.marker(latlng, { draggable: draggable }).addTo(this.map);
         marker.bindPopup(label).openPopup();
         return marker;
      },
      clearMap() {
         if (this.startMarker) {
            this.map.removeLayer(this.startMarker);
         }
         if (this.endMarker) {
            this.map.removeLayer(this.endMarker);
         }
         if (this.routingControl) {
            this.map.removeControl(this.routingControl);
         }
      },
      geocodeAddress(address) {
         const accessToken = 'hayoo-bikin-sendiri-lah owkwkk';
         const geocodingEndpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${accessToken}`;

         return axios.get(geocodingEndpoint)
            .then(response => {
               const features = response.data.features;
               if (features && features.length > 0) {
                  const result = features[0];
                  const latLng = L.latLng(result.center[1], result.center[0]);
                  return { latLng, name: result.place_name };
               }
               return null;
            })
            .catch(error => {
               console.error(error);
               alert('Terjadi kesalahan saat mengambil data geocoding.');
               return null;
            });
      },
      displayRoute(start, end) {
         this.routingControl = L.Routing.control({
            waypoints: [start, end],
            routeWhileDragging: true,
         }).addTo(this.map);
      },
      geocodeAndDisplayRoute() {
         const startInput = document.getElementById('startInput').value;
         const endInput = document.getElementById('endInput').value;

         this.geocodeAddress(startInput)
            .then(startLocation => {
               return this.geocodeAddress(endInput)
                  .then(endLocation => {
                     if (startLocation && endLocation) {
                        this.clearMap();

                        this.startMarker = this.createMarker(startLocation.latLng, startInput, false);
                        this.endMarker = this.createMarker(endLocation.latLng, endInput, false);

                        this.displayRoute(this.startMarker.getLatLng(), this.endMarker.getLatLng());
                     } else {
                        alert('Alamat tidak ditemukan. Coba lagi.');
                     }
                  });
            });
      },
   },
});