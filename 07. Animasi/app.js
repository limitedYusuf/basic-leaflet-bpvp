new Vue({
   el: '#app',
   data() {
      return {
         map: null,
         marker: null,
         initialLatLng: [-0.502106, 117.153709],
         finalLatLng: [-0.501934, 117.154043],
      };
   },
   mounted() {
      this.initMap();
   },
   methods: {
      initMap() {
         this.map = L.map('map').setView(this.initialLatLng, 13);

         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

         this.marker = L.marker(this.initialLatLng, {
            icon: L.divIcon({
               className: 'animated-marker-icon',
               html: '<div class="animated-marker"></div>',
            }),
         }).addTo(this.map);

         this.animateMarker();

         const defaultMarker = L.marker([-0.501934, 117.154043]).addTo(this.map);
         defaultMarker.on('click', () => {
            this.jumpAnimation(defaultMarker);
         });
      },
      animateMarker() {
         const marker = this.marker;
         marker.setLatLng(this.initialLatLng);

         let start = null;
         const duration = 2000;

         const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const ratio = Math.min(progress / duration, 1);

            const lat = this.initialLatLng[0] + (this.finalLatLng[0] - this.initialLatLng[0]) * ratio;
            const lng = this.initialLatLng[1] + (this.finalLatLng[1] - this.initialLatLng[1]) * ratio;

            marker.setLatLng([lat, lng]);

            if (ratio < 1) {
               requestAnimationFrame(animate);
            }
         };

         requestAnimationFrame(animate);
      },
      jumpAnimation(marker) {
         const jumpInterval = setInterval(() => {
            marker.setOpacity(0);
            setTimeout(() => {
               marker.setOpacity(1);
            }, 200);
         }, 1000);

         setTimeout(() => {
            clearInterval(jumpInterval);
         }, 3000);
      },
   },
});