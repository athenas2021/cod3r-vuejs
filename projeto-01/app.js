new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 0,
        enemyLife: 10,
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.enemyLife == 0
        }

    },
    methods: {

    },
    watch: {

    }    
})