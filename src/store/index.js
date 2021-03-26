import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'https://awesome-todo-api.herokuapp.com/tasks';

export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos;
        }
    },
    actions: {
        async getTodos(ctx) {
            //get todos
            const response = await fetch(url, { method: 'GET'}); //here we have received a promise
            const data = await response.json;
            ctx.commit('updateTodos', data.todos);
        },
        addTodo() {
            //add a todo
        }, deleteTodo() {
            //delete a todo
        }
    }
})