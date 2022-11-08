const readLine = require('prompt-sync')();
let numSorteado = parseInt(Math.random() * 1000 );

function binarySearch(tentativa){

    let resposta = "";
    console.log( 'shhhhhh!! A resposta certa é =====  ' + numSorteado)   
    for(let i = 1; i <= 10; i++){
        if(tentativa === numSorteado) {
            resposta =  "Parabéns!! Você acertou!!!!";
            
        }

        else if(tentativa < numSorteado){ 
            resposta = "é MENOR que o correto";
        }

        else if(tentativa > numSorteado){
            resposta = "é MAIOR que o correto";
        }
    
    }
    return resposta;
}

function main(){

    try {
        console.log('### Programinha do Sorteio ###')
        console.log('Tente adivinhar o número sorteado!!')
        console.log('Digite um número:')
        let tent = 0;
        let i =0;
        while(i < 10){
            if(tent === numSorteado){
                break
            }
            else{

                tent = Number(readLine());
            }
            console.log(binarySearch(tent))
            
            i++
            
        }
       
        
    } catch (error) {
        
    }

}
main();