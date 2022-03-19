Vue.component('child', {
  template: //html
    `
    <div class="py-5 bg-success text-white">
      <h2>Child component</h2>
      <h5>Parent Age: {{age}}</h5>
    </div>
  
  `,
  props: ['age']

});