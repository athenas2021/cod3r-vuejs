<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
        <p>idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar FN (callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            default: function() {
                return Array(10).fill(0).join(',')
            }
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        reiniciarNome() {
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
