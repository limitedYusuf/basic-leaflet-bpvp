new Vue({
   el: '#app',
   data() {
      return {
         map: null,
         heatmapLayer: null,
         clusterGroup: null,
         dataPoints: [],
         isHeatmapActive: true,
         isClusteringActive: true,
      };
   },
   computed: {
      heatmapButtonClass() {
         return {
            'bg-blue-500': this.isHeatmapActive,
            'bg-gray-500': !this.isHeatmapActive,
            'text-white': true,
            'px-4': true,
            'py-2': true,
            'rounded': true,
            'hover:bg-blue-600': true,
         };
      },
      clusterButtonClass() {
         return {
            'bg-green-500': this.isClusteringActive,
            'bg-gray-500': !this.isClusteringActive,
            'text-white': true,
            'px-4': true,
            'py-2': true,
            'rounded': true,
            'hover:bg-green-600': true,
         };
      },
   },
   mounted() {
      this.initMap();
      this.loadData();
   },
   methods: {
      initMap() {
         this.map = L.map('map', {
            center: [-0.494823, 117.143615],
            zoom: 12,
         });

         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

         this.heatmapLayer = L.heatLayer([], { radius: 15 }).addTo(this.map);

         this.clusterGroup = L.markerClusterGroup().addTo(this.map);
      },
      loadData() {
         this.dataPoints = [
            [-0.494823, 117.143615, 1, 'Lokasi 1', 'Alamat 1', 'Ramai'],
            [-0.491272, 117.135007, 2, 'Lokasi 2', 'Alamat 2', 'Sedang'],
            [-0.482598, 117.151648, 3, 'Lokasi 3', 'Alamat 3', 'Sepi'],
            [-0.488765, 117.138765, 4, 'Lokasi 4', 'Alamat 4', 'Ramai'],
            [-0.490123, 117.143210, 5, 'Lokasi 5', 'Alamat 5', 'Sedang'],
            [-0.482345, 117.156789, 6, 'Lokasi 6', 'Alamat 6', 'Sepi'],
            [-0.496789, 117.139876, 7, 'Lokasi 7', 'Alamat 7', 'Ramai'],
            [-0.485432, 117.145678, 8, 'Lokasi 8', 'Alamat 8', 'Sedang'],
            [-0.488765, 117.153210, 9, 'Lokasi 9', 'Alamat 9', 'Sepi'],
            [-0.482345, 117.142345, 10, 'Lokasi 10', 'Alamat 10', 'Ramai'],
            [-0.490123, 117.135678, 11, 'Lokasi 11', 'Alamat 11', 'Sedang'],
            [-0.484567, 117.151234, 12, 'Lokasi 12', 'Alamat 12', 'Sepi'],
            [-0.488765, 117.143210, 13, 'Lokasi 13', 'Alamat 13', 'Ramai'],
            [-0.495678, 117.136789, 14, 'Lokasi 14', 'Alamat 14', 'Sedang'],
            [-0.482345, 117.154321, 15, 'Lokasi 15', 'Alamat 15', 'Sepi'],
            [-0.498765, 117.145678, 16, 'Lokasi 16', 'Alamat 16', 'Ramai'],
            [-0.490123, 117.139876, 17, 'Lokasi 17', 'Alamat 17', 'Sedang'],
            [-0.484567, 117.152345, 18, 'Lokasi 18', 'Alamat 18', 'Sepi'],
            [-0.488765, 117.146789, 19, 'Lokasi 19', 'Alamat 19', 'Ramai'],
            [-0.491234, 117.137890, 20, 'Lokasi 20', 'Alamat 20', 'Sedang'],
            [-0.482345, 117.150123, 21, 'Lokasi 21', 'Alamat 21', 'Sepi'],
            [-0.498765, 117.144567, 22, 'Lokasi 22', 'Alamat 22', 'Ramai'],
            [-0.490123, 117.138765, 23, 'Lokasi 23', 'Alamat 23', 'Sedang'],
            [-0.483210, 117.153210, 24, 'Lokasi 24', 'Alamat 24', 'Sepi'],
            [-0.488765, 117.147890, 25, 'Lokasi 25', 'Alamat 25', 'Ramai'],
            [-0.492345, 117.136789, 26, 'Lokasi 26', 'Alamat 26', 'Sedang'],
            [-0.482345, 117.151234, 27, 'Lokasi 27', 'Alamat 27', 'Sepi'],
            [-0.498765, 117.142345, 28, 'Lokasi 28', 'Alamat 28', 'Ramai'],
            [-0.490123, 117.145678, 29, 'Lokasi 29', 'Alamat 29', 'Sedang'],
            [-0.483210, 117.150123, 30, 'Lokasi 30', 'Alamat 30', 'Sepi'],
            [-0.488765, 117.146789, 31, 'Lokasi 31', 'Alamat 31', 'Ramai'],
            [-0.492345, 117.138765, 32, 'Lokasi 32', 'Alamat 32', 'Sedang'],
            [-0.483210, 117.151234, 33, 'Lokasi 33', 'Alamat 33', 'Sepi'],
            [-0.490123, 117.144567, 34, 'Lokasi 34', 'Alamat 34', 'Ramai'],
            [-0.498765, 117.139876, 35, 'Lokasi 35', 'Alamat 35', 'Sedang'],
            [-0.482345, 117.152345, 36, 'Lokasi 36', 'Alamat 36', 'Sepi'],
            [-0.488765, 117.143210, 37, 'Lokasi 37', 'Alamat 37', 'Ramai'],
            [-0.491234, 117.137890, 38, 'Lokasi 38', 'Alamat 38', 'Sedang'],
            [-0.482345, 117.150123, 39, 'Lokasi 39', 'Alamat 39', 'Sepi'],
            [-0.498765, 117.146789, 40, 'Lokasi 40', 'Alamat 40', 'Ramai'],
            [-0.490123, 117.138765, 41, 'Lokasi 41', 'Alamat 41', 'Sedang'],
            [-0.483210, 117.151234, 42, 'Lokasi 42', 'Alamat 42', 'Sepi'],
            [-0.488765, 117.143210, 43, 'Lokasi 43', 'Alamat 43', 'Ramai'],
            [-0.492345, 117.136789, 44, 'Lokasi 44', 'Alamat 44', 'Sedang'],
            [-0.482345, 117.150123, 45, 'Lokasi 45', 'Alamat 45', 'Sepi'],
            [-0.498765, 117.144567, 46, 'Lokasi 46', 'Alamat 46', 'Ramai'],
            [-0.490123, 117.138765, 47, 'Lokasi 47', 'Alamat 47', 'Sedang'],
            [-0.483210, 117.151234, 48, 'Lokasi 48', 'Alamat 48', 'Sepi'],
            [-0.488765, 117.146789, 49, 'Lokasi 49', 'Alamat 49', 'Ramai'],
            [-0.492345, 117.138765, 50, 'Lokasi 50', 'Alamat 50', 'Sedang']
         ];

         this.dataPoints.forEach(point => {
            const latlng = [point[0], point[1]];
            const intensity = point[2];
            const name = point[3];
            const address = point[4];
            const status = point[5];

            this.heatmapLayer.addLatLng(latlng);
            const marker = L.marker(latlng);

            marker.bindPopup(`
               <strong>${name}</strong><br>
               Alamat: ${address}<br>
               Status Keramaian: ${status}
            `);

            marker.on('click', () => {
               this.map.setView(latlng, 17);
            });

            this.clusterGroup.addLayer(marker);
         });
      },
      toggleHeatmap() {
         if (this.isHeatmapActive) {
            this.map.removeLayer(this.heatmapLayer);
         } else {
            this.map.addLayer(this.heatmapLayer);
         }
         this.isHeatmapActive = !this.isHeatmapActive;
      },
      toggleClustering() {
         if (this.isClusteringActive) {
            this.map.removeLayer(this.clusterGroup);
         } else {
            this.map.addLayer(this.clusterGroup);
         }
         this.isClusteringActive = !this.isClusteringActive;
      },
   },
});