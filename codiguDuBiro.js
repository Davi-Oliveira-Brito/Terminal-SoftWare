const readLine = require('prompt-sync')();

function jogoDeAcharNumero() {
    let n = parseInt(Math.random() * 1000);
    for(let i = 0; i < 10; i++) {
        const number = Number(readLine());
        
        if(number === n) return 'Acertou';
        else if (number > n) console.log('É menor');        
        else if (number < n) console.log('É maior');        
    }
    return 'Tentativas esgotadas!';
}

let x = jogoDeAcharNumero();
console.log(x);
