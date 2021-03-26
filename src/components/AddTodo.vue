<template>
  <section>
      <input placeholder="Skriv in todo" type="text" v-model="todo">
      <button v-on:click="addTodo">Lägg till</button>
  </section>
</template>

<script>
export default {
    name: 'AddTodo',
    data: function() {
        return {
            todo: ''
        }
    },
    methods: {
        addTodo: function() {
           this.$store.dispatch('addTodo', this.todo);
           this.todo = ''; 
        }
    }
}
</script>

<style>

</style>