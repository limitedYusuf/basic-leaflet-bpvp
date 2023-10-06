new Vue({
   el: '#app',
   data() {
      return {
         map: null,
         address: '',
         geocodedLocations: [],
         selectedLocation: null,
      };
   },
   mounted() {
      this.initMap();
   },
   methods: {
      initMap() {
         this.map = L.map('map', {
            center: [-2.5489, 118.0149],
            zoom: 5,
         });

         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      },
      geocodeAddress() {
         const accessToken = 'hayoo-bikin-sendiri-lah wowkkwk';
         const geocodingEndpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.address}.json?access_token=${accessToken}`;

         axios.get(geocodingEndpoint)
            .then(response => {
               const features = response.data.features;
               if (features && features.length > 0) {
                  this.geocodedLocations = features.map(feature => ({
                     display_name: feature.place_name,
                     lat: feature.center[1],
                     lon: feature.center[0],
                  }));
               } else {
                  alert('Alamat tidak ditemukan.');
               }
            })
            .catch(error => {
               console.error(error);
               alert('Terjadi kesalahan saat mengambil data geocoding.');
            });
      },
      showSelectedLocation() {
         if (this.selectedLocation) {
            const location = this.selectedLocation;
            this.map.setView([location.lat, location.lon], 15);
            this.createMarker([location.lat, location.lon], location.display_name);
         }
      },
      createMarker(latlng, message) {
         if (this.marker) {
            this.map.removeLayer(this.marker);
         }

         this.marker = L.marker(latlng)
            .addTo(this.map)
            .bindPopup(message)
            .openPopup();
      },
   },
});