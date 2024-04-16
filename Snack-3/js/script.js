const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];

let arrBenzina = [];
let arrDiesel = [];
let arrRest = [];

automobili.filter((curCar) => {
    if (curCar.alimentazione === "benzina") {
        return true
    } else {
        return false
    }
});

console.log(arrBenzina);

automobili.filter((curCar) => {
    if (curCar.alimentazione === "diesel") {
        return true
    } else {
        return false
    }
});

console.log(arrDiesel);

automobili.filter((curCar) => {
    if (curCar.alimentazione !== "benzina" && curCar.alimentazione !== "diesel") {
        return true
    } else {
        return false
    }
});

console.log(arrRest);

