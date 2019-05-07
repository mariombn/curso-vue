new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('ALERTA!');
        },
        atualizarValor(event) {
            this.valor = event.target.value
        }
    },
})