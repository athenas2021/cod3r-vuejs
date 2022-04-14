
new Vue({
    el: '#desafio',
    data: {
        nome: 'Lucas',
        idade: '60',
        imagem: 'https://midias.correiobraziliense.com.br/_midias/jpg/2021/02/11/675x450/1_1_20180829184835707567i_3323899-6527546.jpg'
    },
    methods: {
        multiplicaIdade: function(){
            return (this.idade * 3)
        },
        randomico: function(){
            return Math.random(0, 1)
        }
    }
})
