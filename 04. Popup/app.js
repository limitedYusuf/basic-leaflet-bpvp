new Vue({
   el: '#app',
   data() {
      return {
         map: null,
         places: [
         {
               name: "Taman Nasional Tanjung Puting",
               address: "Kabupaten Kotawaringin Barat, Kalimantan Tengah",
               cost: "Rp 100.000",
               photo: "https://via.placeholder.com/150",
               latlng: [-2.7691, 111.5307]
            },
            {
               name: "Pantai Derawan",
               address: "Kabupaten Berau, Kalimantan Timur",
               cost: "Rp 50.000",
               photo: "https://via.placeholder.com/150",
               latlng: [2.3063, 118.5405]
            },
            {
               name: "Gunung Meratus",
               address: "Kabupaten Hulu Sungai Tengah, Kalimantan Selatan",
               cost: "Rp 25.000",
               photo: "https://via.placeholder.com/150",
               latlng: [-2.8099, 115.3969]
            },
            {
               name: "Pulau Kakaban",
               address: "Kabupaten Berau, Kalimantan Timur",
               cost: "Rp 75.000",
               photo: "https://via.placeholder.com/150",
               latlng: [2.2639, 118.6243]
            },
            {
               name: "Danau Sentarum",
               address: "Kabupaten Kapuas Hulu, Kalimantan Barat",
               cost: "Rp 20.000",
               photo: "https://via.placeholder.com/150",
               latlng: [0.4814, 112.8819]
            },
            {
               name: "Gunung Palung",
               address: "Kabupaten Ketapang, Kalimantan Barat",
               cost: "Rp 30.000",
               photo: "https://via.placeholder.com/150",
               latlng: [-1.1052, 110.4070]
            },
            {
               name: "Pulau Maratua",
               address: "Kabupaten Berau, Kalimantan Timur",
               cost: "Rp 60.000",
               photo: "https://via.placeholder.com/150",
               latlng: [2.1314, 118.3530]
            },
            {
               name: "Pulau Samama",
               address: "Kabupaten Kutai Kartanegara, Kalimantan Timur",
               cost: "Rp 45.000",
               photo: "https://via.placeholder.com/150",
               latlng: [0.4099, 117.3773]
            },
            {
               name: "Air Terjun Bidadari",
               address: "Kabupaten Sintang, Kalimantan Barat",
               cost: "Rp 15.000",
               photo: "https://via.placeholder.com/150",
               latlng: [0.2360, 112.5093]
            },
            {
               name: "Pulau Derawan",
               address: "Kabupaten Berau, Kalimantan Timur",
               cost: "Rp 70.000",
               photo: "https://via.placeholder.com/150",
               latlng: [2.2906, 118.2024]
            },
            {
               name: "Taman Nasional Bromo Tengger Semeru",
               address: "Jl. Raya Bromo, Probolinggo, Jawa Timur",
               cost: "Rp 75.000",
               photo: "https://via.placeholder.com/150",
               latlng: [-7.9425, 112.9533]
            },
            {
               name: "Pulau Bali",
               address: "Denpasar, Bali",
               cost: "Rp 50.000",
               photo: "https://via.placeholder.com/150",
               latlng: [-8.3405, 115.0919]
            },
            {
               name: "Candi Prambanan",
               address: "Jl. Raya Solo - Yogyakarta, Prambanan, Sleman, Yogyakarta",
               cost: "Rp 30.000",
               photo: "https://via.placeholder.com/150",
               latlng: [-7.7520, 110.4914]
            },
         ]
      };
   },
   mounted() {
      this.map = L.map('app').setView([-2.5489, 118.0149], 5);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
      }).addTo(this.map);

      this.places.forEach(place => {
         const marker = L.marker(place.latlng).addTo(this.map);

         const popupContent = `
               <h3>${place.name}</h3>
               <p><strong>Alamat:</strong> ${place.address}</p>
               <p><strong>Biaya:</strong> ${place.cost}</p>
               <img src="${place.photo}" alt="${place.name}" width="150">
           `;

         marker.bindPopup(popupContent);
         marker.bindTooltip(place.name);
      });
   },
});