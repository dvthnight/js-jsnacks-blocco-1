/* Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente. */

const numeroUtente = parseInt(prompt("inserisci un numero"));


for(let i=1; i<=numeroUtente; i++){
    const cubo = Math.pow(i, 3);
    console.log(cubo);
}
