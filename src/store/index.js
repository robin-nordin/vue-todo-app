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
            const response = await fetch(url, { method: 'GET' }); //here we have received a promise
            const data = await response.json();
            ctx.commit('updateTodos', data.todos);
        },
        async addTodo(ctx, newTodo) {
            //add a todo
            const obj = { task: newTodo };
            const response = await fetch(url,
                {
                    method: 'POST',
                    body: JSON.stringify(obj),
                    headers: {'Content-Type': 'application/json'}
                });
            const data = await response.json();
            ctx.commit('updateTodos', data.newTodo);
        }, 
        async deleteTodo(ctx, id) {
            //delete a todo
            const response = await fetch(url + `/${id}`, { method: 'DELETE' });
            const data = await response.json();
            if (data.success) {
                ctx.dispatch('getTodos');
            }
        }
    }
})