new Vue({
   el: '#app',
   data() {
      return {
         map: null,
         markers: [],
      };
   },
   mounted() {
      const self = this;

      this.map = L.map('app').setView([-0.5143, 117.1377], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
      }).addTo(this.map);

      const places = [
         {
            name: "Taman Mahakam",
            address: "Jl. Yos Sudarso No. 2, Samarinda",
            latlng: [-0.5081, 117.1277],
         },
         {
            name: "Pulau Kumala",
            address: "Sungai Kunjang, Samarinda",
            latlng: [-0.4594, 117.1332],
         },
         {
            name: "Pasar Segiri",
            address: "Jl. Hasan Basri, Samarinda",
            latlng: [-0.4967, 117.1534],
         },
         {
            name: "Pantai Melawai",
            address: "Jl. A. Yani, Samarinda",
            latlng: [-0.5096, 117.1467],
         },
         {
            name: "Kampung Budaya Kutai",
            address: "Samarinda Seberang, Samarinda",
            latlng: [-0.4858, 117.1770],
         },
         {
            name: "Taman Bukit Soeharto",
            address: "Jl. Ir. H. Juanda, Samarinda",
            latlng: [-0.5002, 117.1379],
         },
         {
            name: "Danau Cermin",
            address: "Samarinda Ilir, Samarinda",
            latlng: [-0.4933, 117.1506],
         },
         {
            name: "Pulau Beras Basah",
            address: "Samarinda Ulu, Samarinda",
            latlng: [-0.5087, 117.1172],
         },
         {
            name: "Air Terjun Nirwana",
            address: "Jl. Pramuka, Samarinda",
            latlng: [-0.4809, 117.1780],
         },
         {
            name: "Pantai Alun-Alun Mulawarman",
            address: "Samarinda Seberang, Samarinda",
            latlng: [-0.4842, 117.1786],
         },
         {
            name: "Makam Pahlawan Syeh Abdul Rahman",
            address: "Sungai Pinang, Samarinda",
            latlng: [-0.5020, 117.1496],
         },
         {
            name: "Museum Mulawarman",
            address: "Jl. Pangeran Antasari, Samarinda",
            latlng: [-0.5126, 117.1355],
         },
         {
            name: "Air Terjun Sigerincing",
            address: "Samarinda Ulu, Samarinda",
            latlng: [-0.5232, 117.0959],
         },
         {
            name: "Kebun Raya Samarinda",
            address: "Samarinda Seberang, Samarinda",
            latlng: [-0.4941, 117.1813],
         },
         {
            name: "Air Terjun Mentilin",
            address: "Samarinda Ulu, Samarinda",
            latlng: [-0.5216, 117.0965],
         }
      ];

      places.forEach(place => {
         const marker = L.marker(place.latlng)
            .bindPopup(`<strong>${place.name}</strong><br>${place.address}`);

         marker.on('click', () => {
            this.map.setView(place.latlng, 20);
         });

         this.markers.push(marker);
      });

      const markerLayer = L.layerGroup(this.markers);

      L.control.layers(null, { "Marker Wisata": markerLayer }).addTo(this.map);

      L.easyButton('fa-home', function (btn) {
         const defaultCoordinates = [-0.5143, 117.1377];
         self.map.setView(defaultCoordinates, 13);
      }).addTo(this.map);
   },
});