Vue.component('child', {
  template: //html
    `
    <div class="py-5 bg-success text-white">
      <h2>Child component</h2>
      <h5>Parent Age: {{age}}</h5>
      <h5>Name: {{name}}</h5>
      <button class="btn btn-success btn-sm" @click="age++">+</button>
    </div>
  
  `,
  props: ['age'],
  data() {
    return {
      name: 'Pedro'
    }
  },
  mounted() {
    this.$emit('childName', this.name)
  }

});