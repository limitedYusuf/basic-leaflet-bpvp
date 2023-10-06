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

      L.marker([0.7969, 116.2651]).addTo(this.map).bindPopup("Kalimantan Timur");
      L.marker([-7.800, 110.390]).addTo(this.map).bindPopup("Yogyakarta");
      L.marker([-6.2088, 106.8456]).addTo(this.map).bindPopup("Jakarta");
   },
});