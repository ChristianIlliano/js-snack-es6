const persone = [
    { nome: "Mario", cognome: "Rossi", età: 30 },
    { nome: "Anna", cognome: "Bianchi", età: 17 },
    { nome: "Luca", cognome: "Verdi", età: 40 }
]

const arrPersone = persone.map((curPerson) => {

    if (curPerson.età >= 18) {
        return `${curPerson.nome} ${curPerson.cognome} può guidare`; 
    } else {
        return `${curPerson.nome} ${curPerson.cognome} non può guidare`; 
    }
});

console.log(arrPersone);

