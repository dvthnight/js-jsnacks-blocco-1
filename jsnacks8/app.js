/* Chiedi un numero di 4 cifre all’utente e calcola 
la somma di tutte le cifre che compongono il numero. */


let contenitore = [];

do {
    const numeroUtente = parseInt(prompt("inserisci un numero di 4 cifre"));

    // separo il numero inserito dall'utente e inserisco ogni cifra in una cella dell'array
    contenitore = numeroUtente.toString().split("");
    console.log(contenitore);

} while (contenitore.length!=4);

// creo nuovo array in cui trasformo le stringhe in numeri

const contenitoreCifre = contenitore.map(Number);

console.log(contenitoreCifre);

let somma = 0;

for(let i=0; i<contenitoreCifre.length; i++){
    somma += contenitoreCifre[i];
}

console.log(somma);




