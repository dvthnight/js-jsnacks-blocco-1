/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti. 
 Esegui questo programma in due versioni, con il for e con il while. */

//  con il ciclo for

// const numeri=[];
// let somma = 0;

// for(let i=0; i<5; i++){
//     const numInserito = parseInt(prompt("inserisci un numero"));

//     if(!isNaN(numInserito)){
//         numeri[i] = numInserito;
//         somma += numeri[i];
//     } else{
//         i--;
//     }

    
// }

// console.log(numeri);
// console.log(somma);



// con il ciclo while


const numeri= [];
let somma = 0;
let i=0;

while (numeri.length!=5){
    const numeroInserito = parseInt(prompt("inserisci un numero"));
    
    

    if(!isNaN(numeroInserito)){
        numeri[i]= numeroInserito;
        somma += numeri[i];
        i++;
    }
}

console.log(numeri, somma);


