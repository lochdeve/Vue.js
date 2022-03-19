const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Cars Dealership',
    cars: [],
    newCar: '',
    newFuel: '',
    newStock: 0,
    total: 0,
    status: ''
  },
  methods: {
    addCar() {
      if (this.newCar != '' && this.newFuel != '' && this.newStock > 0) {
        this.cars.push({
          name: this.newCar,
          fuel: this.newFuel,
          stock: this.newStock
        })
        localStorage.setItem('car-dealership-vue', JSON.stringify(this.cars));
        this.newCar = '';
        this.newFuel = '';
        this.newStock = 0;
        çthis.status = '';
      } else {
        this.status = 'You must fill all the gaps';
      }
    }
  },
  created: function () {
    let dataDB = JSON.parse(localStorage.getItem('car-dealership-vue'));
    console.log(dataDB);
    if (dataDB === null) {
      this.cars = [];
    } else {
      this.cars = dataDB;
    }
  }
})