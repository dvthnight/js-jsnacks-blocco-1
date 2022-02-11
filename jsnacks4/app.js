/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const invitati = ["Giovanni","Antonio","Pino","Francesco","Pierpaolo","Tommaso"];

const nomeUtente = prompt("inserisci il tuo nome");

let j = 0;

for(let i=0; i< invitati.length; i++){
    if(nomeUtente===invitati[i]){
        console.log("Sei sulla lista degli invitati. Puoi entrare.");
        continue;
    } else{
        j++;
    }
}

if(j===invitati.length){
    console.log("Non sei nella lista degli invitati. Non puoi entrare.")
}