new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        enemyLife: 100,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.enemyLife == 0
        }

    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100,
            this.enemyLife = 100
        },
        attack(especial) {
            this.hurt('playerLife', 7, 12, especial, 'Jogador', 'Inimigo', 'player')
            if(this.enemyLife > 0) {
                this.hurt('enemyLife', 7, 12, false, 'Inimigo', 'Jogador', 'enemy')
            }
        },
        hurt(prop, min, max, especial, source, target, cls) {
            const plus  = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false)
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls})
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }    
})