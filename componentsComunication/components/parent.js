Vue.component('parent', {
  template: //html
    `
    <div class="p-5 bg-dark text-white">
      <h2>Parent component </h2>
      <h5>Age: {{parentAge}}</h5>
      <h5>Chil Name: {{parentName}}</h5>
      <button class="btn btn-success btn-sm" @click="parentAge++">+</button>
      <button class="btn btn-danger btn-sm" @click="parentAge--">-</button>
      <child :age="parentAge" @childName="parentName = $event"></child>
    </div>
  `,
  data() {
    return {
      parentAge: 40,
      parentName: ''
    }
  }

});