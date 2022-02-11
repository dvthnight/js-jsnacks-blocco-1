/* Calcola la somma e la media dei primi 10 numeri. */

let somma=0;

for(let i =1; i<=10; i++){
    somma+=i;
}

const media = somma / 10;

console.log("la somma è "+ somma);
console.log("la media è "+media);