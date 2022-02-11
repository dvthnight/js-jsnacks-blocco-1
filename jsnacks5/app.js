/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, 
se è dispari inseriscilo nell’array. */

const array = [];
let j= 0;

for(let i = 0; i<6; i++){
    const numero = parseInt(prompt("inserisci un numero"));
    if(!isNaN(numero) && numero%2 != 0){
        array[j]= numero;
        j++;
    }
}

console.log(array);