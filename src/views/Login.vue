<template>
  <div class="">
    <h1>This is a login page</h1>
    <button @click="onClickSubmit()">Click me</button>
  </div>
</template>

<script>
import * as axios from 'axios'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      text: 'Hello',
    }
  },
  methods: {
    onClickSubmit: async function() {
      console.log('Click')
      console.log(this.text);
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      console.log('response: ', response);
    }
  }
}
</script>