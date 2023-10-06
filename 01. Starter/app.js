new Vue({
   el: '#app',
   data() {
       return {
           map: null,
       };
   },
   mounted() {
       this.map = L.map('app').setView([-2.5489, 118.0149], 6);

       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           maxZoom: 19,
       }).addTo(this.map);
   },
});