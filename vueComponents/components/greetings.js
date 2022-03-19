Vue.component('greetings', {
  template: //html
    `
  <div>
    <h1>{{greetings}}</h1>
    <h3>lorem</h3>
  </div>
  `,
  data() {
    return {
      greetings: 'Hello'
    }
  }
});