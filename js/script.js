const { createApp } = Vue

createApp({
    data() {
        return {
            todos: [
                {
                    text: 'fare la spesa',
                    done: true
                },
                {
                    text: 'andare dal ferramenta',
                    done: false
                },
                {
                    text: 'andare in farmacia',
                    done: false
                }

            ]
        }

    },


    methods: {

        // funzione per eliminare il 'text' inserito dentro un li della lista
        cancelTodo(index) {
            this.todos.splice(index, 1);
        }

    }


}).mount('#app')
