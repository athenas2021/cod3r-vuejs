new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Alerta')
        },
        escuta(e) {
            this.valor = e.target.value
        }
    }
})