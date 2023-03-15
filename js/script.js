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

    }
}).mount('#app')
