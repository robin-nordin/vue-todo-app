<template>
  <section>
    <h1>Home</h1>
    <ul>
      <Todo v-for="(todo, index) in todos" v-bind:key="index" v-bind:item="todo"></Todo>
    </ul>
    <AddTodo></AddTodo>
  </section>
</template>

<script>
import Todo from "../components/Todo.vue";
import AddTodo from "../components/AddTodo.vue";

export default {
  name: "Home",
  components: {
    Todo,
    AddTodo,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  created() {
    this.$store.dispatch("getTodos");
  },
};
</script>

<style>

</style>