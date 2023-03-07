
let dice = {
    diceType : document.querySelector('.diceSelect'),
    button : document.getElementById('rollButton'),
    result : document.querySelector('.result'),
    setup : function() {
        this.button.addEventListener('click', function () {
            dice.roll(document.getElementById('number').value, dice.diceType.value)
        })
    },
    getRandomInt : function(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    },
    roll : function (amount, diceMax) {
        this.result.innerHTML = ''
        let total = 0
        for (i=0;i<amount;i++) {
            let newNumber = this.getRandomInt(1,diceMax)
            this.result.innerHTML += newNumber
            total += newNumber
            if (i < amount -1 ) {
                this.result.innerHTML += ' + '
            } 
        }
        this.result.innerHTML += ' = ' + total
    }
}


dice.setup()
