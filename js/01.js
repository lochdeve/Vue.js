const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Hola mundo con Vue.js',
    cars: [
      { name: "Ferrari", fuel: "98", stock: 2 },
      { name: "Porsche", fuel: "95", stock: 0 },
      { name: "Lamborghini", fuel: "98", stock: 5 }
    ],
    newCar: '',
    total: 0
  },
  methods: {
    addCar() {
      this.cars.push({
        name: this.newCar,
        fuel: 98,
        stock: 0
      })
      this.newCar = '';
    }
  },
  computed: {
    addNumberOfCars() {
      this.total = 0;
      for (car of this.cars) {
        this.total += car.stock;
      }
      return this.total;
    }
  }

})