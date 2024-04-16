let persone = [
    { nome: "Mario", cognome: "Rossi", età: 30 },
    { nome: "Anna", cognome: "Bianchi", età: 17 },
    { nome: "Luca", cognome: "Verdi", età: 40 }
]

// persone.forEach((curPerson) => {
//     curPerson = {nome, cognome}

//     if (persone.età > 18) {
//         return result = "idoneo"
//     } else {
//         result = "non idoneo"
//     }

// });

const arrPersone = persone.map((curPerson) => {

    if (persone.età >= 18) {
        return `${persone.nome} ${persone.cognome} può guidare`; 
    } else {
        return `${persone.nome} ${persone.cognome} non può guidare`; 
    }
});

console.log(arrPersone);

// Creazione dell'array di persone
