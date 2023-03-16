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
            ],

            newTodo: {
                text: '',
                done: false
            },
        }
    },

    methods: {

        // funzione per eliminare il 'text' inserito dentro un li della lista
        cancelTodo(index) {
            this.todos.splice(index, 1);
        },

        // funzione per aggiungere 'newTodo' al mio array 'todos'
        addNewTodo() {
            
            this.todos.push(this.newTodo);

            this.newTodo = {
                text: '',
                done: false
            };
        },

        /*
        toggleTodo(todo) {

            FORMA ESTESA:

            if (todo.done == false) {
                todo.done = true;
            } else {
                todo.done = false;
            }

            FORMA CONTRATTA:

            todo.done = !todo.done;
        }

        oppure 

        toggleTodo(index) {
            
            this.todos[todo.index].done = !this.todos[todo.index].done;
        }
        */
    }

}).mount('#app')
