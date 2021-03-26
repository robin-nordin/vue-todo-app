<template>
  <li v-on:click="deleteTodo(item.id)"> {{ item.task }} </li>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    item: Object
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
