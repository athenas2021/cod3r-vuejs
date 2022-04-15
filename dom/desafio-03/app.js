new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed: {
        resultado() {
            return this.valor >= 37 ?
                'Maior ou igual a 37' : 'Menor que 37'
        }
    },
    watch: {
        valor() {
            const instanciaVue = this
            setTimeout(function() {
                instanciaVue.valor = 0
            }, 5000)

        }
    },
});