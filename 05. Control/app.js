new Vue({
   el: '#app',
   data() {
      return {
         map: null,
      };
   },
   mounted() {
      const self = this;

      this.map = L.map('app').setView([-0.5026, 117.1530], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
      }).addTo(this.map);

      L.easyButton('fa-home', function (btn) {

         fetch('hotel.json')
            .then(response => response.json())
            .then(data => {
               data.forEach(hotel => {
                  const marker = L.marker(hotel.latlng).addTo(self.map);
                  marker.bindPopup(`<strong>${hotel.name}</strong><br>${hotel.address}`);
               });
            })
            .catch(error => {
               console.error('Error loading hotel data:', error);
            });
      }).addTo(this.map);

      L.easyButton('fa-bullseye', function (btn) {
         const samarindaCoordinates = [-0.5026, 117.1530];
         self.map.setView(samarindaCoordinates, 13);
      }).addTo(this.map);

      L.easyButton('fa-plus', function (btn) {
         self.map.zoomIn();
      }).addTo(this.map);

      L.easyButton('fa-minus', function (btn) {
         self.map.zoomOut();
      }).addTo(this.map);

      L.control.zoom({
         position: 'bottomright'
      }).addTo(this.map);
   },
});